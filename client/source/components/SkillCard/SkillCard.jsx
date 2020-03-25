import React from 'react';
import './SkillCard.scss';

const SkillCard = ({ name }) => {
  return (
    <div className="card-wrapper">
      <div className="card-well">
        <div>{name}</div>
        <div>body</div>
        <div>footer</div>
      </div>
    </div>
  );
};

export default SkillCard;
