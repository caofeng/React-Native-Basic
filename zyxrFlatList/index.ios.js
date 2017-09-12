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
  FlatList,
  SectionList,
  Dimensions,
  Alert,
} from 'react-native';

const {width,height} = Dimensions.get('window');

export default class zyxrFlatList extends Component {

  state = {

  }

  _flatList;


  header = () =>{

    return <Text style={{backgroundColor:'red',fontSize: 40,color: 'white'}}>这是头部 </Text>;
  }

  footer = () =>{

    return <Text style={{backgroundColor:'gray',fontSize: 40,color: 'white'}}>这是脚步 </Text>;
  }

   separator = () => {
        return <View style={{height:2,backgroundColor:'black',marginLeft: 20,marginRight: 20}}/>;
    }


  render() {
    return (
      <View style={styles.container}>

      <Text style={{color: 'white',backgroundColor: '#873298',fontSize: 30,marginTop: 20}}
      onPress={()=>{
        // this._flatList.scrollToOffset({animated:true,offset:500});
        this._flatList.scrollToEnd();

      }}>
       点击滚动List视图

      </Text>
      
        <FlatList
        ref={(flatList)=>this._flatList = flatList}

        style={styles.tableView}
        inverted={false}
        horizontal={false}
        ListHeaderComponent={this.header}
        ListFooterComponent={this.footer}
        ItemSeparatorComponent={this.separator}

        data={[
          {key:'Objective-C',value:'OC',name:'曹峰'},
          {key:'C#',value:'c#',name:'曹操'},
          {key:'C++',value:'c++',name:'曹丕'},
          {key:'C语言',value:'c',name:'曹植'},
          {key:'Java',value:'java',name:'曹冲'},
          {key:'JavaScript',value:'js',name:'曹峰'},
          {key:'Scala',value:'scale',name:'曹峰'},
          {key:'Swift',value:'swift',name:'曹峰'},
          ]}
          renderItem={({item,index})=>

            <View style={styles.cell} 
            >

            <Text style={styles.label}>
              {item.key}
            </Text>
            <Text style={styles.subLabel}>
              {item.value}
            </Text>
            <Text style={styles.subLabel}>
              {item.name}
            </Text>
            </View>
          }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tableView:{
    backgroundColor: 'white',
    marginTop: 20,
    width: width,
  },
  cell:{
    backgroundColor: 'blue',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 200,
  },
  label:{
    marginTop: 20,
    fontSize:30,
    color: '#F8D962',
  },
  subLabel:{
    marginTop: 10,
    fontSize: 20,
    marginLeft: 20,
    color: 'white',
  },
  
});

AppRegistry.registerComponent('zyxrFlatList', () => zyxrFlatList);
