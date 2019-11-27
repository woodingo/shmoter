import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ResultsScreen from '../screens/ResultsScreen';

const routes = {
  Home: HomeScreen,
  Results: ResultsScreen,
};

const AppStack = createStackNavigator(routes);
export default createAppContainer(AppStack);
