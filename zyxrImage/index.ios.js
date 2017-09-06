/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Alert,
} from 'react-native';

export default class zyxrImage extends Component {

  render() {

    return (
      <View style={styles.container}>
        
        <Image 

        source={require('./image/hb.jpg')}

        style={styles.locationImage}

        resizeMode = "center"
         />

        <Image source={{uri:'https://facebook.github.io/react/img/logo_og.png', cache: 'reload'}}
        style={{width: 100,height: 100,marginTop: 30}} 

        defaultSource={require('./image/hb.jpg')}

        onLoadStart={()=>{
          //Alert.alert('图片开始加载')
        }}

        onLoad={()=>{
          //Alert.alert('图片加载成功')
        }}

        onLoadEnd={()=>{
          //Alert.alert('无论图片加载是否成功都会被调用,但如果图片加载成功且实现了onLoad方法，此方法不会被调用')
        }}

        onProgress={(loaded, total)=>{
          
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
    backgroundColor:'rgba(0, 0, 255, 0.4)',
  },

  locationImage:{
    width: 100,
    height: 100,
    backgroundColor: 'pink',
    borderRadius: 30,
  },
  
});

AppRegistry.registerComponent('zyxrImage', () => zyxrImage);
