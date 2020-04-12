import React, { Component } from 'react';
import Top from '../../../components/Top/Top';

import SkillCard from '../../../components/SkillCard/SkillCard';

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { skillsData } = this.props;
    if (!skillsData) {
      return null;
    }
    return (
      <>
        <div>
          <Top></Top>
        </div>
        <>
          {skillsData.data.map((skill) => (
            <SkillCard history={this.props.history} key={skill._id} data={skill} />
          ))}
        </>
      </>
    );
  }
}

export default Skill;
