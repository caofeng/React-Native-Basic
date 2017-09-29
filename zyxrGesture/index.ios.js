/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View,PanResponder,Alert } from "react-native";

export default class zyxrGesture extends Component {
	constructor(props) {
		super(props);
		this.state = {
			property1: 12,
			property2: "Hello World",
			property3: true,
			property4: "red"

		};
	}
		//viewDidLoad
	componentDidMount() {}
		//ViewWillAppeare
	componentWillMount() {

	}

	showBlueView () {

		if (this.state.property3) {
			return <View style={[styles.welcome, { backgroundColor: "blue"}]} />;
		} else {
			return null;
		}
	}



	render() {
		return (
			<View style={styles.container}>

				<View style={[styles.welcome, { backgroundColor: this.state.property4}]}
				onLayout={(e)=>{
					//alert(e.nativeEvent.layout.y)
				}}
				onMoveShouldSetResponder={(e)=>{
					//console.log("开始移动");
					this.setState({property3:false});
				}}
				onMoveShouldSetResponderCapture={(e)=>{
					//console.log("什么事件");
				}}
				onResponderRelease={(e)=>{
					this.setState({property3:true});
				}}
				/>
				{this.showBlueView()}
				<View style={[styles.welcome, { backgroundColor: "yellow"}]}
					onMoveShouldSetResponder={(e)=>{
						this.setState({property3:true});
					}}
				/>
				<View style={[styles.welcome, { backgroundColor: "green"}]} />

			</View>
		);
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
		marginTop: 30,
		height: 150,
		width: 300
	}
});

AppRegistry.registerComponent("zyxrGesture", () => zyxrGesture);
