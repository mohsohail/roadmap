import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditSkill from './views/EditSkill';

import { fetchSkill } from '../../actions/skill.actions';

class EditSkillPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchSkill({ id: match.params.id });
  }
  render() {
    return (
      <div>
        <EditSkill skillData={this.props.skillData} {...this.props} />
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
})(EditSkillPage);
