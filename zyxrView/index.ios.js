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
  Dimensions,
  PixelRatio
} from 'react-native';

export default class zyxrView extends Component {

  render() {

    return (

      <View style={styles.container}>
        
      <Text style = {styles.text}>

        <Text style= {styles.title}>
        获取屏幕宽高以及倍率{'\n'}
        </Text>

        
        window.width = {Dimensions.get('window').width +'\n'}
        window.height = {Dimensions.get('window').height +'\n'}
        pxielRatio = {PixelRatio.get() +'\n'}

        <Text style= {styles.title}>
        View的属性以及CSS样式：{'\n'}
        </Text>

        Flexbox 弹性布局 {'\n'}
        Transforms 动画属性 {'\n'}
        backfaceVisibility enum('visible', 'hidden') 定义界面翻转的时候是否可见 {'\n'}
        backgroundColor color {'\n'}
        borderBottomColor color {'\n'}
        borderBottomLeftRadius number {'\n'}
        borderBottomRightRadius number {'\n'}
        borderBottomWidth number {'\n'}
        borderColor color {'\n'}
        borderLeftColor color {'\n'}
        borderLeftWidth number {'\n'}
        borderRadius number {'\n'}
        borderRightColor color {'\n'}
        borderRightWidth number {'\n'}
        borderStyle enum('solid', 'dotted', 'dashed') {'\n'}
        borderTopColor color {'\n'}
        borderTopLeftRadius number{'\n'}
        borderTopRightRadius number {'\n'}
        borderTopWidth number {'\n'}
        borderWidth number {'\n'}
        opacity number 设置透明度，取值从0-1；{'\n'}
        overflow enum('visible', 'hidden') 设置内容超出容器部分是显示还是隐藏； {'\n'}
        elevation number 高度 设置Z轴，可产生立体效果。{'\n'}
        accessible 当为true时，表示该元素是可以进行访问，默认情况下所有可触摸的元素控件都是可以访问的{'\n'}{'\n'}
        <Text style= {styles.title}>
        方法：{'\n'}
        </Text>
        onAccessibilityTap 对控件View做了一个Tap(轻轻的触摸或者点击)的手势{'\n'}
        onLayout  当组件的布局发生变动的时候，会自动调用下面的方法 nativeEvent
        该事件当重新计算布局的时候回立即进行触发，不过界面可能不会立即刷新，特别当布局动画正在加载中的时候{'\n'}
        onMagicTap 双击手势 {'\n'}。。。

      </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    left: 7,
    top: 20,
    width: 400,
    height: 700,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderStyle: 'solid' ,
    borderWidth: 10,
    borderColor: '#FF0000',
    backfaceVisibility: 'hidden' ,
    opacity: 1.0,
    elevation: 50,//高度，设置Z轴，可以产生立体效果
    overflow: 'hidden' ,//设置超过容器内容显示与否
  },

  circleView:{
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor:'rgba(0, 0, 255, 0.5)',
  },

  circleViewFelx:{
    flex: 1,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor:'rgba(0, 255, 255, 0.5)',
  },

  text: {
    fontSize: 13,
    color: 'white',
    backgroundColor: 'green',
  },

  title:{
    alignItems: 'center', 
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontSize: 20,
  }

});

class zyxrViewFrame extends Component {
  
  render () {

    return (

      <View style = {styles.container} >

        <View style={styles.circleView}>
          <Text style={styles.title} >
            left
          </Text>
        </View>

        <View style={styles.circleViewFelx}>
          <Text style={styles.title} >
            center
          </Text>
        </View>

        <View style={styles.circleView}>
          <Text style={styles.title} >
            right
          </Text>
        </View>

      </View>

    );
  }
}

AppRegistry.registerComponent('zyxrView', () => zyxrView);
