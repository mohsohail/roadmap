import React from 'react';
import './SkillCard.scss';

const SkillCard = ({ data, history }) => {
  const handleSkillCardClick = (_id) => {
    history.push(`/edit-skills/${_id}`)
  }
  return (
    <div className="card-wrapper">
      <div className="card-well" onClick={() => handleSkillCardClick(data._id)}>
        <div>Skill: {data.skillName}</div>
        <div>Sessions: {data.sessions}</div>
        <div>Current Session: {data.currentSession}</div>
      </div>
    </div>
  );
};

export default SkillCard;
