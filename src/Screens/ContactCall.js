import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Text,FlatList,PermissionsAndroid,Linking, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Contacts from 'react-native-contacts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Communications from 'react-native-communications';
import CallDetectorManager from 'react-native-call-detection';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
const audioRecorderPlayer = new AudioRecorderPlayer();
class ContactCall extends Component {
  state = { 
      Data:[
          {Name:'Muhammad Umar Hayat',number:'03000000000'},{Name:'Syed Nofile',number:'03000000000'},{Name:'Khizar',number:'03000000000'},{Name:'Usama',number:'03000000000'}
          ,{Name:'Hamza',number:'03000000000'},{Name:'Mubeen',number:'03000000000'},{Name:'Haris',number:'03000000000'},{Name:'Arsalan',number:'03000000000'}
      ],
      callDetector:null,
      callStates:[],
      isStart:false,
      flatListItems:[],
      SendPhonenumber:'',
      recordSecs:0,
      recordTime:0
    }
callFriendTapped = (number) => {
    Alert.alert("Number",number);
    this.startStopListener()
    Linking.openURL('tel:number').catch(err => {
        console.log(err);
    });
    };
startStopListener = (number) => {
  console.log("Umar Hayat")
  Communications.phonecall(number , true)
      if (this.state.isStart) {
        console.log('Stop');
        this.state.callDetector && this.state.callDetector.dispose();
      } else {
        console.log('Start');
        this.state.callDetector = new CallDetectorManager(
          (event, number) => {
            console.log('event -> ', event + (number ? ' - ' + number : ''));
            var updatedCallStates = this.state.callStates;
            updatedCallStates.push(event + (number ? ' - ' + number : ''));
            this.setState({FlatListItems:updatedCallStates})
            this.setState({CallStates:updatedCallStates})
            // setFlatListItems(updatedCallStates);
            // setCallStates(updatedCallStates);
            // For iOS event will be either "Connected",
            // "Disconnected","Dialing" and "Incoming"
  
            // For Android event will be either "Offhook",
            // "Disconnected", "Incoming" or "Missed"
            // phoneNumber should store caller/called number
  
            if (event === 'Disconnected') {
              console.log("Cak end");
              this.onStopRecord()
              // Do something call got disconnected
            } else if (event === 'Connected') {
              console.log("Umar");
              // Do something call got connected
              // This clause will only be executed for iOS
            } else if (event === 'Incoming') {
              console.log("Umar")
              // Do something call got incoming
            } else if (event === 'Dialing') {
              console.log("Umar")
              // Do something call got dialing
              // This clause will only be executed for iOS
            } else if (event === 'Offhook') {
              console.log("Call Start")
              this.onStartRecord()
              //Device call state: Off-hook.
              // At least one call exists that is dialing,
              // active, or on hold,
              // and no calls are ringing or waiting.
              // This clause will only be executed for Android
            } else if (event === 'Missed') {
              console.log("Umar")
              // Do something call got missed
              // This clause will only be executed for Android
            }
          },
          true, // True if you want to read the phone number of the incoming call [ANDROID]
          () => {
            console.log('Permission Denied by User');
          }, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default: console.error
          {
            title: 'Phone State Permission',
            message:
              'This app needs access to your phone state in order to react and/or to adapt to incoming calls.',
          }
        );
      }
      // setIsStart(!isStart);
      this.setState({isStart:this.state.isStart})
    };
onStartRecord = async () => {
  console.log("Enter Start function")
  const result = await this.audioRecorderPlayer.startRecorder();
  this.audioRecorderPlayer.addRecordBackListener((e) => {
    this.setState({
      recordSecs: e.current_position,
      recordTime: this.audioRecorderPlayer.mmssss(
        Math.floor(e.current_position),
      ),
    });
    return;
  });
  console.log(result);
};
onStopRecord = async () => {
  console.log("Enter Close record Function")
  const result = await this.audioRecorderPlayer.stopRecorder();
  console.log("uuuuuuu")
  this.audioRecorderPlayer.removeRecordBackListener();
  this.setState({
    recordSecs: 0,
  });
  console.log(result);
};
onStartPlay = async () => {
  console.log('onStartPlay');
  const msg = await this.audioRecorderPlayer.startPlayer();
  console.log(msg);
  this.audioRecorderPlayer.addPlayBackListener((e) => {
    if (e.current_position === e.duration) {
      console.log('finished');
      this.audioRecorderPlayer.stopPlayer();
    }
    this.setState({
      currentPositionSec: e.current_position,
      currentDurationSec: e.duration,
      playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
      duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
    });
    return;
  });
};
onPausePlay = async () => {
  await this.audioRecorderPlayer.pausePlayer();
};
onStopPlay = async () => {
  console.log('onStopPlay');
  this.audioRecorderPlayer.stopPlayer();
  this.audioRecorderPlayer.removePlayBackListener();
};
renderRow = ({ item }) => {
    return (
        <ScrollView>
            <View style={styles.rect}>
            <View style={styles.rect2}>
              <View style={styles.imageRow}>
                <Image
                  source={require("../assets/images/User-icon.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <View style={styles.nameColumn}>
                <Text style={styles.name}>{item.number}</Text>
                <TouchableOpacity 
                style={{width:'70%',height:40,backgroundColor:'#2BD642',borderRadius:20,flexDirection:'row'}}
                // onPress={()=>this.callFriendTapped(item.number)}
                //onPress = {() => Communications.phonecall(item.number, true)}
                
                onPress = {()=>this.startStopListener(item.number)}
                >
                    <Feather name='phone-call' style={{marginLeft:10,marginTop:7}} size={30} color='white'/>
                    <Text style={{color:'white',margin:8,fontSize:17}}>Make a call</Text>
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
    )
}
    render() { 
        const {Phone} = this.props.route.params; 
        console.log("Contact list in Contact call",Phone)
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
                        source={require("../assets/logo-2W.png")}
                        resizeMode="contain"
                        style={{width:90,height:90,alignSelf:'center'}}
                    />
                </View>
                <View style={{width:'20%',}}>
                    <Feather name='star' style={{margin:20}} size={40} color='white'/>
                </View>
            </View>
            <TouchableOpacity style={{margin:20,alignSelf:'center'}} onPress={this.onStartPlay}>
              <Text style={{fontSize:20}}>Play Recording</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:20,alignSelf:'center'}} onPress={this.onPausePlay}>
              <Text style={{fontSize:20}}>Stop Recording</Text>
            </TouchableOpacity>
            <View style={styles.container}>
            <Text style={{fontSize:20,textAlign:'center',marginTop:15}}>Your Contact List is:</Text>
              <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={Phone}
                renderItem={this.renderRow}
                keyExtractor={(item) => item.id}
              />
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
    flexDirection:'row',
},
    container: {
    flex: 1,
    },
    rect: {
    width: '100%',
    height:90,
    marginTop: 10,
    marginLeft:'2%'
    },
    rect2: {
    width: '90%',
    marginLeft:'5%',
    height: 120,
    backgroundColor: "rgba(57,207,239,1)",
    borderRadius: 19,
    marginTop: 9,
    marginLeft: 9
    },
    image: {
    width: 65,
    height: 65,
    },
    name: {
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginLeft: 1,
    top:-5,
    fontWeight:"700"
    },
    number: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontWeight:"700",
    },
    nameColumn: {
    width: '72%',
    marginLeft: 19,
    },
    imageRow: {
    height: 70,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    },
  })
export default ContactCall;