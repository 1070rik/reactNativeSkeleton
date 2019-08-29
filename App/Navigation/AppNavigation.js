import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
  MaterialTopTabBar,
} from 'react-navigation';
import {Text, SafeAreaView} from 'react-native';

//Styles
import styles from '../Styles/NavigationStyles';
import Colors from '../Themes/Main/Colors';

//Screens
import screens from './Screens';

// Manifest of possible screens
const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: screens.Home,
    },
  },
  {
    initialRouteName: 'Home',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitleStyles,
      headerMode: 'none',
      headerTitle: <Text>App</Text>,
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
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Text style={{color: tintColor}}>Home</Text>
        ),
      },
    },
  },
  {
    tabBarComponent: SafeAreaMaterialTopTabBar,
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    optimizationsEnabled: true,
    lazy: true,
    headerMode: 'none',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: Colors.orange,
      inactiveTintColor: '#000',
      showIcon: true,
      style: {
        backgroundColor: '#fff',
        opacity: 1,
        borderTopColor: Colors.borderColor,
        borderTopWidth: 1,
      },
      iconStyle: {
        opacity: 1,
      },
      tabStyle: {
        opacity: 1,
      },
      indicatorStyle: {
        display: 'none',
        color: '#fff',
        opacity: 0,
      },
    },
  },
);

export default createAppContainer(TabNavigator);
