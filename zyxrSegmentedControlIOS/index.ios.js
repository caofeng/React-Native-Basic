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
  SegmentedControlIOS,
  Alert
} from 'react-native';

export default class zyxrSegmentedControlIOS extends Component {
  render() {
    return (
      <View style={styles.container}>
          
        <SegmentedControlIOS
        style={styles.segment}
        values={['中国','河南','周口','淮阳','四通镇']}
        enabled={true}
        selectedIndex={1}
        tintColor="#ff0000"
        momentary={false}
        onValueChange={(value)=>{
          // Alert.alert('选中了'+value)
        }} 

        onChange={(value)=>{
          Alert.alert('选中了'+value.nativeEvent.selectedSegmentIndex)
        }}
        />

        <SegmentedControlIOS
        style={styles.segment}
        values={['中国','深圳','南山','后海','海信大厦']}
        enabled={true}
        tintColor="#0000FF"
        onValueChange={(value)=>{
          Alert.alert('选中了'+value)
        }} 

        onChange={(value)=>{
          // Alert.alert('选中了'+value.nativeEvent.selectedSegmentIndex)
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
  segment:{
    width: 300,
    height: 50,
    margin: 10,
  }
  
});

AppRegistry.registerComponent('zyxrSegmentedControlIOS', () => zyxrSegmentedControlIOS);
