import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { text, btn, img, people, arrow, svg } from './Oferta.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Container from '../Container';
import { Link } from 'gatsby';
import Heading from '../reusableComponents/Heading';

const Pk = () => {
  const { i18n } = useTranslation();

  const allMarkdownRemark  = useStaticQuery(graphql`
    query {
      text: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/oferta/" } }) {
        nodes {
          html
          frontmatter {
            title
            language
          }
          id
        }
      }
      avatarBack: file(name: { eq: "back" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: CONSTRAINED
          )
        }
      }
      avatarOferta: file(name: { eq: "ofertar-min" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: CONSTRAINED
          )
        }
      }
      avatarMin: file(name: { eq: "ofertal-min" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

  
  const back = allMarkdownRemark.avatarBack.childImageSharp.gatsbyImageData;
  const oferta = allMarkdownRemark.avatarOferta.childImageSharp.gatsbyImageData;
  const minimum = allMarkdownRemark.avatarMin.childImageSharp.gatsbyImageData;

  const data = allMarkdownRemark.text.nodes;
  return (
    <Container className="">
      <div className="relative w-full">
        <div className="flex desktop:flex-row">
          <Link
            to="/"
            className="w-9 h-5 hover:scale-110 mr-20 transition-transform tablet:ml-1  tablet:mt-4 laptop:mt-5 laptop:ml-13 laptop:mr-40 laptop:pl-14 "
          >
            <StaticImage
              src="../../images/logo.svg"
              width={90}
              height={56}
              className=""
              layout="fixed"
              alt="logo"
            />
            
          </Link>
          <Link
            to="/"
            className="max-w-xs cursor-pointer  mb-16   desktop:mt-24"
          >
            {/* <StaticImage
              className="mt-8 cursor-pointer m-auto w-8 tablet:ml-40 h-5 -ml-96  laptop:ml-80 laptop:h-7 desktop:-ml-60"
              src="../../images/back.png"
              alt="background"
            /> */}
            <GatsbyImage
              image={back}
              alt="background"
              style={{ position: 'absolute' }}
              className="mt-8 cursor-pointer m-auto w-8 tablet:ml-40 h-5 -ml-96  laptop:ml-80 laptop:h-7 desktop:-ml-60"
            />
          </Link>
        </div>
        {/* <StaticImage
          layout="fullWidth"
          src="../../images/ofertar-min.png"
          alt=""
          style={{ position: 'absolute' }}
          className="-z-20 top-11  tablet:object tablet:mt-6 tablet:h-20 tablet:w-36 laptop:w-96 laptop:mt-5 laptop:ml-80 -cover  h-20 ml-40   mt-0   mb-16 pr-0 max-w-5xl  desktop:h-36 desktop:-mt-12 desktop:ml-96 desktop:w-3/4"
          formats={['auto', 'webp', 'avif']}
        /> */}
            <GatsbyImage
              image={oferta}
              alt="background"
              style={{ position: 'absolute' }}
              className="-z-20 top-11 ml-[4px]  tablet:object tablet:mt-6 tablet:h-20 tablet:w-36 laptop:w-96 laptop:mt-5  -cover  h-20 laptop:-ml-[4px]   mt-0   mb-16 pr-0 max-w-5xl  desktop:h-36 desktop:-mt-12 desktop:-ml-[290px] desktop:w-3/4"
            />
        {/* <StaticImage
          layout="fullWidth"
          src="../../images/ofertal-min.png"
          alt=""
          style=""
          className="tablet:hidden desktop:block w-3/4 -z-10 top-0  max-w-md  !float-right mr-40  -mt-32 mb-16  h-60 rounded-lg "
          formats={['auto', 'webp', 'avif']}
        /> */}
              <GatsbyImage
              image={minimum}
              alt="background"
              style={{ position: 'absolute' }}
              className="tablet:hidden desktop:block w-3/4 -z-10 top-0  max-w-md  !float-right mr-40 mt-[60px] ml-[920px]  mb-16  h-60 rounded-lg"
            />
        <div className="text-start h-96 block tablet:pl-5 laptop:pl-28 desktop:pl-72">
          {data.map(node => {
            if (node.frontmatter.language === i18n.language) {
              return (
                <>
                  <Heading
                    tag="h1"
                    text={node.frontmatter.title}
                    className="text-main tablet:text-2xl -mt-[62px]  font-semibold laptop:text-4xl absolute mb-2 laptop:-mt-[72px] desktop:-mt-[190px]"
                  />

                  <div
                    key={node.frontmatter.language}
                    className="pt-0 h-96 mt-32 tablet:mr-10 laptop:mt-34px laptop:mr-32 desktop:mt-[150px] desktop:mr-52 "
                    dangerouslySetInnerHTML={{ __html: node.html }}
                  />
                </>
              );
            }
          })}
        </div>
      </div>
    </Container>
  );
};

export default Pk;
