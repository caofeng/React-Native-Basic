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

} from 'react-native';

export default class zyxrTimer extends Component {


  constructor(props) {
    super(props);

    var timer_interval = null;
    var timer_timerout = null;
    var timer_immediate = null;

    this.state = {
      index:0
    };
  }

  componentDidMount () {

    //每隔一段时间后执行
    this.timer_interval = setInterval(()=> {
      
       this.setState({index:this.state.index += 1 })

    },1000);

    //间隔时间后执行，只执行一次
    this.timer_timerout = setTimeout(()=>{

      //alert('5秒后提示')

    },5000);

    //立即执行
    this.timer_immediate = setImmediate(()=>{

      //alert('10秒后立即提示')

    },10000);
  }

  componentWillUnmount () {
    this.timer_interval && clearTimeout(this.timer_interval);
    this.timer_timerout && clearTimeout(this.timer_timerout);
    this.timer_immediate && clearTimeout(this.timer_immediate);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30,color: 'blue',marginTop: 100}}>
          定时器{this.state.index}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('zyxrTimer', () => zyxrTimer);
