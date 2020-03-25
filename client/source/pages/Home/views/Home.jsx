import React, { Component } from 'react';

import Header from '../../../components/Header/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Search></Search>
      </div>
    );
  }
}

export default Home;
