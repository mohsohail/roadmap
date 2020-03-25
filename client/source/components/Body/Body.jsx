import React from 'react';
import SkillCard from '../SkillCard/SkillCard';

const Body = props => {
  return (
    <>
      <div>
        <SkillCard name={'react'} />
      </div>
      <div>
        <SkillCard name={'redux'} />
      </div>
    </>
  );
};

export default Body;
