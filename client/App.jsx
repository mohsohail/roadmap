import React from 'react';
import { renderRoutes } from 'react-router-config';
import Routes from './routes';
import { subscribeToTimer } from './source/utils/timer.utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeStamp: 'no timeStamp yet'
    };
  }
  componentDidMount = () => {
    subscribeToTimer((err, timeStamp) => {
      this.setState({
        timeStamp
      });
    });
  };
  render() {
    return (
      <div>
        {renderRoutes(Routes)}
        <p>{this.state.timeStamp}</p>
      </div>
    );
  }
}

export default App;
