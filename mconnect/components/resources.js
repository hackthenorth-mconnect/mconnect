import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import ResultsEntry from './ResultsEntry'

export default class Question1 extends React.Component {
    static navigationOptions = { title: 'Resources', header: null };

  render() {
    return ( 
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Here are some things that might help:</Text>
      <ResultsEntry/>
      <ResultsEntry/>
      <ResultsEntry/>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#79e0e5',
    flex: 1
  }
});
