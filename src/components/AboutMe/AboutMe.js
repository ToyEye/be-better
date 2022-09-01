import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import AboutYou from '../AboutYou';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Section from '../reusableComponents/Section';
import {
  title,
  sectionContainer,
  textContainer,
  caveat,
  aboutMeContainer,
} from './AboutMe.module.css';
import icon from '../../images/signature.svg';

const AboutMe = () => {
  const { t } = useTranslation();

  const data = t('aboutMe', { returnObjects: true });

  return (
    <Section className={sectionContainer} id="nav-about">
      <div className={aboutMeContainer}>
        <div className="flex mb-6 laptop:block desktop:h-[342px]">
          <div className="w-[134px] text-left laptop:hidden mr-3">
            <h2 className="title-primary text-left mb-4 laptop:mb-13 laptop:font-semibold laptop:text-34">
              {data.title}
            </h2>
            <span className="text-black text-left text-sm">
              {data.oneParagraphFirst}
              <span className="text-caveat leading-[0.9]">
                {data.oneParagraphSpan}
              </span>
            </span>
          </div>

          <div className="desktop:hidden">
            <StaticImage
              src="../../images/aboutMe.jpeg"
              layout="constrained"
              alt="author"
              className=" w-[134px] h-[160px] laptop:w-[270px]  laptop:h-[342px] laptop:mr-5  rounded-2xl "
              placeholder="blurred"
              formats={['auto', 'webp', 'avif']}
            />
          </div>
          <div className="hidden laptop:hidden desktop:block">
            <StaticImage
              src="../../images/about.jpg"
              layout="constrained"
              alt="author"
              className="  desktop:w-[456px] desktop:h-[480px]"
              placeholder="blurred"
              formats={['auto', 'webp', 'avif']}
            />
          </div>
        </div>
        <div className={textContainer}>
          <h2 className={title}>{data.title}</h2>
          <p className="mb-2 desktop:mb-8">
            <span className="text-black hidden laptop:inline">
              {data.oneParagraphFirst}
              <span className={caveat}> {data.oneParagraphSpan}</span>
            </span>
            {data.oneParagraphThird}
          </p>
          <p className="mb-2 desktop:mb-[26px]">
            <span className={caveat}> {data.twoParagraphSpan}</span>
            {data.twoParagraphThird}
          </p>
          <p className="mb-2 laptop:hidden desktop:block desktop:mb-8">
            {data.threeParagraphFirst}
            <span className={caveat}>{data.threeParagraphSpan}</span>
            {data.threeParagraphThird}
          </p>
          <p className="mb-6 laptop:hidden desktop:block laptop:mb-0">
            {data.fourParagraph}
          </p>
          <p className="mb-4 laptop:hidden desktop:block laptop:mb-0">
            <span className="text-caveat">{data.fiveParagraphSpan}</span>
          </p>
          <AboutYou />
        </div>
      </div>
      <div>
        <div className=" hidden laptop:block laptop:w-[420px] laptop:ml-auto  desktop:hidden text-left">
          <p className="mb-2  desktop:mb-8">
            {data.threeParagraphFirst}
            <span className={caveat}>{data.threeParagraphSpan}</span> <br />
            <span className="text-black block mt-4">
              {data.threeParagraphThird}
            </span>
          </p>
        </div>
        <div className="text-left hidden  laptop:block laptop:w-[640px] laptop:mt-12  desktop:hidden ">
          <p className="mb-6 laptop:mb-0">{data.fourParagraph}</p>
          <p className="mb-4 laptop:mt-8 laptop:mb-0">
            <span className="text-caveat">{data.fiveParagraphSpan}</span>
          </p>
        </div>
      </div>
      <div className="w-[265px] mt-8  ml-auto laptop:mr-0 laptop:mt-16 desktop:mt-13">
        <svg className="w-[212px] ml-auto h-16 laptop:w-[265px] laptop:h-20">
          <use href={`${icon}#icon-signature`} />
        </svg>
      </div>
    </Section>
  );
};

export default AboutMe;
