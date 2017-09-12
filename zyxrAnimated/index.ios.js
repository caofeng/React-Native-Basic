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
  Animated,

} from 'react-native';

export default class zyxrAnimated extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      fadeAnim:new Animated.value(20)
    };
  }

  componentDidMount(){
    Animated.timing(         
                       
      this.state.fadeAnim,                      
      {
        toValue: 600,                             
      }
    ).start(); 
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.text} >
        动画
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  text:{
    fontSize: 30,
    color: '#81F2D5',
    marginTop: this.state.fadeAnim,
  },
  
});

AppRegistry.registerComponent('zyxrAnimated', () => zyxrAnimated);
