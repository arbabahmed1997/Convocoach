import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Modal, Text,FlatList } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { TextInput } from 'react-native-gesture-handler';
import Communications from 'react-native-communications';
class CallsLog extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Data:[
                {Name:'Muhammad Umar Hayat',number:'0300 0000 000',Icon:'phone-outgoing'},{Name:'Syed Nofile',number:'0300 0000 000',Icon:'phone-incoming'},{Name:'Khizar',number:'0300 0000 000',Icon:'phone-outgoing'},{Name:'Usama',number:'0300 0000 000',Icon:'phone-incoming'}
                ,{Name:'Hamza',number:'0300 0000 000',Icon:'phone-outgoing'},{Name:'Mubeen',number:'0300 0000 000',Icon:'phone-incoming'},{Name:'Haris',number:'0300 0000 000',Icon:'phone-incoming'},{Name:'Arsalan',number:'0300 0000 000',Icon:'phone-outgoing'}
            ],
            modeltextfeildnotfill:false,
            DailNumber:''
         }
    }
onChangeText = (key, value) => {
    this.setState({[key]: value});
};
renderRow = ({ item }) => {
    return (
        <ScrollView>
            <View style={styles.Container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Recording")}>
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
                            <Text style={styles.Name}>{item.Name}</Text>
                            <Text style={styles.loremIpsum}>12:17AM       3.1 kb</Text>
                            <Text style={styles.loremIpsum}>{item.number}</Text>
                            <FeatherIcon
                                name={item.Icon}
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
        </ScrollView>
    )
}
render() { 
    return ( 
        <View>
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
            <View>
                <Text style={{fontSize:30,textAlign:'center',margin:20,color:'#4FA9DC',fontWeight:'bold'}}>
                    Your calls log is 
                </Text>
                <View>
                <View style={styles.buttonPlace}>
                    <TouchableOpacity style={styles.AddcallButton}
                        onPress={()=>this.setState({modeltextfeildnotfill:true})}
                    >
                        <Text style={{textAlign:'center',marginTop:5,fontSize:40,color:'white'}}>+</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.Data}
                    renderItem={this.renderRow}
                    keyExtractor={(item) => item.id}
                />
                </View>
            </View>
        </ScrollView>
        <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modeltextfeildnotfill}
        >
            <View style={{width:'100%',height:300,backgroundColor:'#4FA9DC',marginTop:100}}>
            <TouchableOpacity style={{alignSelf:'flex-end',marginRight:20,marginTop:20}}
                onPress={() => {
                this.setState({modeltextfeildnotfill:false})
                }}
            >
                <Entypo name='squared-cross' size={30} color='white'/>
            </TouchableOpacity>
            <TextInput placeholder='Enter Number Here' 
            onChangeText={(val) => {
                this.onChangeText('DailNumber', val.trim());
            }}
            keyboardType = 'numeric' style={styles.NumberFeild}/>
            <TouchableOpacity 
                style={{width:'50%',height:40,backgroundColor:'#2BD642',borderRadius:20,flexDirection:'row',marginTop:20,marginLeft:'25%'}}
                // onPress={()=>this.callFriendTapped(item.number)}
                onPress = {() => Communications.phonecall(this.state.DailNumber, true)}
                >
                    <Feather name='phone-call' style={{marginLeft:10,marginTop:7}} size={30} color='white'/>
                    <Text style={{color:'white',margin:8,fontSize:17}}>Make a call</Text>
            </TouchableOpacity>
            </View>
        </Modal>
        </View>
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
    AddcallButton:{
        width:70,
        height:70,
        backgroundColor:'#75B73A',
        borderRadius:150
    },
    buttonPlace:{
        alignSelf:'flex-end',
        marginRight:40
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
    NumberFeild:{
        textAlign:'center',
        fontSize:30,
        backgroundColor:'lightgray'
    }
  });
  
export default CallsLog;