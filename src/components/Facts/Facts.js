import React from 'react';
import Section from '../reusableComponents/Section';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import icons from '../../images/factsIcons.svg';
import Way from '../Way';
import { IconContext } from 'react-icons';
import {
  MdBusinessCenter,
  MdOutlineThumbUp,
  MdOutlineStackedLineChart,
  MdOutlineDomain,
  MdOutlineMoreTime,
  MdFactCheck,
} from 'react-icons/md';
import Heading from '../reusableComponents/Heading';

import {
  section,
  title,
  contentContainer,
  imgMob,
  img,
  titleFacts,
  listFacts,
  itemFacts,
  svgContainerFacts,
  textContainer,
  textPr,
  testSec,
  bgFacts,
} from './Facts.module.css';
import { useMedia } from 'react-use';

const factsIcons = [
  <MdBusinessCenter />,
  <MdOutlineThumbUp />,
  <MdOutlineStackedLineChart />,
  <MdOutlineDomain />,
  <MdFactCheck />,
  <MdOutlineMoreTime />,
];

const Facts = () => {
  const foto = useStaticQuery(graphql`
    query {
      mob: file(name: { eq: "factMob" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      desk: file(name: { eq: "factsFoto" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const { t } = useTranslation();
  const data = t('facts', { returnObjects: true });
  const isWide = useMedia('(min-width:1440px');

  const fotoMob = foto.mob.childImageSharp.gatsbyImageData;
  const fotoDesk = foto.desk.childImageSharp.gatsbyImageData;

  return (
    <Section className={section} id="facts">
      <Heading tag="h2" className={title} text={data.title} />
      <StaticImage
        layout="fullWidth"
        src="../../images/background/features.jpg"
        alt=""
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0"
      />
      <div className={contentContainer}>
        <div>
          <Heading tag="h2" className={titleFacts} text={data.title} />
          {!!data.list.length && (
            <ul className={listFacts}>
              {data.list.map(({ textPrimary, textSecondary, bg }, index) => {
                return (
                  <li className={itemFacts} key={`${icons}-${index}`}>
                    <div className={svgContainerFacts}>
                      <IconContext.Provider
                        value={{
                          className: 'stair-icons mt-[11px] fill-[mainSecond] ',
                          color: '#FF9B62',
                        }}
                      >
                        {factsIcons[index]}
                      </IconContext.Provider>
                    </div>
                    <div className={textContainer}>
                      <div className="flex mt-11 laptop:block laptop:mt-0">
                        <IconContext.Provider
                          value={{
                            className: 'w-4 h-4 mr-2 laptop:hidden',
                            color: '#FF9B62',
                          }}
                        >
                          {factsIcons[index]}
                        </IconContext.Provider>
                        <p className={textPr}>{textPrimary}</p>
                      </div>
                      <p className={testSec}>{textSecondary}</p>
                      <p className={bgFacts}>{bg}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        {isWide ? (
          <GatsbyImage image={fotoDesk} alt="foto" className={img} />
        ) : (
          <GatsbyImage image={fotoMob} alt="foto" className={imgMob} />
        )}
      </div>
      <Way />
    </Section>
  );
};

export default Facts;
