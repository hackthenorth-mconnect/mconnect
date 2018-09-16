import React from 'react';
import { Flatlist, TouchableOpacity, Alert, StyleSheet, Text, Button, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

export default class Question2 extends React.Component {

    static navigationOptions = { title: 'Question2', header: null };

  _onInput(key) {
      Alert.alert(key)
  }

  render() {
    return ( 
      <View style={styles.container}>
      <Text style={styles.title}>Are you ...</Text>
  
      <Flatlist>
        
      </Flatlist>
       <TouchableOpacity
          style={[styles.buttonStyle, styles.submitStyle]}
          activeOpacity = { .5 }
          onPress={() =>
            this.props.navigation.navigate('Resources')
          }
       >            
       <Text style={styles.TextStyle}> Next </Text>
      </TouchableOpacity>
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
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  TextStyle:{
      textAlign:'center',
      fontSize: 20, 
      color: '#fff'
  },
  title: {
    color: 'rgb(66, 134, 244)',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft:30,
    marginRight:30,
    paddingTop:15,
    paddingBottom:15,
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
