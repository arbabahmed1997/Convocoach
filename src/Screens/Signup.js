import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, ImageBackground, Text,TextInput } from "react-native";
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ScrollView>
              <TextInput placeholder='' style={{width:'70%',height:45}}/>
                <View style={styles.container}>
                <View gradientImage="Gradient_JJBzdqj.png" style={styles.rect}>
                    <Image
                    source={require("../assets/images/sign-up-icon.png")}
                    resizeMode="contain"
                    style={styles.image3}
                    ></Image>
                    <Text style={styles.signUp}>Sign up</Text>
                </View>
                <View style={styles.rect4}>
                    <Text style={styles.phoneNo}>Full Name</Text>
                    <View style={styles.rect5}>
                    <Image
                        source={require("../assets/images/User-icon-2.png")}
                        resizeMode="contain"
                        style={styles.image4}
                    ></Image>
                    <TextInput placeholder='' style={{width:'70%',height:45,fontSize:17,}}/>
                    </View>
                </View>
                <View style={styles.rect4}>
                    <Text style={styles.phoneNo}>Phone No</Text>
                    <View style={styles.rect5}>
                    <Image
                        source={require("../assets/images/phone-icon.png")}
                        resizeMode="contain"
                        style={styles.image5}
                    />
                    <TextInput placeholder='' style={{width:'70%',height:45,fontSize:17,}}/>
                    </View>
                </View>
                <View style={styles.rect4}>
                    <Text style={styles.phoneNo}>Email</Text>
                    <View style={styles.rect5}>
                    <Image
                        source={require("../assets/images/Mail-icon.png")}
                        resizeMode="contain"
                        style={styles.image5}
                    />
                    <TextInput placeholder='' style={{width:'70%',height:45,fontSize:17,}}/>
                    </View>
                </View>
                <View style={styles.rect4}>
                    <Text style={styles.phoneNo}>Password</Text>
                    <View style={styles.rect5}>
                    <Image
                        source={require("../assets/images/Password-icon.png")}
                        resizeMode="contain"
                        style={styles.image5}
                    />
                    <TextInput placeholder='' secureTextEntry={true} style={{width:'70%',height:45,fontSize:17,}}/>
                    </View>
                </View>
                <View style={styles.rect4}>
                    <Text style={styles.phoneNo}>ReEnter Password</Text>
                    <View style={styles.rect5}>
                    <Image
                        source={require("../assets/images/retype-password-icon.png")}
                        resizeMode="contain"
                        style={styles.image5}
                    />
                    <TextInput placeholder='' secureTextEntry={true} style={{width:'70%',height:45,fontSize:17,}}/>
                    </View>
                </View>
                {/* <View style={styles.rect4}>
                    <Text style={styles.reTypePassword}>Re-Type Password</Text>
                    <View style={styles.rect5}>
                    <Image
                        source={require("../assets/images/retype-password-icon.png")}
                        resizeMode="contain"
                        style={styles.image8}
                    />
                    <TextInput placeholder='' secureTextEntry={true} style={{width:'70%',height:45,fontSize:17,}}/>
                    </View>
                </View> */}
                <View gradientImage="Gradient_qDnZHkq.png" style={styles.rect12}>
                    <ImageBackground
                    source={require("../assets/images/Register-button.png")}
                    resizeMode="contain"
                    style={styles.image9}
                    imageStyle={styles.image9_imageStyle}
                    >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("TabDashboard") }>
                    <Text style={styles.register}>Register</Text></TouchableOpacity>
                    </ImageBackground>
                </View>
                <View gradientImage="Gradient_TxjSenw.png" style={styles.rect13}>
                    <View style={styles.haveAnAccountRow}>
                    <Text style={styles.haveAnAccount}>Have an account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login") }>
                    <Text style={styles.signIn}>Sign in</Text></TouchableOpacity>
                    </View>
                </View>
                </View>
            </ScrollView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom:50,
    backgroundColor:"#eee"
  },
  image: {
    width: 375,
    height: 200,
    marginTop: -5
  },
  image_imageStyle: {},
  image2: {
    width: 75,
    height: 85,
    marginTop: 52,
    marginLeft: 150
  },
  rect: {
    width: 375,
    height: 93,
    backgroundColor: "#eee",
    marginTop: 70
  },
  image3: {
    width: 70,
    height: 55,
    marginTop: 3,
    marginLeft: 149
  },
  signUp: {
    
    color: "#121212",
    fontSize: 22,
    marginTop: 2,
    fontWeight:"700",
    marginLeft: 150
  },
  rect2: {
    width: 375,
    height: 90,
    backgroundColor: "#eee",
    marginTop: 4
  },
  fullName: {
    
    color: "#121212",
    fontSize: 18,
    marginTop: 7,
    fontWeight:"700",
    marginLeft: 25
  },
  rect3: {
    width: 206,
    height: 45,
    backgroundColor: "#EADFDA",
    borderRadius: 22,
    marginTop: 9,
    marginLeft: 15
  },
  image4: {
    width: 32,
    height: 25,
    marginTop: 7,
    marginLeft: 11
  },
  rect4: {
    width: '100%',
    height: 90,
    backgroundColor: "#eee",
    // backgroundColor: "red",
    marginTop: 6
  },
  phoneNo: {
    color: "#121212",
    fontSize: 18,
    marginTop: 4,
    fontWeight:"700",
    marginLeft: 26
  },
  rect5: {
    width: '90%',
    marginLeft:'10%',
    height: 45,
    backgroundColor: "#EADFDA",
    // backgroundColor: "green",
    borderRadius: 22,
    marginTop: 8,
    marginLeft: 15,
    flexDirection:'row'
  },
  image5: {
    width: 32,
    height: 25,
    marginTop: 10,
    marginLeft: 11
  },
  rect6: {
    width: 375,
    height: 90,
    backgroundColor: "#eee",
    marginTop: 3
  },
  eMail: {
    
    color: "#121212",
    fontSize: 18,
    marginTop: 7,
    marginLeft: 30,
    fontWeight:"700"
  },
  rect7: {
    width: 206,
    height: 45,
    backgroundColor: "#EADFDA",
    borderRadius: 22,
    marginTop: 7,
    marginLeft: 21
  },
  image6: {
    width: 30,
    height: 25,
    marginTop: 10,
    marginLeft: 13
  },
  rect8: {
    width: 375,
    height: 90,
    backgroundColor: "#eee",
    marginTop: 5
  },
  password: {
    
    color: "#121212",
    fontSize: 18,
    marginTop: 6,
    marginLeft: 30,
    fontWeight:"700"
  },
  rect9: {
    width: 206,
    height: 45,
    backgroundColor: "#EADFDA",
    borderRadius: 22,
    marginTop: 5,
    marginLeft: 21
  },
  image7: {
    width: 32,
    height: 25,
    marginTop: 8,
    marginLeft: 12
  },
  rect10: {
    width: 375,
    height: 90,
    backgroundColor: "#eee",
    marginTop: 2
  },
  reTypePassword: {
    
    color: "#121212",
    fontSize: 18,
    marginTop: 7,
    marginLeft: 30,
    fontWeight:"700"
  },
  rect11: {
    width: 206,
    height: 45,
    backgroundColor: "#EADFDA",
    borderRadius: 22,
    marginTop: 6,
    marginLeft: 21
  },
  image8: {
    width: 32,
    height: 25,
    marginTop: 8,
    marginLeft: 12
  },
  rect12: {
    width: 375,
    height: 63,
    backgroundColor: "#eee",
    marginTop: 20
  },
  image9: {
    width: 120,
    height: 50,
    marginTop: 3,
    marginLeft: 129
  },
  image9_imageStyle: {},
  register: {
    
    color: "rgba(255,255,255,1)",
    marginTop: 12,
    marginLeft: 28,
    fontSize:18,
    fontWeight:"700"
  },
  rect13: {
    width: 375,
    height: 50,
    backgroundColor: "#eee",
    flexDirection: "row",
    top:15
  },
  haveAnAccount: {
    
    color: "#121212",
    fontSize:18,
    height:40
  },
  signIn: {
    
    color: "#121212",
    marginLeft: 6,
    fontSize:18,
    height:40,
    fontWeight:"700"
  },
  haveAnAccountRow: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 119,
    marginLeft: 97,
    marginTop: 7
  }
});

export default Signup;