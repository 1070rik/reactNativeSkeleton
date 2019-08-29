import React, {Component} from 'react';
import AppNavigation from '../Navigation/AppNavigation';
// This will be the first loaded screen
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Home>
        <AppNavigation />
      </Home>
    );
  }
}

export default App;
