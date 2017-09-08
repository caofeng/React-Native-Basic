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
  TabBarIOS,
  Dimensions,
  Alert,

} from 'react-native';

var zyxrNavTabBarIOS = require('./navtabbar.js');

export default class zyxrTabBarIOS extends Component {

	state = {
		selectedTabItem:0
	}


  render() {
    return (
      
        <TabBarIOS
          style={{width: Dimensions.get('window').width,height: 49}}
          tintColor="red"
          barTintColor="white"
          translucent={true}
         >

          <TabBarIOS.Item systemIcon="bookmarks" 
          badge="99"
          selected={this.state.selectedTabItem == 0}
          onPress={()=>{
          	this.setState({selectedTabItem:0})
          }}
          > 

		   <View style={[styles.homeViewStyle, {backgroundColor:'red'}]}>

           </View>

          </TabBarIOS.Item> 

          <TabBarIOS.Item
          renderAsOriginal={true}
          icon={require('./image/tab_bar_financial_1.png')}
          selectedIcon={require('./image/tab_bar_financial_selected_1.png')}
          title="首页"
          selected={this.state.selectedTabItem == 1}
          onPress={()=>{
			this.setState({selectedTabItem:1})
          }}
          > 

           <View style={[styles.homeViewStyle, {backgroundColor:'yellow'}]}>

           </View>

          </TabBarIOS.Item> 


          <TabBarIOS.Item 
          systemIcon="downloads"
          badge="15"
          selected={this.state.selectedTabItem == 2}
          onPress={()=>{
			this.setState({selectedTabItem:2})
          }}
           > 
           <View style={[styles.homeViewStyle, {backgroundColor:'blue'}]}>
           </View>
          </TabBarIOS.Item>


           <TabBarIOS.Item 
            systemIcon="favorites"
            selected={this.state.selectedTabItem == 3}
          	onPress={()=>{
				this.setState({selectedTabItem:3})
          	}}
            > 
            <View style={[styles.homeViewStyle, {backgroundColor:'green'}]}>
            </View>
           </TabBarIOS.Item> 


           <TabBarIOS.Item 
           systemIcon="history" 
           badge="ABC"
           selected={this.state.selectedTabItem == 4}
          	onPress={()=>{
				this.setState({selectedTabItem:4})
          	}}
           > 
           <View style={[styles.homeViewStyle, {backgroundColor:'orange'}]}>
            </View>
           </TabBarIOS.Item>

        </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  homeViewStyle:{
	flex: 1,
	justifyContent: 'center',
	alignItems: 'flex-start',
  },
});

AppRegistry.registerComponent('zyxrTabBarIOS', () => zyxrNavTabBarIOS);
