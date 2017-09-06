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
  TextInput,
  Alert,
} from 'react-native';

export default class zyxrTextInput extends Component {

	constructor(props) {
	  super(props);
	  this.state = {text:''};
	}

  render() {
    return (
      <View style={styles.container}>

      	<TextInput 

      	style={styles.textInput}
      	placeholder={'请输入...'}
      	placeholderTextColor={'red'}
      	onChangeText= {(text)=> this.setState({text})}
      	value={this.state.text}
      	multiline = {false}
      	autoFocus={false}
      	blurOnSubmit={true}
      	caretHidden={true}
      	editable={true}
      	enablesReturnKeyAutomatically={true}
      	maxLength={10}
      	selectionColor={'yellow'}
      	clearTextOnFocus={false}
      	clearButtonMode = "while-editing"
		returnKeyType = "done"
		keyboardType = 'numeric'
		keyboardAppearance = "dark"
      	 />
      	 <Text style={{fontSize: 30,marginTop: 30}} >
			{this.state.text}
      	 </Text>

		<TextInput style={styles.textInput} 
			enablesReturnKeyAutomatically={true}
			returnKeyType="emergency-call"
			secureTextEntry = {true}
		/>

		<TextInput style={styles.textInput} 
			returnKeyType="emergency-call"
			// onChange={()=>{alert('输入文本改变')}}
			// onChangeText={(text)=>{
			// 	Alert.alert(text);
			// }}
			// onFocus={()=>{
			// 	alert('获得了焦点')
			// }}

			onBlur={()=>{
				alert('失去了焦点')
			}}

			// onEndEditing={()=>{
			// 	alert('结束文本编辑')
			// }}

			// onSubmitEditing={()=>{
			// 	alert('提交文本')
			// }}
		/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start' ,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {

  	width: 300,
  	height: 40,
  	fontSize: 20,
  	marginTop: 30,
  	color: '#FFFFFF',
  	backgroundColor: 'gray',
  	borderWidth: 1,
  	borderRadius: 4,
  	borderColor: 'red',
  }
  
});

AppRegistry.registerComponent('zyxrTextInput', () => zyxrTextInput);
