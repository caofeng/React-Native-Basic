import React, { Component,PropTypes } from 'react';
import {

  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  Alert,
  Navigator,
} from 'react-native';
var ThirdPage = require('./thirdpage.js')

class SecondPage extends Component {

	render (){
		return (

			<View style={styles.containers}>
				<Text style={{fontSize: 20,color: '#FFFFFF'}}
				onPress={this._onForward.bind(this)}
				>
				点击进入下个界面
				</Text>

				 <Text onPress={this._onBack.bind(this)} 
        			style={{fontSize: 20,color: 'white'}}
        			>
        			Current Scene POP FirstPage 
        		</Text>
			</View>
		);
	}

	_onForward(){
		this.props.navigator.push({

		  component: ThirdPage,//要显示的页面
          title: 'ThirdPage',//导航栏标题
          barTintColor:'blue',
          tintColor:'white',
		});
	}
	_onBack(){
		this.props.navigator.pop()
	}
}

const styles=StyleSheet.create({
	containers:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#009799'
  },
});

module.exports = SecondPage;