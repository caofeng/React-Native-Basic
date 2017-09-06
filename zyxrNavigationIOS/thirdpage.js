import React, { Component,PropTypes } from 'react';
import {

  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  Alert,
} from 'react-native';

class ThirdPage extends Component {

	render (){
		return (

			<View style={styles.container}>

			 <Text style={{fontSize: 30,color: 'white',marginTop: 100,marginLeft: 100}} 
			 onPress={this._onBack.bind(this)}
			 >
			 	返回
			 </Text>

			</View>
		);
	}
	_onBack(){

		// this.props.navigator.popN(2);
		// this.props.navigator.pop();
		this.props.navigator.popToTop();


	}

}

const styles = StyleSheet.create({
	container:{
		backgroundColor: 'gray',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',  
	},
});

module.exports = ThirdPage;