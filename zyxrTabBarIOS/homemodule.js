import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  NavigatorIOS,
  DeviceEventEmitter,

} from 'react-native';

var ProductDetail = require('./productDetail.js');

class HomeModule extends Component {

	state = {
		name:'曹峰'
	}


	componentDidMount(){
		//做监听
		DeviceEventEmitter.addListener('change',(value)=>{
			this.setState({
				name:value
			})
		})
	}

	render(){

		return(

			<View style={{flex: 1,backgroundColor: 'white',alignItems: 'center',justifyContent: 'center' }} >

			<Text style={{fontSize: 30,color: '#000000'}}
			onPress={this.onPush.bind(this)}
			 >

			 首页{this.state.name}

			</Text>

			</View>
		);
	}

	onPush () {

		this.props.navigator.push({

			component:ProductDetail,
			title:ProductDetail.title,
			shadowHidden:false,
			tintColor:'#238976',
			titleTextColor:'#AAAAAA',
			translucent:true,
			passProps:{
				'name':this.state.name,
				callback:((name)=>{this.seedTosecond(name)})
			},
			rightButtonTitle:'搜索',
			onRightButtonPress:function(){
				alert('搜索我在福布斯榜上的排名')
			},
		});
	}

	seedTosecond(value){
		this.setState({
				name:value
			})
	}

	onBack(){
		this.props.navigator.pop();
	}

}

module.exports = HomeModule;