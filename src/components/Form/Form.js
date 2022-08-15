import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Button from '../reusableComponents/Button';
import {
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from 'libphonenumber-js/max';
// import s from './Form.module.css';

const schema = yup
  .object({
    name: yup
      .string()
      .matches(
        /^[а-яА-ЯёЁa-zA-Z]{1}[а-яА-ЯёЁa-zA-Z ]+$/,
        'Please enter valid name'
      )
      .min(3, 'Name must contain 3 or more letters')
      .max(100, 'Name can not contain more then 100 letters')
      .required('Name is required'),
    email: yup
      .string()
      .email()
      .matches(
        /^[a-zA-Z0-9+_.]+[a-zA-Z0-9+_.-]+@[a-zA-Z0-9_.-]+$/,
        'Please enter valid email'
      )
      .min(10, 'Email must contain 10 or more symbols')
      .max(63, 'Email can not contain more then 63 symbols')
      .required('Email is required'),
    phone: yup
      .string()
      .min(9, 'Phone number must contain at least 8 digits')
      .max(13, 'Phone number cannot contain more than 13 digits')
      .required('Phone number is required'),
    checkbox: yup.boolean().required('You must accept the terms'),
  })
  .required();

const isBrowser = typeof window !== 'undefined';

const Form = ({ clickFrom }) => {
  const [userLocation, setUserLocation] = React.useState('');
  const { t } = useTranslation();
  const data = t('form', { returnObjects: true });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm(
    {
      resolver: yupResolver(schema),
    },
    {
      defaultValues: {
        checkbox: false,
      },
      mode: 'onBlur',
    }
  );

  useFormPersist(`form-${clickFrom}`, {
    watch,
    setValue,
    storage: isBrowser ? window.localStorage : null,
  });

  const GATSBY_TOKEN = process.env.GATSBY_TOKEN;
  const GATSBY_CHAT_ID = process.env.GATSBY_CHAT_ID;

  const onSubmit = async data => {
    let message = `
    <b>Request information:</b>
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Checkbox: yes
    Form send from: ${clickFrom}
    
    <b>Additional information:</b>
    <i>TransactionID: 11111111</i>
    <i>BlockID: 22222222</i>
    <i>Form name: contact</i>
    <a href="https://be-better.today">https://be-better.today</a>
    ------
    `;

    const TG_URL = `https://api.telegram.org/bot${GATSBY_TOKEN}/sendMessage?chat_id=${GATSBY_CHAT_ID}`;

    await axios
      .post(TG_URL, {
        text: message,
        parse_mode: 'HTML',
      })
      .then(() => alert('Заявка отправлена!'))
      .catch(error => alert(error))
      .finally(() => {
        reset();
        localStorage.removeItem(`form-${clickFrom}`);
      });
  };

  axios('https://api.db-ip.com/v2/free/self')
    .then(data => {
      const location = data.data.countryCode;
      if (location) {
        setUserLocation(location.toLowerCase());
      }
    })
    .catch(err => console.log(err));

  const onValidatePhoneNumber = (value, country) => {
    if (value && value.length > 9) {
      if (isValidPhoneNumber(value, country.iso2.toUpperCase())) {
        return true;
      } else if (
        validatePhoneNumberLength(value, country.iso2.toUpperCase()) ===
        'TOO_SHORT'
      ) {
        return 'Too short number';
        // return (
        //   <p className="absolute -bottom-16 -left-12 w-32">Too short number</p>
        // );
      } else if (
        validatePhoneNumberLength(value, country.iso2.toUpperCase()) ===
        'TOO_LONG'
      ) {
        return 'Too long number';
        // return (
        //   <p className="absolute -bottom-16 -left-12 w-32">Too long number</p>
        // );
      } else {
        return 'Enter correct number';
        // return <p className="absolute -bottom-16 -left-12 w-32"></p>;
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="w-80 m-auto"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        {...register('name')}
        className="w-80 mb-4 p-2"
        placeholder={data.nameInput}
      />
      <p className=" text-red">{errors.name?.message}</p>
      <input
        {...register('email')}
        className="w-80 mb-4 p-2"
        placeholder="E-mail"
      />
      <p className="text-red">{errors.email?.message}</p>
      <Controller
        name="phone"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <PhoneInput
            country={userLocation || 'ua'}
            placeholder="Enter phone number"
            preferredCountries={['ua', 'gb']}
            isValid={onValidatePhoneNumber}
            {...field}
          />
        )}
      />

      <p className=" text-red">{errors.phone?.message}</p>
      <Controller
        name="checkbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <>
            <input type="checkbox" {...field} />
            <span>{data.accept}</span>
          </>
        )}
      />
      <p className=" text-red">{errors.checkbox?.message}</p>
      <Button type="submit" className="p-4 border rounded-lg mt-2 ">
        {data.button}
      </Button>
    </form>
  );
};

export default Form;
