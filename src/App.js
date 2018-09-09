import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";

import { Header, Button, Spinner, CardSection } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAkHd7gvQ_2F6Qmqdu7CQ2KFIlVphBmskc",
      authDomain: "auth-993e4.firebaseapp.com",
      databaseURL: "https://auth-993e4.firebaseio.com",
      projectId: "auth-993e4",
      storageBucket: "auth-993e4.appspot.com",
      messagingSenderId: "605489078241"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" color="#007aff" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
