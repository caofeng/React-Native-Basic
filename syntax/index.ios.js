/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

export default class syntax extends Component {
  componentWillMount() {
    var m = new Map();
    m.set("a", 1);
    m.set("b", 2);
    m.set("c", "11");
    m.set("d", "1111");
    m.set("e", "134");
    if (m.has("b")) {
      //console.log(...m);
    } else {
      //console.log("不存在");
    }

    var array = [123,"123","abc",...m];

    //console.log(...array);

    var a = 1;
    {
      let a = 2;
      let b = 3;
      //console.log(a);
      //console.log(b);
    }
    //console.log(a);

    for(let z of array){
     // console.log(z)
    }

    for(let z in array){
      //console.log(array[z])
    }

    //this.sayHello("ES6");
    //this.sayHello();

    for (var i = 0; i < 10; i++) {
      //console.log(i);
    }
    //console.log(i);

    for (let j = 0; j < 10; j++) {
      //console.log(j);
    }
      //console.log(j);

      this.dosomething(5,);




  }


  dosomething(x = 2,y = 3){
    console.log(x);
    console.log(y);
  }





  sayHello(name) {
    var name = name||"曹峰";
    console.log(name);
  }

  componentDidLMount() {}

  componmentWillUnmount() {}

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("syntax", () => syntax);
