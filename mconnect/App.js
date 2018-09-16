import React from 'react';
import AppNavigator from './components/AppNavigator';
import FirebaseDb from './FirebaseDb';

const db = new FirebaseDb();

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator db={db} />
    );
  }
}