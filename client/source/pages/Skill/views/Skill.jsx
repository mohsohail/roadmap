import React, { Component } from 'react';
import Top from '../../../components/Top/Top';

import SkillCard from '../../../components/SkillCard/SkillCard';

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          <Top></Top>
        </div>
        <>
          <div>
            <SkillCard name={'react'} />
          </div>
          <div>
            <SkillCard name={'redux'} />
          </div>
        </>
      </>
    );
  }
}

export default Skill;
