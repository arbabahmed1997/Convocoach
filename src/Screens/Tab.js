import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import ContactPage from './Contacts';
import ContactCall from './ContactCall';

        // Call Logs
import CallsLog from './CallsLog';
import Recording from './Recording';

import SummaryPage from './Summary';
import Privacy from './Privacy';


const Stack = createStackNavigator();
const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();
const Stack4 = createStackNavigator();
class Calllogs extends Component{
    render(){
      return (
        <Stack4.Navigator
        initialRouteName="CallsLog"
        screenOptions={{ gestureEnabled: false ,headerShown: false}}
        >
          <Stack4.Screen
          name="CallsLog"
          component={CallsLog}
          options={{ title: 'CallsLog' }}
          />
          <Stack4.Screen
          name="Recording"
          component={Recording}
          options={{ title: 'Recording' }}
          />
          </Stack4.Navigator>
      );
    }
    }
class Summary extends Component{
render(){
    return (
        <Stack3.Navigator
        initialRouteName="SummaryPage"
        screenOptions={{ gestureEnabled: false ,headerShown: false}}
        >
          <Stack3.Screen
          name="SummaryPage"
          component={SummaryPage}
          options={{ title: 'SummaryPage' }}
          />
          </Stack3.Navigator>
    );
}
}
class Contact extends Component{
    render(){
        return (
            <Stack2.Navigator
            initialRouteName="ContactPage"
            screenOptions={{ gestureEnabled: false ,headerShown: false}}
            >
              <Stack2.Screen
              name="ContactPage"
              component={ContactPage}
              options={{ title: 'ContactPage' }}
              />
              <Stack2.Screen
              name="ContactCall"
              component={ContactCall}
              options={{ title: 'ContactCall' }}
              />
            </Stack2.Navigator>
        );
    }
    }
class Premium extends Component{
    render(){
        return (
            <Stack1.Navigator
            initialRouteName="Privacy"
            screenOptions={{ gestureEnabled: false ,headerShown: false}}
            >
                <Stack1.Screen
                name="Privacy"
                component={Privacy}
                options={{ title: 'Privacy' }}
                />
                </Stack1.Navigator>
        );
    }
}
class Profile extends Component{
    render(){
        return (
            <Stack.Navigator
            initialRouteName="CallsLog"
            screenOptions={{ gestureEnabled: false ,headerShown: false}}
            >
            <Stack4.Screen
            name="CallsLog"
            component={CallsLog}
            options={{ title: 'CallsLog' }}
            />
            </Stack.Navigator>
        );
    }
    }
const Tab = createBottomTabNavigator();  
class TabScreen extends Component {
    state = {  }
    render() { 
        return ( 
        <Tab.Navigator
            initialRouteName="Contact"
            activeColor="green"
            inactiveColor="green"
            barStyle={{ 
            backgroundColor: '#D0D0D0',
            padding : 2        
        }}
        tabBarOptions={{
          //activeColor="green",
          activeTintColor: 'green',
        }}
      
      >
        <Tab.Screen name="Calllogs"
            component={Calllogs}
            options={{
            tabBarLabel:"Calls",
            tabBarIcon: ({ tintColor }) => (
              <Feather name="phone-call" style={styles.icon} size={25}/>
            )
            // tabBarIcon: ({focused}) => (
            //   <MaterialCommunityIcons name="home" color={'blue'} size={25} />
            // ),
          }}
        />
        <Tab.Screen name="Summary" component={Summary}
          options={{
            tabBarIcon: ({ tintColor }) => (
                <Entypo name="credit-card" style={styles.icon} size={25}/>
            )
          }}
        />
        <Tab.Screen name="Contact" component={Contact}
          options={{
            tabBarIcon: ({ tintColor }) => (
                <AntDesign name="contacts" style={styles.icon} size={25}/>
            )

          }}
      
        />
        <Tab.Screen name="Premium" component={Premium}
          options={{
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome5 name="file-contract" style={styles.icon} size={25}/>
            )

          }}
      
        />
        <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome5 name="user-alt" style={styles.icon} size={25}/>
            )

          }}
      
        />
      </Tab.Navigator>
         );
    }
}
const styles = StyleSheet.create({
    icon:{
        width:25,
        height:25
    }
});
export default TabScreen;