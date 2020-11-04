// import React, { Component } from 'react';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const USER_SESSION = "user_session";
const LOGIN_DATA = "login-details";
class Preferences {
  async saveUserSession(data){
    // await console.log('resp-data', data);
    await AsyncStorage.setItem(USER_SESSION, JSON.stringify(data));
  }

  async getUserSession(){
      const sessionData = await AsyncStorage.getItem(USER_SESSION);
      // console.log('session', sessionData)
      return await JSON.parse(sessionData);
  }

  async saveLoginData(data){
    await AsyncStorage.setItem(LOGIN_DATA, JSON.stringify(data));
  }

  async getLoginData(){
    const data = await AsyncStorage.getItem(LOGIN_DATA);
    return await JSON.parse(data);
  }
}

export default new Preferences();