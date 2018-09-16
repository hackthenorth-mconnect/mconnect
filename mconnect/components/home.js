import React from 'react';
import {createStackNavigator} from 'react-navigation';
import { StyleSheet, Text, Button, View, TouchableOpacity, Image } from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = { title: 'Home', header: null };
    render() {
        return (
            <View style={styles.container}>
            <Image source={require('./images/logo.png')} style={styles.logoStyle}/>
             <Text style={styles.appTitle}>mConnect</Text>
             <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={() =>
            this.props.navigation.navigate('Question1')
          }
       >            
       <Text style={styles.TextStyle}> Start </Text>
      </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#79e0e5',
        justifyContent: 'center',
        alignItems:'center'
      },
    appTitle: {
        color: 'rgb(255,255,255)',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    SubmitButtonStyle: {
        marginTop: 50,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#00BCD4',
        borderRadius:10,
        borderWidth: 1,
        width: 200,
        borderColor: '#fff',
        justifyContent: 'flex-end'
    
      },
      TextStyle:{
          color:'#fff',
          textAlign:'center',
      },
      logoStyle: {
          alignItems: 'center'
      }
})