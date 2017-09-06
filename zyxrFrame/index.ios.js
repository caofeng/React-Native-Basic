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
  Image,
  Alert,
} from 'react-native';

const mainWidth = Dimensions.get('window').width;
const mainHeight = Dimensions.get('window').height;

export default class zyxrFrame extends Component {

  render() {

    return (

      <View style={styles.container}>

        
        <View style={styles.containerTop}>

          <View style={styles.containerYB}>

            <Text style={{color: 'green',fontSize: 15,marginTop: 30,marginLeft: 20}} >
              我们约吧
            </Text>

            <Text style={{color: 'black',fontSize: 13,marginTop: 10,marginLeft: 20}} >
              恋人家人好朋友
            </Text>

            <Image source={require('./image/lr.png')} 
            style={{width: 100,height: 100,marginTop: 10,marginLeft: (mainWidth/3-100)/2}}
             />
            
          </View>

          <View style={styles.containerCZTC}>

            <View style={styles.containerCZ}>

              <Text style={{color: 'orange',fontSize: 14,marginLeft: 40,marginTop: 30}} >
              超值低价{'\n'}{'\n'}
                <Text style={{color: 'black',fontSize: 10,marginLeft: 40,marginTop: 10}}>
                  十元惠生活
                </Text>
              </Text>

              <Image source={require('./image/hb.jpg')} 
              style={{width: 70,height: 70,marginTop: 15,marginLeft: 60}} />

            </View>

            <View style={styles.containerTC}>

              <View style={styles.containerYC}>

                <Text style={{color: 'red',fontSize: 18,marginLeft: 10,marginTop: 10}} >
                  聚餐宴请
                </Text>

                <Text style={{color: 'black',fontSize: 10,marginLeft: 10,marginTop: 10}}>
                  朋友家人常聚聚
                </Text>

                <Image source={require('./image/bl.png')} 
                style={{flex: 1}} 
                resizeMode={Image.resizeMode.center} />

              </View>

              <View style={styles.containerMD}>

                <Text style={{color: 'orange',fontSize: 18,marginLeft: 10,marginTop: 10}} >
                  名店抢购
                </Text>

                <Text style={{color: 'black',fontSize: 10,marginLeft: 10,marginTop: 10}}>
                  距离结束
                </Text>

                <Text style={{color: 'black',fontSize: 20,marginLeft: 10,marginTop: 15}}>
                  12:12:12
                </Text>

              </View>

            </View>

          </View>

        </View>

        <View style={styles.containerMargin}>

        </View>

        <View style={styles.containerDC}>

          <View style={{flex: 1,justifyContent: 'center'}}>
            
            <Text style={{color: 'orange',fontSize: 25,marginLeft: 20,fontWeight: 'bold'}} 
              onPress={this.showAlert.bind(this,'1元吃大餐')}
            >
                1元吃大餐
            </Text>

            <Text style={{color: 'black',fontSize: 15,marginLeft: 20,marginTop: 5,fontWeight: 'bold'}}
              onLongPress={()=>{
                Alert.alert(

                    '提示',
                    '点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮点击了按钮',
                  [ 
                    {text:'按钮1',onPress:()=> console.log('按钮1')},
                    {text:'按钮3',onPress:()=> console.log('按钮3'), style: 'cancel'},
                  ]
                )
              }
            }

            >
                新用户专享
            </Text>

          </View>

          <Image source={require('./image/dc.jpg')} 
          resizeMode={Image.resizeMode.center}
          style={{flex: 1}}
           />

        </View>

        <View style={styles.containerKHAndLX}>

          <View style={styles.containerKH}>

            <View style={{flex: 2,justifyContent: 'center'}}>
          
            <Text style={{color: 'orange',fontSize: 20,marginLeft: 20,fontWeight: 'bold'}} >
                撸串节狂欢
            </Text>

            <Text style={{color: 'black',fontSize: 10,marginLeft: 20,marginTop: 5,fontWeight: 'bold'}}>
                烧烤6.6元起
            </Text>

            </View>

            <Image source={require('./image/kh.png')} 
            style={{width: 70,height: 70,alignSelf:  'center',flex: 1}}
            />
          </View>

          <View style={styles.containerLX}>

           <View style={{flex: 2,justifyContent: 'center'}}>
            
            <Text style={{color: 'orange',fontSize: 20,marginLeft: 20,fontWeight: 'bold'}} >
                毕业旅行
            </Text>

            <Text style={{color: 'black',fontSize: 10,marginLeft: 20,marginTop: 5,fontWeight: 'bold'}}>
                选好酒店才安心
            </Text>

          </View>

          <View style={{flex: 1,justifyContent: 'center',alignItems: 'center' }} >
            <Image source={require('./image/lx.jpg')} 
            style={{width: 70,height: 70}}
           />
          </View>

          </View>

        </View>

        
        <View style={styles.containerKHAndLX}>

          <View style={styles.containerKH}>

            <View style={{flex: 2,justifyContent: 'center'}}>
            
            <Text style={{color: 'green',fontSize: 20,marginLeft: 20,fontWeight: 'bold'}} >
                0元餐来袭
            </Text>

            <Text style={{color: 'black',fontSize: 10,marginLeft: 20,marginTop: 5,fontWeight: 'bold'}}>
                免费吃喝玩乐购
            </Text>

          </View>

          <View style={{flex: 1,justifyContent: 'center',alignItems: 'center' }} >
            <Image source={require('./image/ylx.png')} 
            style={{width: 70,height: 70}}
           />
          </View>

          </View>

          <View style={styles.containerLX}>

            <View style={{flex: 2,justifyContent: 'center'}}>
            
            <Text style={{color: 'blue',fontSize: 20,marginLeft: 20,fontWeight: 'bold'}} >
                热门团购
            </Text>

            <Text style={{color: 'black',fontSize: 10,marginLeft: 20,marginTop: 5,fontWeight: 'bold'}}>
                大家都在买什么
            </Text>

          </View>

            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center' }} >
              <Image source={require('./image/tg.png')} 
              style={{width: 70,height: 70}}
              />
            </View>

          </View>

        </View>

        
        <View style={styles.containerBottomMargin}>

        </View>


        <View style={styles.containerBottomView}>

          <View style={styles.containerHHLX}>

            <Text style={{fontSize: 20,fontWeight: '500',marginLeft: 40,marginTop: 20}} >
              火红来袭
            </Text>

            <Text style={{fontSize: 15,fontWeight: '400',marginLeft: 40,marginTop: 10}} >
              优雅吃小龙虾
            </Text>

            <View style={{justifyContent: 'center',alignItems: 'center',marginTop: 20}} >
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} 
                style={{width: 70,height: 70}}
                />
            </View>

          </View>

          <View style={styles.containerNVLY}>


              <View style={styles.containerNV}>

              <View style={{flex: 2,justifyContent: 'center'}}>
            
                <Text style={{color: 'black',fontSize: 20,marginLeft: 20,fontWeight: 'bold'}} >
                  男女搭配
                </Text>

                <Text style={{color: 'black',fontSize: 10,marginLeft: 20,marginTop: 5,fontWeight: 'bold'}}>
                  齐心对抗地震
                </Text>

              </View>

              <View style={{flex: 1,justifyContent: 'center',alignItems: 'center' }} >
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} 
                style={{width: 70,height: 70}}
                />
              </View>

