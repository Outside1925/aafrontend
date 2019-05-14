import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

import firebase from 'react-native-firebase';
import { GoogleSignin, statusCodes, GoogleSigninButton } from 'react-native-google-signin';

GoogleSignin.configure({
  forceConsentPrompt: true,
  webClientId: '974565965961-u7olf6j8cah0r6rv2mbu30urlifjqpp5.apps.googleusercontent.com'
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {failed: "NOOO", user: null, jwt: null};
  }

  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ failed: "SUCCESS" });
      this.setState({ user: userInfo });


      const resp = await fetch('https://auditarmy.com/api/sessions', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session: {
            token: userInfo.idToken,
            authprovider: "google"
          }
        })
      }).then(response => response.json());
      this.setState({ jwt: resp.jwt })

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        this.setState({ failed: "CANCELLED" });
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        this.setState({ failed: "PROGRESS" });
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        this.setState({ failed: "NO AVAIL" });
      } else {
        // some other error happened
        this.setState({error: error});
        this.setState({ failed: "WTF" });
      }
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('./assets/ReactNativeFirebase.png')} style={[styles.logo]}/>
          <Text style={styles.welcome}>
            Welcome to {'\n'} React Native Firebase
          </Text>
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.signIn}
            disabled={this.state.isSigninInProgress} />
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          {this.state.user ? (
            <Text style={styles.instructions}>
              Welcome, {this.state.user.user.name}
            </Text>
          ) : (
            <Text style={styles.instructions}>
              Please sign in to continue.
            </Text>
          )}
        </View>
      </ScrollView>
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
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
