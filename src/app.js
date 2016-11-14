import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };
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
    console.log('Is user logged in?');
    console.log(this.state.loggedIn);
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
