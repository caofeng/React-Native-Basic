/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, 
{ 
	Component 
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  SectionList
} from 'react-native';

/*
*	系统默认创建的入口类 类似AppDelegate
*/
export default class helloworld extends Component {
  render() {

  		//属性
    let pic = {
      url:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (

      <View style={styles.container}>
      	
      <Text style={{color:'red',fontSize:30,fontWeight:'bold'}}>
      	测试样式
      </Text>
		
      <Text style={styles.myStyle}>
		我的样式
      </Text>

      <Image source={pic} style={{width: 300, height: 210}} />
      
        <Text style={styles.welcome}>
          Hello React Native! Hello CF!!!
        </Text>
        
        <Text style={styles.instructions}>
          每个人都会遇到所钟情的语言,{'\n'}
          欢迎来到React Native的世界
        </Text>

        <Text style={styles.instructions}>
          接下来该说点啥呢？？？
        </Text>

        <Greeting name='曹峰' />

        <SparkText text = '今天是个好日子' />

      </View>
    );
  }
}

//样式-------------------------------------

const styles = StyleSheet.create({
  container: {
  	width:400,	
  	height:600,  
    //flex: 1, 指定某个组件扩张以撑满所有剩余的空间
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  myButton:{

	fontSize:20,
	color:'#000000',
  },
	
   myStyle:{
   	fontSize:30,
   	color:'red',
   	backgroundColor:'blue',
   	textAlign:'left',
   }

});

//自定义组件1-------------------------------------

class Greeting extends Component {
  render() {
    return (
      <Text style={{fontSize:20}}> Hello {this.props.name}!</Text>
    );
  }
}

//自定义组件2-------------------------------------

class SparkText extends Component {

  constructor(props){
    super(props);
    this.state = {showText:true};

     // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render () {

    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
  
    return (
      
      <Text> {display} </Text>

    );
  }
}

/*
*	自定义类1
*/

class homeViewController extends Component {

	constructor(props){
		super(props);
		this.state = {text:''};//类似成员变量
	}

	render () {

		return (

			<View style={{
				left:10,
				top:20,
				 height:600,
				 width:350,
				// flex:1,
				backgroundColor:'red',
				flexDirection: 'column',//column,row
				justifyContent: 'center',//flex-start,center,flex-end,space-around,space-between
				alignItems:'center'//flex-start,center,flex-end,stretch(要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸)
			}}>

				<TextInput style={{width:200,height:40,backgroundColor:'white',textAlign:'center'}} 

					placeholder="Type here to translate!"

					onChangeText={(text) => this.setState({text})}

					 />

				<Text style={{color:'white',fontSize:20}} >
					{this.state.text}
				</Text>
					
				 
				<View style={{width:100,height:100,backgroundColor:'blue'}}>

				</View>

				 <View style={{width:100,height:100,backgroundColor:'green'}}>

				 </View>

				 <View style={{width:100,height:100,backgroundColor:'skyblue'}}>

				 </View>

				 <Text style={{fontSize:30,color:'white'}}>
					我是文本
				 </Text>

			</View>

		);
	}
}

/*
*	自定义类2
*/

class UserViewController extends Component {

	render () {

		return (
		
    /*
			<ScrollView style = {{width: 400,height: 400}} >
      
      <Text style = {{fontSize: 100}}> Scroll me </Text>
      <Image source={require('./img/timg.jpg')} />
      <Image source={require('./img/timg.jpg')} />
      <Image source={require('./img/timg.jpg')} />
      <Image source={require('./img/timg.jpg')} />
      <Image source={require('./img/timg.jpg')} />
      <Image source={require('./img/timg.jpg')} />
      <Text style = {{fontSize: 80}}> Scroll me do not stop </Text>
      <Image source={require('./img/timg.jpg')} />
      <Image source={require('./img/timg.jpg')} />
      <Image source={require('./img/timg.jpg')} />
      <Image source={require('./img/timg.jpg')} />
      <Image source={require('./img/timg.jpg')} />
      </ScrollView>
			
      */

      /*
      <FlatList
      data = {
        [
        {key:'123'},
        {key:'wew'},
        {key:'dsa'},
        {key:'fgg'},
        {key:'ert'},
        {key:'vdd'},
        {key:'gad'},
        ]
      }

      renderItem={({item}) => <Text style={{fontSize: 30 ,color: '#FF0000'}}>{item.key}</Text>}

      />

      */

      <View style = {{left: 10,top: 50,
      width: 400,height: 600,
      backgroundColor: '#000000',alignItems:'center',justifyContent:'center'}}>

      <SectionList style = {{width: 400,backgroundColor: '#FF0000'}}
      sections={[

          {title:'A',data:[{key:'1'},
            {key:'2'},
            {key:'3'},
            {key:'4'},
            {key:'5'},
            {key:'6'},
            {key:'7'},
            {key:'8'},
            {key:'9'},
            {key:'10'},
            {key:'11'},
            {key:'12'}]},

          {title:'B',data:[{key:'a'},
            {key:'b'},
            {key:'c'},
            {key:'d'},
            {key:'e'},
            {key:'f'},
            {key:'g'},
            {key:'h'},
            {key:'i'},
            {key:'j'},
            {key:'k'},
            {key:'l'}]},

          {title:'C',data:[{key:'a'},
            {key:'b'},
            {key:'c'},
            {key:'d'},
            {key:'e'},
            {key:'f'},
            {key:'g'},
            {key:'h'},
            {key:'i'},
            {key:'j'},
            {key:'k'},
            {key:'l'}]},

        ]}
        
        renderItem = {({item}) => <Text style = {{color: '#FFFFFF',fontSize: 30,alignItems:'center',justifyContent:'center'}}> {item.key} </Text>}

        renderSectionHeader = {({section}) => <Text style = {{color: '#000000',fontSize: 100}}> {section.title} </Text> }

        />

      </View>

		);
	}
}





AppRegistry.registerComponent('helloworld', () => UserViewController);
