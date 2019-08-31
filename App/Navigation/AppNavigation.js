import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from 'react-navigation';
import {SafeAreaView, Text} from 'react-native';

//Styles

//Screens
import screens from './Screens';

// Manifest of possible screens
const NavigatorOne = createStackNavigator(
  {
    Screen1: {
      screen: screens.Screen1,
    },
  },
  {
    initialRouteName: 'Screen1',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const NavigatorTwo = createStackNavigator(
  {
    Screen2: {
      screen: screens.Screen2,
    },
  },
  {
    initialRouteName: 'Screen2',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

function SafeAreaMaterialTopTabBar(props) {
  return (
    <SafeAreaView>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
}

const TabNavigator = createMaterialTopTabNavigator(
  {
    Screen1: {
      screen: NavigatorOne,
    },
    Screen2: {
      screen: NavigatorTwo,
    },
    Screen3: {
      screen: screens.Screen3,
    },
  },
  {
    tabBarComponent: SafeAreaMaterialTopTabBar,
    animationEnabled: true,
    optimizationsEnabled: true,
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#2d2d2d',
      showIcon: true,
      style: {
        backgroundColor: '#ffdd00',
      },
    },
  },
);

export default createAppContainer(TabNavigator);
