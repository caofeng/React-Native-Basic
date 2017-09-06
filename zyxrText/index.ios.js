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
  AlertIOS,
} from 'react-native';

export default class zyxrText extends Component {
  render() {
    return (
      <View style={styles.container}>

      <Text 

      style={styles.text} 
      numberOfLines={0} 
      adjustsFontSizeToFit={true}
      suppressHighlighting={false}
      selectable={false}
      onPress={()=>{alert('文本生来能点击!')}}
      //onLongPress={()=>{alert('长按了文本')}}
      // onLongPress={this.show.bind(this,'自定义方法并调用')}
      // onLayout={this.textLayout}
       >

      在 React Native 用于显示文本的组件就是 Text，
      和iOS中的 UIlabel，Android中的 TextView类似，
      专门用来显示基本的文本信息，处理基本的显示布局外，
      还可以进行嵌套显示，设置样式，已经事件处理（如：点击事件）{'\n'}{'\n'}
      numberOfLines：设置 Text 显示文本的行数，如果显示的内容超过行数，
      默认其余的文本信息不再显示


      </Text>


        
      </View>
    );
  }


  show(msg) {
  	//alert(msg);
  }

  textLayout(e) {
  	const layout=e.nativeEvent.layout;
  	console.log(layout);
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(222, 222, 222, 0.7)',
  	marginTop: 50,
  	marginBottom: 50,
  },

  text:{

  	width: 400,
  	height: 300,
  	fontSize: 25,
  	color: 'red',
  	fontStyle: 'normal' ,
  	backgroundColor: '#FFFFFF',
  	fontFamily: 'Georgia',
  	fontWeight: 'bold' ,
  	textShadowOffset: {
  		width: 0,
  		height: 0
  	},
  	textShadowColor: 'black',
  	textShadowRadius: 0,
  	letterSpacing: 0,
  	lineHeight: 35,
  	textAlign: 'justify' , 
  	textAlignVertical: 'center', 
  	textDecorationLine: 'underline' ,
  	textDecorationStyle: 'double',

  }


});

AppRegistry.registerComponent('zyxrText', () => zyxrText);
