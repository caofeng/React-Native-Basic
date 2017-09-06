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
  ScrollView,
  Dimensions,
  Image,
  Alert,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class zyxrScrollView extends Component {
  render() {
    return (
      <View style={styles.container}>
        
         <ScrollView 
          style={styles.scrollView}

          horizontal={true}
          keyboardDismissMode = "on-drag"
          keyboardShouldPersistTaps = "never"
          onContentSizeChange = {(contentWidth, contentHeight)=>{
            //此函数会在ScrollView内部可滚动内容的视图发生变化时调用
          }}

          onMomentumScrollStart={()=>{
            //滚动动画开始时调用此函数
            
          }}

          onMomentumScrollEnd={()=>{
            //滚动动画结束时调用此函数
            // this.showAlertView()
          }}

          onScroll={()=>{
            //在滚动的过程中，每帧最多调用一次此回调函数
          }}

          onTouchStart= {()=>{
             //this.show('按压屏幕')
          }}

          // ScrollView.scrollTo(y?: number, object, x?: number, animated?: boolean)
          // ScrollView.scrollToEnd(options?: object)

          removeClippedSubviews={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={false}
          alwaysBounceHorizontal={true}
          indicatorStyle = 'black'
          pagingEnabled = {true}
         >

         {this.renderImageItem()}

        </ScrollView>


       <ScrollView style={styles.scrollView}
       horizontal={true}
          keyboardDismissMode = "on-drag"
          keyboardShouldPersistTaps = "never"
          removeClippedSubviews={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={false}
          alwaysBounceHorizontal={true}
          indicatorStyle = 'black'
          pagingEnabled = {true}
           >

            {this.renderItem()}

       </ScrollView>

      </View>
    );
  }

    renderImageItem(){

      var imageItem = [];

      var imageUrlItem = ['https://static.zyxr.com/g1/M00/0D/0F/oYYBAFmJk_eARtFMAAOn33iCerQ835.jpg',
      'https://static.zyxr.com/g1/M00/07/ED/oYYBAFjeGLmADSEEAAG0kyk64G8246.jpg',
      'https://static.zyxr.com/g1/M00/0D/F8/oYYBAFmnaW-ATqMaAAM7_U-wM_Y624.jpg',
      'https://static.zyxr.com/g1/M00/0D/0F/oYYBAFmJk_eARtFMAAOn33iCerQ835.jpg'];

      for (var i = 0; i < imageUrlItem.length; i++) {
        imageItem.push(
          <Image source={{uri:imageUrlItem[i]}} key={i} style={styles.image} />

          )
      }
      return imageItem;
    }


    renderItem() {
            
            var itemAry = [];
            
            var colorAry = ['red', 'green', 'blue', 'yellow', 'black', 'orange'];
            
            for (var i = 0; i<colorAry.length; i++) {
                itemAry.push(
                    <View key={i} style={[styles.itemStyle, {backgroundColor: colorAry[i]}]}></View>
                );
            }
            return itemAry;
        }

      showAlertView(){

        Alert.alert(

              '提示',
              '滑动结束',
              [
              {text:'按钮1',onPress:()=>console.log('点击了按钮1')},
              {text:'按钮2',onPress:()=>console.log('点击了按钮2'),style:'cancel'},
              ]
              )
      }

      show(msg){
        Alert.alert('弹框', msg)
      }

}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 640,
    justifyContent: 'flex-start' ,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView:{
    backgroundColor: 'gray',
    width: screenWidth,
    marginTop: 20,
  },
  image:{
    width: screenWidth,
    height: 300,
  },
  itemStyle :{
    width: screenWidth,
    height: 300,
  },
  
});

AppRegistry.registerComponent('zyxrScrollView', () => zyxrScrollView);
