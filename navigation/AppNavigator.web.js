import { createBrowserApp } from '@react-navigation/web';
import { createStackNavigator } from 'react-navigation';

const routes = {
  Home: HomeScreen,
  Results: ResultsScreen,
};

const appStack = createStackNavigator(routes);
appStack.path = '';

export default createBrowserApp(appStack, { history: 'hash' });
