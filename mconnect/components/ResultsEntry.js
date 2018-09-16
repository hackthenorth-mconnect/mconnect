import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ResultsEntry extends React.Component {

    constructor(props) {
        super(props)
        this._option = this.props.option
    }

    render() {
        return (
            <View style={styles.entry}>
                <Text>{this._option}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    entry: {
      alignSelf: 'stretch'
    }
  });
