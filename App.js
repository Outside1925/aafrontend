import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import TabNavigator from './containers/TabNavigator';
import firebase from 'react-native-firebase';
import { GoogleSignin, statusCodes, GoogleSigninButton } from 'react-native-google-signin';
import NavigationManager from './containers/TabNavigator';
import PhoneStorageManager from './assets/jwtStorageManager';
import { TouchableOpacity } from 'react-native-gesture-handler';


//import deviceStorage from './assets/deviceStorage'

GoogleSignin.configure({
  forceConsentPrompt: true,
  webClientId: '795729414440-g0dm2lep8tcamtjnhp7nq22dc7um217d.apps.googleusercontent.com'
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { failed: "NOOO", user: null, jwt: null };
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

      //user creation start
      await fetch('http://auditarmy.com/api/users',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "user": {
            "token": userInfo.idToken,
            "authprovider": "google"
          }
        })
      })
      .then((response) => response.json())
        .then((responseJson) => {
          console.log('users respo ', responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
      // user creation end
      // session creation start
      await fetch('http://auditarmy.com/api/sessions',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "session": {
            "token": userInfo.idToken,
            "authprovider": "google"
          }
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log('sessions respo ', responseJson)
          this.setState({ jwt: responseJson.jwt }, () => {
              console.log('state has been set', this.state.jwt);
              PhoneStorageManager._storeData("key", this.state.jwt);
            });
        })
        .catch((error) => {
          console.error(error);
        });
      // session creation end

      // const resp = await fetch('http://auditarmy.com/api/users', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     "user": {
      //       "token": userInfo.idToken,
      //       "authprovider": "google"
      //     }
      //   })
      // })
      //   .catch(e => console.log('error in api ', e))
      // console.log("response users", resp);

      // .then(response => response.json())

      // console.log("response users" ,response);
      // this.setState({ jwt: resp.jwt }, ()=> {
      //   console.log(this.state.jwt, 'jwt');
      //   PhoneStorageManager._storeData("key",this.state.jwt);
      // });
      // console.log("this is not working");


      // const respoSession = await 
      // fetch('http://auditarmy.com/api/sessions', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     "session": {
      //       "token": userInfo.idToken,
      //       "authprovider": "google"
      //     }
      //   })
      // }).then(response => console.log('resp ', response.data))
      //   .catch(e => console.log('e ', e))
      // this.setState({ jwt: 'dumy jwt' }, () => {
      //   console.log(this.state.jwt, 'jwt');
      //   PhoneStorageManager._storeData("key", this.state.jwt);
      // });

      // console.log("res " ,respoSession);
      // console.log("jwt token " ,respoSession.formData.jwt);
      // this.setState({ jwt: resp.jwt }, ()=> {
      //   console.log(this.state.jwt, 'jwt');
      //   PhoneStorageManager._storeData("key",this.state.jwt);
      // });
      // console.log("this is not working");
    } catch (error) {
      console.log("error ", error);
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
        this.setState({ error: error });
        this.setState({ failed: "some other error happened" });
      }
    }
  }

  render() {
    if (this.state.jwt) {
      console.log('navigation state jwt', this.state.jwt);
      console.log('user token', this.state.user)
      return (
        <NavigationManager JWT={this.state.jwt} />
      );
    }
    else
      return (
        <View style={styles.container}>
          <Image source={require('./assets/auditlogo.png')} style={[styles.logo]} />
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.signIn}
            disabled={this.state.isSigninInProgress} />
          <Text style={styles.instructions}>
            Please Sign in to continue.
              </Text>

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
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 200,
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
