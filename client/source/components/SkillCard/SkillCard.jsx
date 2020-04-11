import React from 'react';
import './SkillCard.scss';

const SkillCard = ({ data }) => {
  return (
    <div className="card-wrapper">
      <div className="card-well">
        <div>Skill: {data.skillName}</div>
        <div>Sessions: {data.sessions}</div>
        <div>Current Session: {data.currentSession}</div>
      </div>
    </div>
  );
};

export default SkillCard;
