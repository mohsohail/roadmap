import React, { Component } from 'react';
import { connect } from 'react-redux';

import Skill from '../Skill/views/Skill';

import { fetchSkills } from '../../actions/skill.actions';

class SkillPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.props.fetchSkills();
  };
  render() {
    return (
      <div>
        <Skill {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    skills: state.skill.skillsData,
  };
};

export default connect(mapStateToProps, {
  fetchSkills,
})(SkillPage);
