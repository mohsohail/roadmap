import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditSkill from './views/EditSkill';
import { dispatchFoo } from '../../actions/foo.actions';

class EditSkillPage extends Component {
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
        <EditSkill {...this.props} />
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
  dispatchFoo,
})(EditSkillPage);
