import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,

} from 'react-native';

class FinancialModule extends Component {


	render(){
		return(

			<View style={{flex: 1,backgroundColor: 'white',alignItems: 'center',justifyContent: 'center' }} >

			<Text style={{fontSize: 30,color: '#000000'}} >

			 理财

			</Text>

			</View>
		);
	}

	
}
module.exports = FinancialModule;