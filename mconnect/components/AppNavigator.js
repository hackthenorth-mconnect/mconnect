import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Question1 from './question1';
import Question2 from './question2';
import Resources from './resources';
import FirebaseDb from '../FirebaseDb';

const db = FirebaseDb();

const AppNavigator = createStackNavigator({
  Question1: { screen: Question1 },
  Question2: { screen: Question2 },
  Resources: { screen: <Resources db={db}/> },
});

export default AppNavigator;