import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ResultsEntry extends React.Component {

    render() {
        return (
            <View style={styles.entry}>
                <Text>Hello!</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    entry: {
      alignSelf: 'stretch'
    }
  });
