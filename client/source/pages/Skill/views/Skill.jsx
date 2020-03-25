import React, { Component } from 'react';
import Top from '../../../components/Top/Top';
import Body from '../../../components/Body/Body';
import Bottom from '../../../components/Bottom/Bottom';

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
        <div>
          <Body></Body>
        </div>
        <div>
          <Bottom></Bottom>
        </div>
      </>
    );
  }
}

export default Skill;
