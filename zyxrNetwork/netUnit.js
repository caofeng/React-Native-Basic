import React, { Component } from 'react';

class NetUnit extends Component {

	//post请求
  /**
  *url :请求地址
  *data:参数
  *callback:回调函数
  */
  static  postFrom(url, data, callback) {

      var fetchOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          //表单
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:data//这里参数只有一个data,大家可以还有更多的参数
      };

      fetch(url, fetchOptions)
      .then((response) => response.json())
      .then((responseJson) => {
        // callback(JSON.parse(responseText));
        callback(responseJson);
      }).done();
    }


  /**
  *url :请求地址
  *data:参数(Json对象)
  *callback:回调函数
  */
static postJson (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        //json形式
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

  fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((responseJson) => {
      // callback(JSON.parse(responseText));
      callback(responseJson);
    }).done();
  }


  //get请求
  /**
  *url :请求地址
  *callback:回调函数
  */
  static  get(url, callback) {
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        // callback(JSON.parse(responseJson));
        callback(responseJson);
      })
      .catch((error) => {
        console.error(error);
      }).done();
    }

}

module.exports = NetUnit;