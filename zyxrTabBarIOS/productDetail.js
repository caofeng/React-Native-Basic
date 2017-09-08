import React, { Component } from 'react';
import {

  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  DeviceEventEmitter,

} from 'react-native';

class ProductDetail extends Component {

	static title = '产品详情'

	render(){

		return(

			<View style={styles.contains}>

				<Text style={{fontSize: 30,color: 'red'}}
				onPress={this.onBack.bind(this)}
				>
					{this.props.name}详情
				</Text>
			</View>
		);
	}
	onBack() {
		//传值方式1，通知
		// DeviceEventEmitter.emit('change','刘亦菲');
		this.props.navigator.pop();
		this.props.callback('刘亦菲');
	}
}

const styles = StyleSheet.create({

	contains:{
		flex: 1,
		justifyContent:'center',
		alignItems: 'center', 
		backgroundColor: '#FFFFFF',
	},

});

module.exports = ProductDetail;
