import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ResultsScreen from '../screens/ResultsScreen';
import ProductScreen from '../screens/ProductScreen';

const routes = {
  Home: HomeScreen,
  Results: ResultsScreen,
  Product: ProductScreen,
};

const AppStack = createStackNavigator(routes);
export default createAppContainer(AppStack);
