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
  Dimensions,
  SectionList,
  FlatList,
  Alert,

} from 'react-native';

const {width,height} = Dimensions.get('window');
const dataCity = require('./city.json');

export default class zyxrSectionList extends Component {

  _renderItem= (Item) => {

    return <View style={styles.cell} > 
              <Text style={styles.cellText}>{Item.item.title+Item.index}
              </Text> 
            </View>;
  }

  _renderSectionHeader= (Value) => {

    return <View style={styles.headerView} > 
              <Text style={styles.headerTitle}> {Value.section.key} 
              </Text> 
            </View>;
  }

  _itemSeparatorComponent = ()=>{
    return <View style={{marginLeft: 20,marginRight: 20,height: 1,backgroundColor: 'red'}}></View>
  }

  _listHeaderComponent = ()=>{
    return <View style={styles.listHeaderFooter} >
            <Text style={{color: 'white',fontSize:30}}
			 onPress={this.clickHeaderView.bind(this)}
            > 我是表头 </Text>
           </View>
  }

  _listFooterComponent = ()=>{
    return <View style={styles.listHeaderFooter} >
            <Text style={{color: 'white',fontSize:30}}> 我是表脚 </Text>
           </View>
  }

  _listEmptyComponent = ()=>{
	return <View style={styles.listEmptyView} >
            <Text style={{color: 'white',fontSize:30}}> 暂无数据 </Text>
           </View>
  }

  render() {

    return (

      <View style={styles.container}>
          
          <SectionList
          style={styles.sectionlist}
          renderSectionHeader={this._renderSectionHeader}
          renderItem={this._renderItem}
          sections={this.dataSource()}
          ItemSeparatorComponent={this._itemSeparatorComponent}
          ListHeaderComponent={this._listHeaderComponent}
          ListFooterComponent={this._listFooterComponent}
          ListEmptyComponent={this._listEmptyComponent}
          />

      </View>
    );
  }


  clickHeaderView(msg) {

	alert(dataCity[3].sub.length);
	
  }

  dataSource(){

		var dataArray = [];

		for (var i = 1; i < dataCity.length; i++) {

			var subArr = [];

			var sub_ = dataCity[i].sub;

			if (sub_) {

				for (var j = 1; j < sub_.length; j++) {
					subArr.push({
						key:j,title:sub_[j].name
					});
				}

			dataArray.push({
			key:dataCity[i].name,data:subArr
			});
			}
		}
		return dataArray;
	}
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  sectionlist:{
    backgroundColor: 'white',
    marginTop: 20,
    width: width,
  },

  listHeaderFooter:{
    backgroundColor: '#762904',
    height: 50,
    alignItems:'center',
    justifyContent:'center', 
  },

  cell:{
    backgroundColor: '#A6D9F1',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cellText:{
    color:'white',
    fontSize: 30,
  },

  headerView:{
    backgroundColor: '#FFFFFF',
    height: 50,
    width: width,
  },

  headerTitle:{
    color:'#876542',
    fontSize: 30,
  },

  listEmptyView:{
  	flex: 1,
  	backgroundColor: 'gray',
  	justifyContent: 'center',
    alignItems: 'center',
  },

});

AppRegistry.registerComponent('zyxrSectionList', () => zyxrSectionList);
