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
  Alert,

} from 'react-native';

var NetUnit = require('./netUnit.js');

export default class zyxrNetwork extends Component {

  dosomeNetwork(){
    //http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=刘亦菲&bk_length=600
	NetUnit.get('https://facebook.github.io/react-native/movies.json',function(result) {
		console.log(result);
		alert(result.description);
	})
  }

  render() {
    return (
      <View style={styles.container}>

      <Text style={{color: 'red',fontSize: 30}}
      onPress={this.dosomeNetwork.bind()}
      >
        发起网络请求
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});

AppRegistry.registerComponent('zyxrNetwork', () => zyxrNetwork);
