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
  TabBarIOS,

} from 'react-native';

export default class zyxrTabBarIOS extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <TabBarIOS
        barTintColor:'white'
        tintColor:'red'
        unselectedTintColor:'gray' >
          <TabBarIOS.Item>


         



        </TabBarIOS>

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

AppRegistry.registerComponent('zyxrTabBarIOS', () => zyxrTabBarIOS);
