import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from '../AppAssets/theme';
import Preferences from "../utils/Preferences";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '219796560845-5k0pu39ejt66u1sp35h5ljgrqpjlr3eg.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true,
      androidClientId:
        '219796560845-uk4pi8os97aige5eqk1d8ig227o8qqi8.apps.googleusercontent.com' // debug Id
        // '219796560845-fu5hg2jckpa075qmvr59n4317seslm32.apps.googleusercontent.com' // release Id
    });
  }


  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)

      Preferences.saveLoginData(userInfo);
      this.props.navigation.replace('TabDashboard');
    } catch (error) {
      console.log('Message', error.message);
      alert(error.message)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
        alert('Some Other Error Happened')
      }
    }
  };

  render() {
    const { isLoading } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.First}>
            <Image
              source={require("../assets/images/Login-icon.png")}
              resizeMode="contain"
              style={styles.LoginImage}
            ></Image>
            <Text style={styles.loginText}>Login</Text>
          </View>
          <View style={styles.TextFeildContainer}>
            <View style={styles.TextFeildRow}>
              <View style={styles.IconContainer}>
                <Image
                  source={require("../assets/images/Mail-icon.png")}
                  resizeMode="contain"
                  style={styles.IconStyle}
                ></Image>
                <TextInput
                  placeholder="Enter Email"
                  style={styles.placeholder}
                  onChangeText={text => this.setState({ email: text })}
                  value={this.state.email}
                />
              </View>
            </View>
          </View>
          <View style={styles.TextFeildContainer}>
            <View style={styles.TextFeildRow}>
              <View style={styles.IconContainer}>
                <Image
                  source={require("../assets/images/Password-icon.png")}
                  resizeMode="contain"
                  style={styles.IconStyle}
                ></Image>
                <TextInput
                  placeholder="Enter Password"
                  secureTextEntry={true}
                  style={styles.placeholder}
                  onChangeText={text => this.setState({ password: text })}
                  value={this.state.password}
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{marginTop:15}}>
                      <View style={styles.iconRow}>
                      <TouchableOpacity>
                      <Icon name="check-square" style={styles.icon}></Icon></TouchableOpacity>
                      <Text style={styles.rememberMe}>Remember me</Text>
                      </View>
                  </View> */}
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              style={styles.LoginButton}
              onPress={() => this.OnSubmit()}>
              {this.state.isLoading ?
                <ActivityIndicator size="small" color="#fff" style={{ marginTop: 15 }} />
                :
                <Text style={styles.logIn}>LOG IN</Text>
              }
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.or2}>-OR-</Text>
            <Text style={styles.signInWith}>Sign in with</Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <View style={styles.SocialIcon}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/fb-icon.png")}
                  resizeMode="contain"
                  style={styles.FBicon}
                ></Image></TouchableOpacity>
              <TouchableOpacity onPress={() => this.signIn()}>
                <Image
                  source={require("../assets/images/Gmail-icon.png")}
                  resizeMode="contain"
                  style={styles.GmailIcon}
                ></Image></TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.loremIpsum}>Don&#39;t have an account?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
              <Text style={styles.signup}>Signup</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  validateIsEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  OnSubmit = () => {
    const { email, password } = this.state

    if (!this.validateIsEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (password.trim().length < 1) {
      alert("Please enter your password");
      return;
    }

    try {
      this.setState({ isLoading: true })

      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("pass", password);

      fetch("http://ec2-3-15-170-206.us-east-2.compute.amazonaws.com/login.php", {
        method: 'POST',
        //headers: { 'Content-type': 'application/json' },
        body: formdata,
        redirect: 'follow'
      }).then(responce => responce.json()).then(user => {
        console.log('loginData====', user)
        this.setState({ isLoading: false })

        if (user[0].result == 'success') {
          this.setState({
            email: '',
            password: ''
          });
          Preferences.saveLoginData(user);
          this.props.navigation.replace('TabDashboard');

        } else {
          Alert.alert(
            "Login Failed",
            user[0].result,
          )
        }
      })
    } catch (error) {
      // Error saving data
      this.setState({ isLoading: false })
      console.log('error', error)
      Alert.alert("Error", "Login failed")
    }
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 30,
    backgroundColor: "#eee"
  },
  First: {
    width: '100%',
    height: 102,
    backgroundColor: "#eee",
    marginTop: 50
  },
  LoginImage: {
    width: 60,
    height: 60,
    marginTop: 20,
    alignSelf: 'center',
  },
  loginText: {
    color: "#121212",
    fontSize: 25,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: "bold"
  },
  TextFeildContainer: {
    width: '100%',
    height: 70,
    backgroundColor: "#eee",
    marginTop: 15
  },
  TextFeildRow: {
    width: '80%',
    height: 43,
    backgroundColor: "rgba(234,223,218,1)",
    borderRadius: 22,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: '10%'
  },
  IconStyle: {
    width: 30,
    height: 35
  },
  LoginButton: {
    width: '40%',
    height: 50,
    marginLeft: '30%',
    borderRadius: 20,
    backgroundColor: colors.AppTheme
  },
  placeholder: {
    fontSize: 17,
    height: 40,
    width: '82%',
    marginLeft: 15,
  },
  IconContainer: {
    height: 40,
    flexDirection: "row",
    marginLeft: 14,
    marginTop: 5,
  },
  forgotPassword: {
    color: "#121212",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 191
  },
  logIn: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 15
  },
  or2: {
    color: "#121212",
    fontSize: 18,
    marginTop: 11,
    textAlign: 'center',
    fontWeight: "700"
  },
  signInWith: {
    color: "#121212",
    fontSize: 18,
    marginTop: 4,
    textAlign: 'center',
    fontWeight: "700"
  },
  FBicon: {
    width: 40,
    height: 47,
  },
  GmailIcon: {
    width: 40,
    height: 47,
    marginLeft: 110
  },
  SocialIcon: {
    height: 47,
    flexDirection: "row",
    flex: 1,
    marginRight: 82,
    marginLeft: 103,
    marginTop: 7
  },
  loremIpsum: {
    color: "#121212",
    marginTop: 1,
    fontSize: 18,
    height: 25,
    textAlign: 'center'
  },
  signup: {
    color: colors.AppTheme,
    fontSize: 20,
    textAlign: 'center',
    height: 25,
    fontWeight: "bold"
  },
});

export default Login;