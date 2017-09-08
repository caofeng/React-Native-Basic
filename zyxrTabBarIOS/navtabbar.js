import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Dimensions,
  Alert,
  NavigatorIOS,

} from 'react-native';

var HomeModule = require('./homemodule.js');
var FinancialModule = require('./fianacialmodule.js');
var UserModule = require('./user.js');

class zyxrNavTabBarIOS extends Component {

	state = {
		selectedTabItem:0
	}

	render(){

		return(

			<TabBarIOS
          		style={{width: Dimensions.get('window').width,height: 49}}
          		tintColor="red"
          		barTintColor="white"
          		translucent={true}
         	>

          		<TabBarIOS.Item 
          			renderAsOriginal={true}
          			icon={require('./image/tab_bar_home_1.png')}
          			selectedIcon={require('./image/tab_bar_home_selected_1.png')}
          			title="首页"
          			selected={this.state.selectedTabItem == 0}
          			onPress={()=>{
          				this.setState({selectedTabItem:0})
          			}}
          		> 

					<NavigatorIOS
						initialRoute={{
							component:HomeModule,
							title:'首页',
						}}
						style={{flex: 1}}
					/>

          		</TabBarIOS.Item> 

		        <TabBarIOS.Item
		          renderAsOriginal={true}
		          icon={require('./image/tab_bar_financial_1.png')}
		          selectedIcon={require('./image/tab_bar_financial_selected_1.png')}
		          title="理财"
		          badge='20'
		          selected={this.state.selectedTabItem == 1}
		          onPress={()=>{
					this.setState({selectedTabItem:1})
		          }}
		         > 
					<NavigatorIOS
						initialRoute={{
							component:FinancialModule,
							title:'理财',
						}}
						style={{flex: 1}}
					/>
		         
		         </TabBarIOS.Item> 

		         <TabBarIOS.Item 
		          renderAsOriginal={true}
		          icon={require('./image/tab_bar_me_1.png')}
		          selectedIcon={require('./image/tab_bar_me_selected_1.png')}
		          title="我的"
		          selected={this.state.selectedTabItem == 2}
		          onPress={()=>{
					this.setState({selectedTabItem:2})
		          }}
		          > 

					<NavigatorIOS
						initialRoute={{
							component:UserModule,
							title:'我的',
						}}
						style={{flex: 1}}
					/>

		         </TabBarIOS.Item>

           </TabBarIOS>
		);
	}
}

const styles = StyleSheet.create({

	contains:{
		flex: 1,
		backgroundColor: '#FF00FF',
	},
})

module.exports = zyxrNavTabBarIOS;