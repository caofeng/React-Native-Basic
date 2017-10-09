/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Animated,LayoutAnimation } from "react-native";

export default class zyxrAnimated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAmin: new Animated.Value(0),
      font:30,

    };
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAmin, {
      toValue: 1,
      duration: 5000,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.text, { opacity: this.state.fadeAmin }]}>
          动画
        </Animated.Text>

        <Text style={[styles.texttt,{fontSize:this.state.font}]}
        onPress={()=>{
          LayoutAnimation.spring();
          this.setState({font: this.state.font+10})
        }}
        >跟着移动吗</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 30,
    marginTop: 100,
    color: "#123456"
  },
  texttt: {
    color: "#123456",
    marginBottom: 30,
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent("zyxrAnimated", () => zyxrAnimated);
