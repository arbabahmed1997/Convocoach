import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
    TextInput
  } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {colors} from '../AppAssets/theme';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
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
                          <TextInput placeholder="Enter Email" style={styles.placeholder}/>
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
                          <TextInput placeholder="Enter Password" secureTextEntry={true} style={styles.placeholder}/>
                      </View>
                      </View>
                  </View>
                  <View style={{marginTop:15}}>
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
                  <View style={{marginTop:20}}>
                      <TouchableOpacity style={styles.LoginButton} onPress={() => this.props.navigation.navigate("TabDashboard") }>
                      <Text style={styles.logIn}>LOG IN</Text></TouchableOpacity>
                  </View>
                  <View style={{marginTop:10}}>
                      <Text style={styles.or2}>-OR-</Text>
                      <Text style={styles.signInWith}>Sign in with</Text>
                  </View>
                  <View style={{marginTop:15}}>
                      <View style={styles.SocialIcon}>
                      <TouchableOpacity>
                      <Image
                          source={require("../assets/images/fb-icon.png")}
                          resizeMode="contain"
                          style={styles.FBicon}
                      ></Image></TouchableOpacity>
                      <TouchableOpacity>
                      <Image
                          source={require("../assets/images/Gmail-icon.png")}
                          resizeMode="contain"
                          style={styles.GmailIcon}
                      ></Image></TouchableOpacity>
                      </View>
                  </View>
                  <View style={{marginTop:20}}>
                      <Text style={styles.loremIpsum}>Don&#39;t have an account?</Text>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup") }>
                      <Text style={styles.signup}>Signup</Text></TouchableOpacity>
                  </View>
                </View>
            </ScrollView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom:30,
    backgroundColor:"#eee"
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
    alignSelf:'center',
  },
  loginText: {
    color: "#121212",
    fontSize: 25,
    marginTop: 5,
    textAlign:'center',
    fontWeight:"bold"
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
  LoginButton:{
    width:'40%',
    height:50,
    marginLeft:'30%',
    borderRadius:20,
    backgroundColor:colors.AppTheme
  },
  placeholder: {
    fontSize:17,
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
    fontWeight:"bold",
    textAlign:'center',
    marginTop:15
  },
  or2: {
    color: "#121212",
    fontSize: 18,
    marginTop: 11,
    textAlign:'center',
    fontWeight:"700"
  },
  signInWith: {
    color: "#121212",
    fontSize: 18,
    marginTop: 4,
    textAlign:'center',
    fontWeight:"700"
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
    fontSize:18,
    height:25,
    textAlign:'center'
  },
  signup: {
    color: colors.AppTheme,
    fontSize:20,
    textAlign:'center',
    height:25,
    fontWeight:"bold"
  },
});

export default Login;