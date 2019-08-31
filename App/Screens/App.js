import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavigation from '../Navigation/AppNavigation';
// This will be the first loaded screen
import GeneralStatusBarColor from '../Components/Headers/GeneralStatusBar';
import {Provider} from 'react-redux';
import configureStore from '../Redux/ConfigureStore';

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <View style={styles.root}>
          <GeneralStatusBarColor
            backgroundColor="#ffdd00"
            barStyle="dark-content"
          />
          <AppNavigation />
        </View>
      </Provider>
    );
  }
}

const styles = new StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
