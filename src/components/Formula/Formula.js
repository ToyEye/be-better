import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  formulaContainer,
  list,
  itemLi,
  title,
  iconArrow,
  text,
  icon,
} from './Formula.module.css';
import Section from '../reusableComponents/Section';
import { StaticImage } from 'gatsby-plugin-image';
import BackgroundImg from '../reusableComponents/BackgroundImg';
import { IoIosArrowRoundDown } from 'react-icons/io';
import icons from '../../images/formulaIcons.svg';

const Formula = () => {
  const { t } = useTranslation();
  const data = t('formula', { returnObjects: true });

  const image = useStaticQuery(graphql`
    query {
      file(name: { eq: "backgroundBlu" }) {
        id
        publicURL
        childImageSharp {
          gatsbyImageData
          id
        }
      }
    }
  `);

  return (
    <Section className={formulaContainer}>
      {/* <BackgroundImg /> */}
      <StaticImage
        layout="fullWidth"
        src="../../images/background/backgroundBlu.jpg"
        alt=""
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0"
      />
      <h3 className={title}>{data.title}</h3>
      <ul className={list}>
        {data.list.map(({ svg, name }) => (
          <li
            key={svg}
            className="flex flex-col items-center w-full  desktop:flex-row"
          >
            <div className={itemLi}>
              <div className="w-14 h-14 bg-white rounded-lg absolute shadow-you -top-icon left-2/4 -translate-x-1/2">
                <svg className={icon}>
                  <use href={`${icons}#icon-${svg}`} />
                </svg>
              </div>
              <p className={text}>{name}</p>
              <svg className="h-16 w-16 fill-iconBg ml-auto mt-iconBG ">
                <use href={`${icons}#icon-${svg}`} />
              </svg>
            </div>
            <IoIosArrowRoundDown className={iconArrow} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Formula;
