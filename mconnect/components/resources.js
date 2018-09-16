import React from 'react';
import { FlatList, Alert, StyleSheet, Text, Button, View } from 'react-native';

export default class Question1 extends React.Component {
    static navigationOptions = { title: 'Resources', header: null };

  render() {
    return ( <View style={styles.container}>
      <Text style={styles.title}>Here are the resources we recommend for you</Text>
      <Button title="Media viewer"></Button>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#79e0e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
