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
    console.log('##', this.props.skillsData);
    return (
      <div>{this.props.skillsData.status == 2 && <Skill skillsData={this.props.skillsData} />}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    skillsData: state.skill.skillsData,
  };
};

export default connect(mapStateToProps, {
  fetchSkills,
})(SkillPage);
