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
  DatePickerIOS,
  Alert,
  PickerIOS,
  Picker,

} from 'react-native';

var PickerItemIOS = PickerIOS.Item;
var CAR_MAKES_AND_MODELS = {
  amc: {
    name: 'AMC',
    models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
  },
  alfa: {
    name: 'Alfa-Romeo',
    models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
  },
  aston: {
    name: 'Aston Martin',
    models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
  },
  audi: {
    name: 'Audi',
    models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
  },
  austin: {
    name: 'Austin',
    models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
  },
  borgward: {
    name: 'Borgward',
    models: ['Hansa', 'Isabella', 'P100'],
  },
  buick: {
    name: 'Buick',
    models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',
             'Roadmaster', 'Skylark'],
  },
  cadillac: {
    name: 'Cadillac',
    models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
  },
  chevrolet: {
    name: 'Chevrolet',
    models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',
             'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
  },
};

export default class zyxrPicker extends Component {

  state = {
    date:new Date(),
    itemValue:'',
    carMake: 'cadillac',
  }

  render() {

    return (
      <View style={styles.container}>
        
        <DatePickerIOS style={styles.datePicker}
          minuteInterval = {1}
          mode='date'
          date={this.state.date}
          onDateChange={(value)=>{
            this.setState({date:value})
            Alert.alert('选中时间', value)
          }}
        />

        <Picker 
        style={styles.picker}
        selectedValue={this.state.itemValue}
        itemStyle={styles.itempicker}
        onValueChange={(itemValue,itemPosition)=>{
        	this.setState({itemValue:itemValue})
        	Alert.alert('选中语言', 
        		itemValue+itemPosition)
        }}
        >
        	<Picker.Item label="Java" value="java" />
        	<Picker.Item label="Objective-C" value="OC" />
        	<Picker.Item label="JavaScript" value="js" />
        	<Picker.Item label="React-Native" value="RN" />
        	<Picker.Item label="PHP" value="php" />
        	<Picker.Item label="Go" value="go" />
        </Picker>



		<PickerIOS 

		style={styles.picker}

        selectedValue={this.state.carMake}

        itemStyle={styles.itempicker}

        onValueChange={(carMake)=>{
			this.setState({carMake})
		}}

		>
		{Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (

            <PickerItemIOS
              key={carMake}
              value={carMake}
              label={CAR_MAKES_AND_MODELS[carMake].name}
            />
         ))}

		</PickerIOS>

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
  datePicker:{
    margin: 20,
    width: 400,
    height: 200,
  },
  picker:{
    margin: 20,
    width: 400,
    height: 200,
  },
  itempicker:{  
    color:'#e6454a',  
    fontSize:25,  
    height:200  
  } 
  
});

AppRegistry.registerComponent('zyxrPicker', () => zyxrPicker);
