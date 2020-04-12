import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddSkill from './views/AddSkill';

import { addSkillAction } from '../../actions/skill.actions';

class AddSkillPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {};
  handleAddSkill = (formData) => {
    this.props.addSkillAction(formData);
  };
  render() {
    return (
      <div>
        <AddSkill handleAddSkill={this.handleAddSkill} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    foo: state.foo,
  };
};

export default connect(mapStateToProps, {
  addSkillAction,
})(AddSkillPage);
