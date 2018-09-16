import React from 'react';
import { FlatList, Alert, StyleSheet, Text, Button, View } from 'react-native';

export default class Question1 extends React.Component {
    static navigationOptions = { title: 'Question1', header: null };
  _onInput(key) {
  }

  render() {
    return ( 
    <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>How tense are you?</Text>
      <View style={styles.listStyle}></View>
      <FlatList
        horizontal={true}
        data={[
          {key: '1'},
          {key: '2'},
          {key: '3'},
          {key: '4'},
          {key: '5'},
        ]}
        renderItem={({item}) => <Button title={item.key} onPress={this._onInput(item.key)} style={styles.selectButtons}></Button>}
      />
      <Button title='Next' onPress={() =>
            this.props.navigation.navigate('Question2')
          } style={styles.SubmitButtonStyle}>
          </Button>
           </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#79e0e5',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectButtons: {
    backgroundColor: '#fff'
  },
  listStyle: {
    justifyContent: 'space-between'
  },
});