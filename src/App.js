import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAkHd7gvQ_2F6Qmqdu7CQ2KFIlVphBmskc",
      authDomain: "auth-993e4.firebaseapp.com",
      databaseURL: "https://auth-993e4.firebaseio.com",
      projectId: "auth-993e4",
      storageBucket: "auth-993e4.appspot.com",
      messagingSenderId: "605489078241"
    });
  }

  render() {
    return(
      <View>
        <Header headerText='Auth' />
        <LoginForm />
      </View>
    )
  }
}

export default App;