              </View>

              <View style={styles.containerLY}>

              <View style={{flex: 2,justifyContent: 'center'}}>
            
                <Text style={{color: 'black',fontSize: 20,marginLeft: 20,fontWeight: 'bold'}} >
                  六月玩嗨
                </Text>

                <Text style={{color: 'black',fontSize: 10,marginLeft: 20,marginTop: 5,fontWeight: 'bold'}}>
                  端午出行攻略
                </Text>

              </View>

              <View style={{flex: 1,justifyContent: 'center',alignItems: 'center' }} >
                <Image source={{url: 'https://facebook.github.io/react/img/logo_og.png'}}
                style={{width: 70,height: 70}}
                />
              </View>

              </View>

          </View>

        </View>

      </View>
    );
  }

  showAlert(msg) {
    Alert.alert(msg);
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerTop: {
    flexDirection: 'row' , 
    height: 200,
    width: mainWidth,
  },
  containerYB: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: 'gray',
  },
  containerCZTC: {
    flex: 2,
  },
  containerCZ: {
    flex: 1,
    flexDirection: 'row' ,
    borderBottomColor:'gray',
    borderBottomWidth: 1,
  },
  containerTC: {
    flex: 1,
    flexDirection: 'row',
  },

  containerYC: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: 'gray',
  },

  containerMD: {
    flex: 1,
  },
  containerMargin: {
    backgroundColor: 'rgb(222, 222, 222)',
    borderBottomColor:'gray',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    height: 20,
    width: mainWidth,
  },
  containerDC: {
    flexDirection: 'row' ,
    backgroundColor: 'white',
    borderBottomColor:'gray',
    borderBottomWidth: 1,
    height: 100,
    width: mainWidth,
  },

  containerKHAndLX : {
    flexDirection: 'row' ,
    backgroundColor: 'white',
    borderBottomColor:'gray',
    borderBottomWidth: 1,
    height: 100,
    width: mainWidth,
  },
  containerKH: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor:'gray',
    borderBottomWidth: 1,
    borderRightColor: 'gray',
    borderRightWidth: 1,
    height: 100,
  },
  containerLX: {
    flex: 1,
    flexDirection: 'row' ,
    backgroundColor: 'white',
    borderBottomColor:'gray',
    borderBottomWidth: 1,
    height: 100,
  },
  containerBottomMargin:{
    backgroundColor: 'rgb(222, 222, 222)',
    borderBottomColor:'gray',
    borderBottomWidth: 1,
    height: 20,
    width: mainWidth,
  },
  containerBottomView : {
    flex: 1,
    flexDirection: 'row' ,
    backgroundColor:'rgb(244, 244, 244)',
    width: mainWidth,
  },
  containerHHLX: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#FFFFFF',
  },
  containerNVLY: {
    flex: 1,
    flexDirection: 'column',
    borderLeftColor: '#FFFFFF',
    borderLeftWidth: 1,
  },
  containerNV: {
    flex: 1,
    flexDirection: 'row' ,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  containerLY: {
    flex: 1,
    flexDirection: 'row' ,
  },

});

AppRegistry.registerComponent('zyxrFrame', () => zyxrFrame);
