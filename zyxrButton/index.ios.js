/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Alert
} from 'react-native';

export default class zyxrButton extends Component {

  render() {

    return (

      <View style={styles.container}>
        
      
      <TouchableHighlight 

      style={styles.btn}  
      underlayColor={'red'}
      activeOpacity={0.8}
      onPress={this.show.bind(this,'点击事件')} >
      <Text style={styles.btnTitle} >
        我是TouchableHighlight按钮
      </Text>

      </TouchableHighlight>


      <TouchableOpacity
      style={styles.btn1}
      activeOpacity={0.5}

      // onPress={this.show.bind(this,'点击事件')} 
      // onPressIn={this.show.bind(this,'点击事件的第一步--按下')}
      // onPressOut={this.show.bind(this,'点击事件的第三步--离开')}
      // onLongPress={this.show.bind(this,'长按事件')}

      onPress={()=>{
        Alert.alert(
            '提示',
            '点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮',
            [ 
              {text:'按钮1',onPress:()=> console.log('按钮1')},
              {text:'按钮3',onPress:()=> console.log('按钮3'), style: 'cancel'},
          ]
          )
        }
      }

      >

      <Text style={styles.btnTitle} >
        我是TouchableOpacity按钮
      </Text>

      </TouchableOpacity>

      </View>
    );
  }



  show(msg) {
    alert(msg)
  };
  



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    margin:50,
  },

  btn: {
    
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',

  },

  btn1: {
    top: 20,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
  },

  button: {
    top: 40,
    width: 200,
    height: 100,
    backgroundColor: 'red',
    color: 'white',
    fontSize: 20,
  },


  btnTitle: {
    fontSize: 20,
    color: '#000000',
  },

  
});

AppRegistry.registerComponent('zyxrButton', () => zyxrButton);
