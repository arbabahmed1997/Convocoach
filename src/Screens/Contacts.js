import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Text,FlatList,PermissionsAndroid } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Contacts from 'react-native-contacts';
import { TouchableOpacity } from 'react-native-gesture-handler';
class Contact extends Component {
  state = { 
      Data:[
          {Name:'Muhammad Umar Hayat',number:'03000000000'},{Name:'Syed Nofile',number:'03000000000'},{Name:'Khizar',number:'03000000000'},{Name:'Usama',number:'03000000000'}
          ,{Name:'Hamza',number:'03000000000'},{Name:'Mubeen',number:'03000000000'},{Name:'Haris',number:'03000000000'},{Name:'Arsalan',number:'03000000000'}
      ],
      contactList:[],
    }
    componentDidMount(){
      console.log("Enter Componnent did mount ")
      if (Platform.OS === "android") {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
          title: "Contacts",
          message: "This app would like to view your contacts."
        }).then(() => {
          this.loadContacts();
        });
      } else {
        this.loadContacts();
      }
    }
loadContacts = () => {
  console.log("Enter")
  Contacts.getAll((err, contacts) => {
  contacts.sort((a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase());
  console.log('contacts -> ', contacts);
  if (err === "denied") {
      alert("Permission to access contacts was denied");
      console.warn("Permission to access contacts was denied");
    } else {
      this.setState({contactList:contacts})
      console.log('contacts', contacts);
    }
  });
}
renderRow = ({ item }) => {
    return (
        <ScrollView>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("ContactCall",
            {Phone:item.phoneNumbers,Name:item.displayName})
          }>
            <View style={styles.rect}>
            <View style={styles.rect2}>
              <View style={styles.imageRow}>
                <Image
                  source={require("../assets/images/User-icon.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <View style={styles.nameColumn}>
                <Text style={styles.name}>{item.displayName}</Text>
                  <Text style={styles.number}>{item.phoneNumbers.number}</Text>
                  {console.log("item.phoneNumbers.number",item.phoneNumbers)}
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        </ScrollView>
    )
}
    render() { 
      console.log("Contact list",this.state.contactList)
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
            {/* <TouchableOpacity onPress={this.loadContacts}>
              <Text>Get text</Text>
            </TouchableOpacity> */}
            <View style={styles.container}>
            <Text style={{fontSize:20,textAlign:'center',marginTop:15}}>Your Contact List is:</Text>
              <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.contactList}
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
export default Contact;