/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow -本组件可以自动根据键盘的位置，调整自身的position或底部的padding，以避免被遮挡
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,

} from 'react-native';

export default class zyxrKeyboardAvoidingView extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  componentWillMount() {

  }
  componentDidMount () {

  }

  componentWillUnmount() {  

  }


  render() {

    return (

      <View style={styles.container}>

        <View style={{width: 300,height: 50,backgroundColor: 'yellow',marginBottom: 50}} >

        </View>
        
        <KeyboardAvoidingView behavior='padding'>

          <TextInput style={styles.textInput} />

          <View style={{width: 300,height: 50,backgroundColor: 'red',marginBottom: 20}} >

          </View>

        </KeyboardAvoidingView>

        <View style={{width: 300,height: 50,backgroundColor: 'green',marginBottom: 20}} >

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor:'rgba(0, 0, 255, 0.2)',
  },

  textInput:{
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginBottom: 50,
  },

});

AppRegistry.registerComponent('zyxrKeyboardAvoidingView', () => zyxrKeyboardAvoidingView);
