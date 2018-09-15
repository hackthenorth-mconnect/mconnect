import React from 'react';
import { FlatList, Alert, StyleSheet, Text, Button, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

export default class Question2 extends React.Component {

    static navigationOptions = { title: 'Question2', header: null };

  _onInput(key) {
      Alert.alert(key)
  }

  render() {
    return ( <View style={styles.container}>
      <Text style={styles.title}>Are you ...</Text>
      <FlatList
        data={[
          {key: 'Sweating'},
          {key: 'Hyperventilating'},
          {key: '....'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
      <Button title='Next'  onPress={() =>
            this.props.navigation.navigate('Resources')
          } style={styles.SubmitButtonStyle}></Button>
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
  SubmitButtonStyle: {
  },
  title: {
  },
  selectButtons: {
    backgroundColor: '#fff'
  },
});
