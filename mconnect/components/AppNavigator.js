import { createStackNavigator } from 'react-navigation';
import Question1 from './question1';
import Question2 from './question2';
import Resources from './resources';
import Home from './home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Question1: { screen: Question1 },
  Question2: { screen: Question2 },
  Resources: { screen: Resources },
});

export default AppNavigator;