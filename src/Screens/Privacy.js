import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Image, Text, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
class Privacy extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ScrollView>
              <View style={styles.header}>
                <View style={{width:'20%',}}>
                    <Ionicons name='arrow-back-outline' style={{margin:20}} size={40} color='white'/>
                </View>
                <View style={{width:'60%',}}>
                    <Image
                        source={require("../assets/logo-2W.png")}
                        resizeMode="contain"
                        style={{width:90,height:90,alignSelf:'center'}}
                    />
                </View>
                <View style={{width:'20%',}}>
                    <Feather name='star' style={{margin:20}} size={40} color='white'/>
                </View>
            </View>
    <View style={styles.container}>
      <View gradientImage="Gradient_jED56mM.png" style={styles.rect}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/Icons.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <TouchableOpacity>
          <Icon name="cross" style={styles.icon}></Icon></TouchableOpacity>
        </View>
      </View>
      <View gradientImage="Gradient_IyBYH1i.png" style={styles.rect2}>
        <Text style={styles.tryNamePlus}>Try Name plus for free</Text>
        <Text style={styles.loremIpsum}>your first 7 days are free.</Text>
      </View>
      <View gradientImage="Gradient_SSRr9vU.png" style={styles.rect3}>
        <View gradientImage="Gradient_UFTS4yH.png" style={styles.rect4}>
          <View style={styles.loremIpsum2Row}>
            <Text style={styles.loremIpsum2}>12 months</Text>
            <ImageBackground
              source={require("../assets/images/Best-value-button.png")}
              resizeMode="contain"
              style={styles.image2}
              imageStyle={styles.image2_imageStyle}
            >
            <TouchableOpacity>
              <Text style={styles.bestValue}>Best Value</Text></TouchableOpacity>
            </ImageBackground>
          </View>
          <Text style={styles.loremIpsum5}>$99 .19 Rs 7,800 (Rs 650/mo )</Text>
        </View>
      </View>
      <View gradientImage="Gradient_hGMFmvZ.png" style={styles.rect5}>
        <View style={styles.rect6}>
          <Text style={styles.loremIpsum3}>1 month</Text>
          <Text style={styles.rs1500Mo}>Rs 1,500/mo</Text>
        </View>
      </View>
      <View gradientImage="Gradient_sADke4b.png" style={styles.rect7}>
        <Text style={styles.restorePurchase}>
          Restore Purchase - Terms &amp; Conditions
        </Text>
      </View>
      <View gradientImage="Gradient_V0KOAKN.png" style={styles.rect8}>
        <ImageBackground
          source={require("../assets/images/blue-button-bar.png")}
          resizeMode="contain"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
        <TouchableOpacity>
          <Text style={styles.loremIpsum4}>TRY FREE AND SUBSCRIBE</Text></TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
    </ScrollView>
  );
}
}
const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:90,
    backgroundColor:'#4FA9DC',
    flexDirection:'row'
},
  container: {
    flex: 1,
    top:-30
  },
  rect: {
    width: 375,
    height: 212,
    flexDirection: "row",
    marginTop: 36,
    flex:1
  },
  image: {
    width: 317,
    height: 151,
    marginTop: 22
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    left:-20,
    top:10
  },
  imageRow: {
    height: 173,
    flexDirection: "row",
    flex: 1,
    marginRight: 3,
    marginLeft: 15,
    marginTop: 22
  },
  rect2: {
    width: 375,
    height: 95,
    marginTop: 8
  },
  tryNamePlus: {
    
    color: "rgba(103,103,103,1)",
    fontSize: 25,
    marginTop: 13,
    marginLeft: 53,
    fontWeight:"700"
  },
  loremIpsum: {
    
    color: "rgba(155,155,155,1)",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 77
  },
  rect3: {
    width: 375,
    height: 130,
    marginTop: 9,
    flex:1,
  },
  rect4: {
    width: 328,
    flex:1,
    height: 100,
    borderWidth: 5,
    borderColor: "rgba(88,177,218,1)",
    borderRadius: 13,
    marginTop: 15,
    marginLeft: 21
  },
  loremIpsum2: {
    
    color: "#121212",
    fontSize: 20,
    marginTop: 2,
    fontWeight:"700"
  },
  image2: {
    width: 76,
    height: 35,
    marginLeft: 124
  },
  image2_imageStyle: {},
  bestValue: {
    
    color: "rgba(255,255,255,1)",
    marginTop: 9,
    marginLeft: 5
  },
  loremIpsum2Row: {
    height: 35,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 16,
    marginRight: 16
  },
  loremIpsum5: {
    
    color: "#121212",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 19
  },
  rect5: {
    width: 375,
    height: 102,
    marginTop: 8,
    flex:1,
    marginLeft: -2
  },
  rect6: {
    width: 331,
    height: 79,
    backgroundColor: "rgba(210,210,210,1)",
    borderRadius: 9,
    marginTop: 9,
    marginLeft: 24
  },
  loremIpsum3: {
    
    color: "#121212",
    fontSize: 18,
    marginTop: 8,
    marginLeft: 22,
    fontWeight:"700"
  },
  rs1500Mo: {
    
    color: "rgba(65,62,62,1)",
    fontSize: 18,
    marginTop: 18,
    marginLeft: 22
  },
  rect7: {
    width: 377,
    height: 43,
    marginTop: 4,
    flex:1,
    marginLeft: -2
  },
  restorePurchase: {
    
    color: "#121212",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 31
  },
  rect8: {
    width: 377,
    height: 78,
    marginTop: 4,
    flex:1,
    marginLeft: -2
  },
  image3: {
    width: 305,
    height: 59,
    marginTop: 9,
    marginLeft: 31
  },
  image3_imageStyle: {},
  loremIpsum4: {
    
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 18,
    marginLeft: 41,
    fontWeight:"700"
  }
});
export default Privacy;