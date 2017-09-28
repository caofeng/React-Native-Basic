import React, { Component } from "react";
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TabBarIOS,
	Dimensions,
	Alert,
	StatusBar,
	NativeModules,
	TouchableHighlight,
	NativeEventEmitter
} from "react-native";

var RootViewController = NativeModules.RootViewController;
var ViewController = NativeModules.ViewController;

//RN监听OC端发送的消息
var NativeContactionRNManager = NativeModules.NativeContactionRNManager;
const myEmitter = new NativeEventEmitter(NativeContactionRNManager);

class People extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		//RN监听OC端发送的消息
		myEmitter.addListener("EventReminder", data => {
			console.log(data);
		});
	}

	//必须移除监听
	componentWillUnmount() {
		myEmitter.remove();
	}

	render() {
		return (
			<View style={styles.contains}>
				<StatusBar barStyle="dark-content" hidden={false} />
				<Text style={styles.text}>
					{this.props["scores"][0]["value"]}
					{"\n"}

					{NativeModules.RootViewController.b}
				</Text>

				<TouchableHighlight
					style={[styles.highLight, { marginTop: 50 }]}
					underlayColor="#873029"
					activeOpacity={0.8}
					onPress={() => this.nameAndAge()}
				>
					<Text style={styles.text}>简单数据传递-无回调</Text>
				</TouchableHighlight>

				<TouchableHighlight
					style={[styles.highLight, { marginTop: 50 }]}
					underlayColor="#873029"
					activeOpacity={0.8}
					onPress={() => this._nameAndAge()}
				>
					<Text style={styles.text}>简单数据传递-有回调</Text>
				</TouchableHighlight>
			</View>
		);
	}

	nameAndAge() {
		RootViewController.rnToiOS("曹峰", 25);
		ViewController.rnToiOS("曹峰", 25);
	}

	_nameAndAge() {
		RootViewController.RNInvokeOCCallBack(
			{ name: "jiangqq", description: "http://www.lcode.org" },
			(error, events) => {
				if (error) {
					console.error(error);
				} else {
					alert("回调成功");
				}
			}
		);
	}
}

const styles = StyleSheet.create({
	contains: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#987234"
	},
	text: {
		color: "black",
		fontSize: 30
	},
	highLight: {
		width: 300,
		height: 50,
		backgroundColor: "white"
	}
});

AppRegistry.registerComponent("TestDemo", () => People);
