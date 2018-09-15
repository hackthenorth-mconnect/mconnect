import React from 'react';
<<<<<<< Updated upstream
import { StyleSheet, View } from 'react-native';
import { MediaViewer } from './components/media-components.js';
=======
import AppNavigator from './AppNavigator';
>>>>>>> Stashed changes

export default class App extends React.Component {

  render() {
<<<<<<< Updated upstream
    return (
      <MediaViewer />
      // <View style={styles.container}>
      // </View>
=======
    return(
      <AppNavigator/>
>>>>>>> Stashed changes
    );
  }
}