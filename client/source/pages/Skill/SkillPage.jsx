import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skill from '../Skill/views/Skill';
import { dispatchFoo } from '../../actions/foo.actions';

class SkillPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {};
  handleFooClick = () => {
    this.props.dispatchFoo();
  };
  render() {
    return (
      <div>
        <Skill {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    foo: state.foo
  };
};

export default connect(mapStateToProps, {
  dispatchFoo
})(SkillPage);
