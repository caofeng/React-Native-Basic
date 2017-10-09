/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Dimensions,
	Keyboard,
	Alert,
	TouchableHighlight,
	ActivityIndicator,

} from "react-native";

const { width, height } = Dimensions.get("window");
const fetchCheckCode = "获取验证码";

export default class ZYXRLogin extends Component {
	constructor(props) {
		super(props);
		var timer_interval = null;
		this.state = {
			password: "",
			loginButBgColor: "#999999",
			islogining: false,
			count: 0,
			checkCode: "",
			checkCodeTextColor: "blue",
			checkCodeText: fetchCheckCode,
			seconds: 60,
			isShowActivity: false
		};
	}

	componentWillMount() {}

	componentWillUnmount() {
		this.timer_interval && clearTimeout(this.timer_interval);
	}

	render() {
		return (
			<View
				style={{
					alignItems: "center",
					justifyContent: "space-between",
					height: height,
					backgroundColor: "#FFFFFF",
				}}
			>
				<View
					style={styles.container}
					onMoveShouldSetResponder={e => {
						{
							Keyboard.dismiss();
							this.setState({ islogining: false });
						}
					}}
				>
					<Text style={styles.loginText}>登陆</Text>

					<Image
						style={styles.touxiang}
						source={require("./images/touxiang.jpeg")}
					/>

					<Text style={styles.mobileText}>183****6206</Text>

					<TextInput
						style={styles.passwordInput}
						placeholder={"请输入登录密码"}
						placeholderTextColor={"#AAAAAA"}
						clearButtonMode="while-editing"
						returnKeyType="done"
						secureTextEntry={true}
						autoFocus={true}
						editable={!this.state.islogining}
						onFocus={() => {}}
						value={this.state.password}
						onChangeText={text => {
							this.setState({ password: text });
							if (text.length == 0) {
								this.setState({ loginButBgColor: "#999999" });
							} else {
								this.setState({ loginButBgColor: "red" });
							}
						}}
						maxLength={20}
						onSubmitEditing={e => {}}
					/>

					{this.showForgetViewsIfNeed()}

					<View style={styles.forgetPassWordView}>
						<Text
							style={styles.forgetPassWord}
							onPress={this.responseEvent.bind(this, "忘记密码")}
							suppressHighlighting={true}
						>
							忘记密码
						</Text>
					</View>

					<TouchableHighlight
						style={[
							styles.loginBut,
							{ backgroundColor: this.state.loginButBgColor }
						]}
						disabled={this.state.password.length == 0}
						underlayColor={"red"}
						onPress={() => {
							Keyboard.dismiss();
							this.setState({
								islogining: true,
								count: this.state.count + 1,
								isShowActivity: true
							});
						}}
					>
						<View
							style={{
								backgroundColor: "rgba(255,255 ,255 ,0 )",
								flexDirection: "row",
								height: 50,
								width: width - 40,
								alignItems: "center",
								position: "absolute"
							}}
						>
							<Text style={styles.lJloginText}>立即登陆</Text>
							{this.showActivityIfNeed()}
						</View>
					</TouchableHighlight>

					<Text style={[styles.protocolText, { color: "#AAAAAA" }]}>
						点击"登录"即表示同意<Text
							style={[styles.protocolText, { color: "blue" }]}
							suppressHighlighting={true}
							onPress={() => {
								this.setState({ isShowActivity: false });
							}}
						>
							《中业兴融用户协议》
						</Text>
					</Text>
				</View>
				<Text
					style={{ fontSize: 15, color: "#000000", marginBottom: 30 }}
				>
					中业兴融已正式接入华瑞银行存管
				</Text>
			</View>
		);
	}

	responseEvent(msg) {
		alert(msg);
	}

	showForgetViewsIfNeed() {
		if (this.state.count >= 5) {
			return (
				<View style={{ alignItems: "center" }}>
					<View style={styles.container2}>
						<TextInput
							style={styles.checkCode}
							placeholder={"请输入验证码"}
							placeholderTextColor={"#AAAAAA"}
							keyboardType="number-pad"
							clearButtonMode="while-editing"
							value={this.state.checkCode}
							maxLength={6}
							onChangeText={text => {
								this.setState({ checkCode: text });
							}}
						/>

						<Text
							style={[
								styles.checkCodeText,
								{ color: this.state.checkCodeTextColor }
							]}
							onPress={() => {
								this.setState({
									checkCodeTextColor: "#AAAAAA"
								});
								if (this.state.seconds == 60) {
									this.timer_interval = setInterval(() => {
										this.setState({
											seconds: this.state.seconds - 1
										});

										if (this.state.seconds < 1) {
											this.setState({
												checkCodeTextColor: "blue",checkCodeText: fetchCheckCode,seconds: 60
											});
											this.timer_interval &&
												clearTimeout(
													this.timer_interval
												);
										} else {
											this.setState({
												checkCodeText:
													"还剩余" +
													this.state.seconds +
													"s"
											});
										}
									}, 1000);
								}
							}}
						>
							{this.state.checkCodeText}
						</Text>
					</View>

					<View
						style={{
							backgroundColor: "#CCCCCC",
							height: 1,
							width: width - 40
						}}
					/>
				</View>
			);
		} else {
			return null;
		}
	}

	showActivityIfNeed() {
		if (this.state.isShowActivity) {
			return (
				<ActivityIndicator
					size="small"
					color="white"
					animating={this.state.isShowActivity}
					hidesWhenStopped={true}
				/>
			);
		} else {
			return null;
		}
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 0,
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "#FFFFFF"
	},
	loginText: {
		marginTop: height == 812 ? 50 : 30,
		color: "#000000",
		fontSize: 22
	},
	touxiang: {
		width: 80,
		height: 80,
		marginTop: height == 812 ? 50 : 30,
		borderRadius: 40
	},
	mobileText: {
		marginTop: 20,
		color: "#555555",
		fontSize: 20
	},
	passwordInput: {
		marginTop: height == 812 ? 70 : 50,
		height: 40,
		width: width - 40,
		borderBottomWidth: 1,
		borderBottomColor: "#CCCCCC"
	},
	forgetPassWordView: {
		marginTop: 10,
		backgroundColor: "#FFFFFF",
		width: width,
		alignItems: "flex-end"
	},
	forgetPassWord: {
		color: "#AAAAAA",
		fontSize: 18,
		marginRight: 20
	},
	loginBut: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 30,
		height: 50,
		width: width - 40
	},
	lJloginText: {
		color: "#FFFFFF",
		fontSize: 20,
		marginLeft: (width - 120) / 2
	},
	protocolText: {
		marginTop: height == 812 ? 30 : 20,
		fontSize: 15
	},
	container2: {
		flexDirection: "row",
		marginTop: 20,
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#FFFFFF",
		width: width
	},
	checkCode: {
		marginLeft: 20,
		width: width - 140,
		height: 40,
		color: "#000000",
		fontSize: 20
	},
	checkCodeText: {
		fontSize: 16,
		marginRight: 20
	}
});

AppRegistry.registerComponent("ZYXRLogin", () => ZYXRLogin);
