import React from 'react';
import { Picker, FlatList, Alert, StyleSheet, Text, Button, View } from 'react-native';

export default class Question1 extends React.Component {
  static navigationOptions = { title: 'Question1', header: null };
  
  _onInput(key) {
  }

  state = {level: ''}
   updateLevel = (level) => {
      this.setState({ level: level })
   }

  render() {
    return ( 
    <View style={styles.container}>
      <Text style={styles.title}>How tense are you?</Text>
      <Picker
        selectedValue = {this.state.level} 
        onValueChange = {this.updateLevel}
        style={{ height: 50, width: 100 }}>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
      <Button title='Next' onPress={() =>
            this.props.navigation.navigate('Question2')
          } style={styles.SubmitButtonStyle}>
      </Button>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79e0e5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginTop: 50,
    paddingTop: 150,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  TextStyle:{
      textAlign: 'center',
      fontSize: 20, 
      color: '#fff'
  },
  title: {
    color: 'rgb(66, 134, 244)',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
  }, 
  logoStyle: {
      width: 50,
      height: 50,
      alignItems: 'center',
  },
  submitStyle: {
    width: 200,
  }
});