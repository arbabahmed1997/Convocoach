// import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import DrawerContent from '../Screen/Drawer';

//         //Screen
// import Manu from '../Screen/manu';
// import CreateSticker from '../Screen/createSticker';
// import MangeGroup from '../Screen/manageGroup';
// import SelectImage from '../Screen/selectImage';
// import Splash from '../Screen/splash';
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// class StackNavigation extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {  }
//     }
//     render() { 
//       return ( 
//         <Stack.Navigator initialRouteName="Splash"
//         screenOptions={{
//           headerShown: false
//         }}
//         >
//         <Stack.Screen name="Manu" component={Manu} />
//         <Stack.Screen name="CreateSticker" component={CreateSticker} />
//         <Stack.Screen name="MangeGroup" component={MangeGroup} />
//         <Stack.Screen name="SelectImage" component={SelectImage} />
//         <Stack.Screen name="Splash" component={Splash} />
//     </Stack.Navigator>
//        );
//     }
//   }
// class NavigationFile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return ( 
//         <NavigationContainer>
//             <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
//                 <Drawer.Screen name="StackNavigation" component={StackNavigation}/>
//                 <Drawer.Screen name="CreateSticker" component={CreateSticker}/>
//                 <Drawer.Screen name="MangeGroup" component={MangeGroup}/>
//             </Drawer.Navigator>
//         </NavigationContainer>
//      );
//   }
// }
 
// export default NavigationFile;

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import GetStarted from '../Screens/GetStarted';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Contact from '../Screens/Contacts';
import TabDashboard from '../Screens/Tab'
import Sumary from '../Screens/Summary';
import Privacy from '../Screens/Privacy';
import CallLogs from '../Screens/CallsLog';
import ContactLog from '../Screens/ContactCall';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <NavigationContainer>
                <Stack.Navigator initialRouteName="GetStarted"
                    screenOptions={{
                    headerShown: false
                    }}
                >
                <Stack.Screen name="GetStarted" component={GetStarted}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="TabDashboard" component={TabDashboard}/>
                <Stack.Screen name="Contact" component={Contact}/>
                <Stack.Screen name="Sumary" component={Sumary}/>
                <Stack.Screen name="Privacy" component={Privacy}/>
                <Stack.Screen name="CallLogs" component={CallLogs} />
                <Stack.Screen name="ContactLog" component={ContactLog} />
                {/* <Stack.Screen name="CallLogs" component={CallLogs} /> */}
                </Stack.Navigator>
            </NavigationContainer>
         );
    }
}
 
export default Navigation;