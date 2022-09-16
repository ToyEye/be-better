import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import loadable from '@loadable/component';

import Section from 'components/reusableComponents/Section';
import Heading from 'components/reusableComponents/Heading';
import PriceCard from './PriceCard';
import Donations from 'components/Donations';

import { container, list, item, title, donation } from './Price.module.css';
import VectorBackgound from 'images/vectorBackgrounds/price.inline.svg';

const ModalPriceWindow = loadable(() => import('./ModalPriceWindow'));

const Price = () => {
  const [modal, setModal] = useState(false);
  const [currentPrice, setCurrentPrice] = useState('');
  const [currentRate, setCurrentRate] = useState('');

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/price/" } }) {
        nodes {
          frontmatter {
            ukSubscription
            price
            economy
            ukMonth
            ukHour
            enSubscription
            enMonth
            enHour
            ruSubscription
            ruMonth
            ruHour
            id
          }
          id
        }
      }
    }
  `);

  const data = allMarkdownRemark.nodes;
  const { t } = useTranslation();

  const pricePac = t('price', { returnObjects: true });

  useEffect(() => {
    switch (currentPrice) {
      case '$320':
        setCurrentRate('Basic');
        break;

      case '$600':
        setCurrentRate('Standard');
        break;

      case '$850':
        setCurrentRate('Professional');
        break;

      default:
        setCurrentRate('');
    }
  }, [currentPrice]);

  const showModal = price => {
    setCurrentPrice(`$${price}`);
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <Section className={container} id="nav-price" Background={VectorBackgound}>
      <Heading tag="h2" className={title} text={pricePac.title} />
      <ul className={list}>
        {allMarkdownRemark &&
          data.map(({ frontmatter }, id) => {
            return (
              <li className={item} key={frontmatter.id}>
                <PriceCard
                  priceData={{ ...frontmatter, id }}
                  onClick={showModal}
                />
              </li>
            );
          })}
      </ul>
      {modal && (
        <ModalPriceWindow
          hideModal={hideModal}
          currentRate={currentRate}
          currentPrice={currentPrice}
        />
      )}
      <Donations className={donation} />
    </Section>
  );
};

export default Price;
