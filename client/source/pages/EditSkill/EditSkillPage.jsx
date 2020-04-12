import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditSkill from './views/EditSkill';

import { fetchSkill, updateSkill } from '../../actions/skill.actions';

class EditSkillPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchSkill({ id: match.params.id });
  }
  handleUpdateSkill = (payload) => {
    this.props.updateSkill(payload);
  };
  render() {
    return (
      <div>
        <EditSkill skillData={this.props.skillData} updateSkill={this.handleUpdateSkill} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    skillData: state.skill.skillData,
  };
};

export default connect(mapStateToProps, {
  fetchSkill,
  updateSkill,
})(EditSkillPage);
