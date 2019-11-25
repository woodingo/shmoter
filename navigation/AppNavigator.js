import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

// import MainTabNavigator from './MainTabNavigator';

// export default createAppContainer(
//   createSwitchNavigator({
//     // You could add another route here for authentication.
//     // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//     Main: MainTabNavigator,
//   })
// );

const routes = {
  Home: HomeScreen,
};

const AppStack = createStackNavigator(routes);
export default createAppContainer(AppStack);
