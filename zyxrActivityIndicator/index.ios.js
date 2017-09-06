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
  ActivityIndicator,
  ActionSheetIOS,
  Slider,
  Alert,
  Switch,
  ProgressViewIOS,
  TouchableHighlight,

} from 'react-native';

var BUTTONS = [
  'ITEM 0',
  'ITEM 1',
  'ITEM 2',
  '删除',
  '取消',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class zyxrActivityIndicator extends Component {

  state = {
    falseSwitchIsOn: false,

  }

  render() {
    return (
      <View style={[styles.container,{transform: [{scale: 1.5}]}]}>

      <ActivityIndicator  
      size='large'
      color='red'
      animating={true}
      hidesWhenStopped={true} />


      <Slider 
      style={styles.slider}
      value={0.3}
      minimumValue={0}
      maximumValue={100}
      step={1}
      minimumTrackTintColor='#00FF00'
      maximumTrackTintColor='#FF0000'
      // thumbImage={require('./image/hb.jpg')}
      onValueChange={(value)=>{
        console.log('值'+value)
      }}
      onSlidingComplete={(value)=>{
        Alert.alert('title','这个值:'+value)
      }}
      />


      <Switch
      style={styles.swith}
      onTintColor='red'
      thumbTintColor='gray'
      tintColor='green'
      value={this.state.falseSwitchIsOn}
      onValueChange={(value)=>{
        // Alert.alert('title','这个值:'+value)
        this.setState({falseSwitchIsOn: value})
      }}
      />

      <ProgressViewIOS 
      style={styles.progressView}
      progress={0.5}
      progressTintColor = 'gray'
      progressViewStyle = 'default'
      trackTintColor = 'yellow'
      />

      <Text style={styles.btnTitle} 
        onPress={this.showActionSheetViewIOS.bind()}>
        弹出基本ActionSheetIOS
      </Text>

      <Text style={styles.btnTitle} 
        onPress={this.showShareActionSheetViewIOS.bind()}>
        弹出ShareActionSheetIOS
      </Text>

      </View>

    );
  }

  showActionSheetViewIOS(){
    
    
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
      tintColor: 'green',
    }, 
    (buttonIndex)=>{
        Alert.alert('提示','您选了'+buttonIndex)
    });
  }

  showShareActionSheetViewIOS(){

    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'http://www.lcode.org',
      message: '转入江清清的技术专栏',
      subject: '江清清的技术专栏Email主题',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    },
    (error) => {
      console.error(error);
    },
    (success, method) => {
      var text;
      if (success) {
        text = `Shared via ${method}`;
      } else {
        text = 'You didn\'t share';
      }
      Alert.alert('提示','您'+text)
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  slider:{
    width: 200,
    height: 5,
    margin: 20,
  },
  swith:{
    width: 100,
    height: 40,
  },
  progressView:{
    width: 200,
    margin: 20,
    height: 30,
  },
  btn: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  btnTitle:{
    fontSize: 20,
    color: '#000000',
    margin: 20,
  }
  
});

AppRegistry.registerComponent('zyxrActivityIndicator', () => zyxrActivityIndicator);
