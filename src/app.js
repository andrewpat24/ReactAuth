import React, { Component } from 'react';
import { View, Button } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBgZErXf5fEbaHd8Z1vFYpGD0we5NJ621U',
      authDomain: 'auth-d5e88.firebaseapp.com',
      databaseURL: 'https://auth-d5e88.firebaseio.com',
      storageBucket: 'auth-d5e88.appspot.com',
      messagingSenderId: '72790317230'
    });
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    } return (
      <LoginForm />
    );
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
