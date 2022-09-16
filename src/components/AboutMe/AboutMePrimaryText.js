import React from 'react';
import PropTypes from 'prop-types';

import Heading from 'components/reusableComponents/Heading';
import AboutYou from 'components/AboutYou';
import useMediaRules from 'helpers/getMedia';

import { title, textContainer, caveat } from './AboutMe.module.css';

const AboutMePrimaryText = ({ data }) => {
  const media = useMediaRules();

  return (
    <div className={textContainer}>
      <Heading tag="h2" className={title} text={data.title} />
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
      {media !== 'tablet' && (
        <>
          <p className="mb-2 desktop:block desktop:mb-8">
            {data.threeParagraphFirst}
            <span className={caveat}>{data.threeParagraphSpan}</span>
            {data.threeParagraphThird}
          </p>
          <p className="mb-6 desktop:block laptop:mb-0">{data.fourParagraph}</p>
          <p className="mb-4 desktop:block laptop:mb-0">
            <span className="text-caveat">{data.fiveParagraphSpan}</span>
          </p>
        </>
      )}
      <AboutYou />
    </div>
  );
};

export default AboutMePrimaryText;

AboutMePrimaryText.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
};
