import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, ScrollView, Text, ImageBackground } from "react-native";
import Preferences from "../utils/Preferences";

class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

    Preferences.getLoginData()
      .then(data => {
        console.log('login-data', data);
        if (data && data != null && data != '') {
          this.props.navigation.replace('TabDashboard')
        }
        // else {
        //   this.goto('Home', undefined)
        // }
      })
      .catch(error => {
        console.log('error', error);
        //this.goto('Login', undefined)
      })
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../assets/images/Icon.png")}
            resizeMode="contain"
            style={styles.image}
          >
          </Image>
          <View gradientImage="Gradient_ISvSWFo.png" style={styles.rect}>
            <Text style={styles.loremIpsum}>
              Science-based methodology to{"\n"}   super charge your voice.
                    </Text>
          </View>
          <View gradientImage="Gradient_lHspoJ3.png" style={styles.rect2}>
            <ImageBackground
              source={require("../assets/images/blue-button-bar.png")}
              resizeMode="stretch"
              style={styles.image2}
              imageStyle={styles.image2_imageStyle}
            >
              <TouchableOpacity onPress={() => this.props.navigation.replace("Login")}>
                <Text style={styles.letSGetStarted}>LET&#39;S GET STARTED</Text></TouchableOpacity>
            </ImageBackground>
          </View>
          <View gradientImage="Gradient_JlnA7LB.png" style={styles.rect3}>
            <TouchableOpacity onPress={() => this.props.navigation.replace("Login")}>
              <Text style={styles.logIn}>LOG IN</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 20,
    backgroundColor: "#eee"
  },
  image: {
    width: 375,
    height: 150,
    marginTop: 75
  },
  rect: {
    width: 375,
    height: 90,
    backgroundColor: "#eee",
    marginTop: 46
  },
  loremIpsum: {

    color: "#121212",
    fontSize: 18,
    marginTop: 18,
    marginLeft: 64
  },
  rect2: {
    width: 375,
    height: 79,
    backgroundColor: "#eee",
    marginTop: 104
  },
  image2: {
    width: 282,
    height: 53,
    marginTop: 12,
    marginLeft: 46
  },
  image2_imageStyle: {},
  letSGetStarted: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 57
  },
  rect3: {
    width: 375,
    height: 40,
    backgroundColor: "#eee",
    marginTop: 5,
    marginBottom: 150
  },
  logIn: {

    color: "#121212",
    fontSize: 20,
    marginTop: 9,
    marginLeft: 158,
    fontWeight: "700"
  }
});

export default GetStarted;