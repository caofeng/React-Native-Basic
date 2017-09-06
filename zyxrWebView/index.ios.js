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
  WebView,
  Alert,
  Dimensions,

} from 'react-native';

const {width,height} = Dimensions.get('window');

export default class zyxrWebView extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <WebView style={styles.web}
          source={{uri:'https://www.zyxr.com'}}
          automaticallyAdjustContentInsets={true}
          bounces={true}
          onLoadStart={()=>{
            //Alert.alert('开始加载')
          }}

          onError={()=>{
            //Alert.alert('加载失败')
          }}

          onLoad={()=>{
            //Alert.alert('加载成功')
          }}

          onLoadEnd={()=>{
            //Alert.alert('加载结束')
          }}
          onShouldStartLoadWithRequest={()=>{
            return true;
          }}

        />


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
  web:{
    width: width,
    height: height,
    backgroundColor: 'gray'
  }
});

AppRegistry.registerComponent('zyxrWebView', () => zyxrWebView);
