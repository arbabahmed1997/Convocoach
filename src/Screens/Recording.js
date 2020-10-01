import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, ImageBackground, Text,FlatList } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

class Recording extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Data:[
                {Name:'Muhammad Umar Hayat',number:'0300 0000 000',Icon:'phone-outgoing'},
            ]
         }
    }
// renderRow = ({ item }) => {
//     return (
//         <ScrollView>
//             <View style={styles.Container}>
//             <TouchableOpacity>
//                 <View style={styles.subcontainer}>
//                     <View style={styles.leftContainer}>
//                         <Image
//                             source={require("../assets/images/Share-2.png")}
//                             resizeMode="contain"
//                             style={styles.image2}
//                         />
//                     </View>
//                     <View style={styles.MainContainer}>
//                         <View style={{flexDirection:'column',width:'100%',height:140}}>
//                             <Text style={styles.Name}>{item.Name}</Text>
//                             <Text style={styles.loremIpsum}>12:17AM       3.1 kb</Text>
//                             <Text style={styles.loremIpsum}>{item.number}</Text>
//                             <FeatherIcon
//                                 name={item.Icon}
//                                 color='red'
//                                 style={{marginLeft:20,marginTop:10}}
//                                 size={27}
//                             />
//                         </View>
//                     </View>
//                     <View style={styles.RightContainer}>
//                         <TouchableOpacity>
//                             <FeatherIcon name="more-vertical" style={{marginTop:20}} color='white' size={40}/>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </TouchableOpacity>
//             </View>
//         </ScrollView>
//     )
// }
render() { 
    return ( 
        <ScrollView>
            <View style={styles.header}>
                <View style={{width:'20%',}}>
                    <Ionicons name='arrow-back-outline' style={{margin:20}} size={40} color='white'
                        onPress={()=>this.props.navigation.goBack()}
                    />
                </View>
                <View style={{width:'60%',}}>
                    <Image
                        source={require("../assets/icon.png")}
                        resizeMode="contain"
                        style={{width:90,height:90,alignSelf:'center'}}
                    />
                </View>
                <View style={{width:'20%',}}>
                    <Feather name='star' style={{margin:20}} size={40} color='white'/>
                </View>
            </View>
            <View>
                <Text style={{fontSize:30,textAlign:'center',margin:20,color:'#4FA9DC',fontWeight:'bold'}}>
                    Recording is
                </Text>
                <View style={styles.Container}>
            <TouchableOpacity>
                <View style={styles.subcontainer}>
                    <View style={styles.leftContainer}>
                        <Image
                            source={require("../assets/images/Share-2.png")}
                            resizeMode="contain"
                            style={styles.image2}
                        />
                    </View>
                    <View style={styles.MainContainer}>
                        <View style={{flexDirection:'column',width:'100%',height:140}}>
                            <Text style={styles.Name}>Muhammad Umar Hayat</Text>
                            <Text style={styles.loremIpsum}>12:17AM       3.1 kb</Text>
                            <Text style={styles.loremIpsum}>0300 0000000</Text>
                            <FeatherIcon
                                name='phone-outgoing'
                                color='red'
                                style={{marginLeft:20,marginTop:10}}
                                size={27}
                            />
                        </View>
                    </View>
                    <View style={styles.RightContainer}>
                        <TouchableOpacity>
                            <FeatherIcon name="more-vertical" style={{marginTop:20}} color='white' size={40}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
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
    MainContainer: {
      width: '90%',
      marginLeft:'3%',
      height: 150,
      marginTop: 5,
      flex: 1,
    },
    Container: {
      width: '93%',
      height: 140,
      marginTop: 20,
      marginLeft: 12,
      backgroundColor:'#4FA9DC'
    },
    subcontainer:{
        flexDirection:'row'
    },
    leftContainer:{
        width:'20%',
        height: 140,
    },
    MainContainer:{
        width:'65%',
        height: 140,
    },
    RightContainer:{
        width:'15%',
        height: 140,
    },
    image2: {
      width: 60,
      height: 60,
      marginLeft:10,
      marginTop:20
    },
    Name: {
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      marginLeft:10,marginTop:10
    },
    loremIpsum: {
      color: "rgba(255,255,255,1)",
      fontSize: 16,
      marginTop: 6,
      marginLeft: 8
    },
  });
  
export default Recording;