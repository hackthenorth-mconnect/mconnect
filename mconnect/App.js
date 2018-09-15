import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MediaViewer } from './components/media-components.js';

export default class App extends React.Component {
  render() {
    return (
      <MediaViewer />
      // <View style={styles.container}>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
