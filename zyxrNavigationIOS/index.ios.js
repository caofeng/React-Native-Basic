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
  NavigatorIOS,
  Alert,
} from 'react-native';

var SecondPage = require('./secondpage.js');

export default class zyxrNavigationIOS extends Component {

  render() {

    return (

      <NavigatorIOS
        initialRoute={{
          component: MyScene,//要显示的页面
          title: '导航栏',//导航栏标题
          barTintColor:'red',
          passProps:{//自定义属性部分
            myProp:'firstVC'
          },
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends Component {

  render() {

    return (

      <View  style={styles.containers} >

        <Text onPress={this._onForward.bind(this)} 
        style={{fontSize: 20,color: 'white'}}
        >
        Current Scene Push SecondPage 
        </Text>

      </View>
    );
  }

  _onForward () {

     this.props.navigator.push({

        component: SecondPage,
        title: 'nextPage',
        rightButtonTitle: '购物车',
        barTintColor:'green',
        tintColor:'white',
        translucent:true,
        titleTextColor:'#82ACF7',
        navigationBarHidden:false,
        interactivePopGestureEnabled:true,
        onRightButtonPress:function (){
        alert('进入我的购物车');
      }

     });
  }

  _onBack(){
    this.props.navigator.pop()
  }
}

const styles = StyleSheet.create({
  containers:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#6297A8'
  },
});

AppRegistry.registerComponent('zyxrNavigationIOS', () => zyxrNavigationIOS);
