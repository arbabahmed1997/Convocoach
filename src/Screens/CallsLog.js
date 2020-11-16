import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, PermissionsAndroid, Modal, Text, FlatList } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { TextInput } from 'react-native-gesture-handler';
import CallDetectorManager from 'react-native-call-detection';
import Communications from 'react-native-communications';
//import { observer } from 'mobx-react';
import store from '../store';
import AsyncStorage from '@react-native-community/async-storage';



import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
    AudioEncoderAndroidType,
    AudioSet,
    AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';

//@observer
class CallsLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [
                { Name: 'Muhammad Umar Hayat', number: '0300 0000 000', Icon: 'phone-outgoing' }, { Name: 'Syed Nofile', number: '0300 0000 000', Icon: 'phone-incoming' }, { Name: 'Khizar', number: '0300 0000 000', Icon: 'phone-outgoing' }, { Name: 'Usama', number: '0300 0000 000', Icon: 'phone-incoming' }
                , { Name: 'Hamza', number: '0300 0000 000', Icon: 'phone-outgoing' }, { Name: 'Mubeen', number: '0300 0000 000', Icon: 'phone-incoming' }, { Name: 'Haris', number: '0300 0000 000', Icon: 'phone-incoming' }, { Name: 'Arsalan', number: '0300 0000 000', Icon: 'phone-outgoing' }
            ],
            modeltextfeildnotfill: false,
            DailNumber: '',
            callDetector: null,
            callStates: [],
            isStart: false,
            flatListItems: [],
            SendPhonenumber: '',
            recordSecs: 0,
            //recordTime:0,
            isLoggingIn: false,
            recordTime: '00:00:00',
            currentPositionSec: 0,
            currentDurationSec: 0,
            playTime: '00:00:00',
            duration: '00:00:00',
            callLogs: []
        }
        this.audioRecorderPlayer = new AudioRecorderPlayer();
        this.audioRecorderPlayer.setSubscriptionDuration(0.09); // optional. Default is 0.1
    }

    async componentDidMount() {
        await AsyncStorage.getItem('callLogs')
            .then((contacts) => {
                //console.log('logsss----', contacts)
                const logs = JSON.parse(contacts)
                this.setState({ callLogs: logs })
            });
    }

    onChangeText = (key, value) => {
        this.setState({ [key]: value });
    };
    callFriendTapped = () => {
        // Alert.alert("Number",number);
        this.startStopListener()
        Linking.openURL('tel:this.state.DailNumber').catch(err => {
            console.log(err);
        });
    };
    startStopListener = () => {
        Communications.phonecall(this.state.DailNumber, true)
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
                    this.setState({ FlatListItems: updatedCallStates })
                    this.setState({ CallStates: updatedCallStates })
                    if (event === 'Disconnected') {
                        console.log("Cak end");
                        this.onStopRecord();
                        console.log("Cak end 2");

                        // Do something call got disconnected
                    } else if (event === 'Connected') {
                        console.log("Contected");
                        // Do something call got connected
                        // This clause will only be executed for iOS
                    } else if (event === 'Incoming') {
                        console.log("Incoming Call")
                        // Do something call got incoming
                    } else if (event === 'Dialing') {
                        console.log("Dailing Call")
                        // Do something call got dialing
                        // This clause will only be executed for iOS
                    } else if (event === 'Offhook') {
                        console.log("Call Start")
                        this.onStartRecord();
                        console.log("Call Start 2")

                        //Device call state: Off-hook.
                        // At least one call exists that is dialing,
                        // active, or on hold,
                        // and no calls are ringing or waiting.
                        // This clause will only be executed for Android
                    } else if (event === 'Missed') {
                        console.log("Missed a Call")
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
        this.setState({ isStart: this.state.isStart })
    };
    onStartRecord = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Permissions for write access',
                        message: 'Give permission to your storage to write a file',
                        buttonPositive: 'ok',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the storage');
                } else {
                    console.log('permission denied');
                    return;
                }
            } catch (err) {
                console.warn(err);
                return;
            }
        }
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                    {
                        title: 'Permissions for write access',
                        message: 'Give permission to your storage to write a file',
                        buttonPositive: 'ok',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the camera');
                } else {
                    console.log('permission denied');
                    return;
                }
            } catch (err) {
                console.warn(err);
                return;
            }
        }
        const path = 'hello.m4a';
        const audioSet = {
            AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
            AudioSourceAndroid: AudioSourceAndroidType.MIC,
            AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
            AVNumberOfChannelsKeyIOS: 2,
            AVFormatIDKeyIOS: AVEncodingOption.aac,
        };
        console.log('audioSet', audioSet);
        const uri = await this.audioRecorderPlayer.startRecorder();
        this.audioRecorderPlayer.addRecordBackListener((e) => {
            this.setState({
                recordSecs: e.current_position,
                recordTime: this.audioRecorderPlayer.mmssss(
                    Math.floor(e.current_position),
                ),
            });
        });
        console.log(`uri: ${uri}`);
    };
    onStopRecord = async () => {
        const result = await this.audioRecorderPlayer.stopRecorder();
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
    renderRow = ({ item }) => {
        return (
            <ScrollView>
                <View style={styles.Container}>
                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("ContactCall",
                            { Phone: item.number, Name: item.name, isCallLog: true })
                    }>
                        <View style={styles.subcontainer}>
                            <View style={styles.leftContainer}>
                                <Image
                                    source={require("../assets/images/Share-2.png")}
                                    resizeMode="contain"
                                    style={styles.image2}
                                />
                            </View>
                            <View style={styles.MainContainer}>
                                <View style={{ flexDirection: 'column', width: '100%', height: 140 }}>
                                    <Text style={styles.Name}>{item.name}</Text>
                                    <Text style={styles.loremIpsum}>{item.time}</Text>
                                    <Text style={styles.loremIpsum}>{item.number}</Text>
                                    <FeatherIcon
                                        name={'phone-outgoing'}
                                        color='red'
                                        style={{ marginLeft: 20, marginTop: 10 }}
                                        size={27}
                                    />
                                </View>
                            </View>
                            <View style={styles.RightContainer}>
                                <TouchableOpacity>
                                    <FeatherIcon name="more-vertical" style={{ marginTop: 20 }} color='white' size={40} />
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
                        <View style={{ width: '20%', }}>
                            <Ionicons name='arrow-back-outline' style={{ margin: 20 }} size={40} color='white' />
                        </View>
                        <View style={{ width: '60%', }}>
                            <Image
                                source={require("../assets/logo-2W.png")}
                                resizeMode="contain"
                                style={{ width: 90, height: 90, alignSelf: 'center' }}
                            />
                        </View>
                        <View style={{ width: '20%', }}>
                            <Feather name='star' style={{ margin: 20 }} size={40} color='white' />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 30, textAlign: 'center', margin: 20, color: '#4FA9DC', fontWeight: 'bold' }}>
                            Your calls log is
                </Text>
                        <View>
                            <View style={styles.buttonPlace}>
                                <TouchableOpacity style={styles.AddcallButton}
                                    onPress={() => this.setState({ modeltextfeildnotfill: true })}
                                >
                                    <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 40, color: 'white' }}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.callLogs}
                                renderItem={this.renderRow}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    </View>
                </ScrollView>
                <Modal
                    animationType="slide"
                    //transparent={true}
                    visible={this.state.modeltextfeildnotfill}
                >
                    <View style={{ width: '100%', height: 300, backgroundColor: '#4FA9DC', marginTop: 100 }}>
                        <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 20 }}
                            onPress={() => {
                                this.setState({ modeltextfeildnotfill: false })
                            }}
                        >
                            <Entypo name='squared-cross' size={30} color='white' />
                        </TouchableOpacity>
                        <TextInput placeholder='Enter Number Here'
                            onChangeText={(val) => {
                                this.onChangeText('DailNumber', val.trim());
                            }}
                            keyboardType='numeric' style={styles.NumberFeild} />
                        <TouchableOpacity
                            style={{ width: '50%', height: 40, backgroundColor: '#2BD642', borderRadius: 20, flexDirection: 'row', marginTop: 20, marginLeft: '25%' }}
                            // onPress={()=>this.callFriendTapped(item.number)}
                            // onPress = {() => Communications.phonecall(this.state.DailNumber, true)}
                            onPress={this.startStopListener}
                        >
                            <Feather name='phone-call' style={{ marginLeft: 10, marginTop: 7 }} size={30} color='white' />
                            <Text style={{ color: 'white', margin: 8, fontSize: 17 }}>Make a call</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#4FA9DC',
        flexDirection: 'row'
    },
    MainContainer: {
        width: '90%',
        marginLeft: '3%',
        height: 150,
        marginTop: 5,
        flex: 1,
    },
    Container: {
        width: '93%',
        height: 140,
        marginTop: 20,
        marginLeft: 12,
        backgroundColor: '#4FA9DC'
    },
    subcontainer: {
        flexDirection: 'row'
    },
    leftContainer: {
        width: '20%',
        height: 140,
    },
    MainContainer: {
        width: '65%',
        height: 140,
    },
    RightContainer: {
        width: '15%',
        height: 140,
    },
    image2: {
        width: 60,
        height: 60,
        marginLeft: 10,
        marginTop: 20
    },
    Name: {
        color: "rgba(255,255,255,1)",
        fontSize: 20,
        marginLeft: 10, marginTop: 10
    },
    loremIpsum: {
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        marginTop: 6,
        marginLeft: 8
    },
    AddcallButton: {
        width: 70,
        height: 70,
        backgroundColor: '#75B73A',
        borderRadius: 150
    },
    buttonPlace: {
        alignSelf: 'flex-end',
        marginRight: 40
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    NumberFeild: {
        textAlign: 'center',
        fontSize: 30,
        backgroundColor: 'lightgray'
    }
});

export default CallsLog;