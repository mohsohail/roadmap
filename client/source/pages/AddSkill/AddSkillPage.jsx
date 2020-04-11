import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddSkill from './views/AddSkill';
import { dispatchFoo } from '../../actions/foo.actions';

class AddSkillPage extends Component {
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
        <AddSkill {...this.props} />
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
})(AddSkillPage);
