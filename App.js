import React, { Component } from 'react';
import {View,Text} from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/Navigation/navigation';
// import BackgroundTask from 'react-native-background-task';
// BackgroundTask.define(() => {
//   console.log('Hello from a background task')
//   BackgroundTask.finish()
// })
class App extends Component {
  state = {  }
  // componentDidMount() {
  //   BackgroundTask.schedule({period: 100,})
  // }
  render() { 
    return ( 
      <View style={{flex:1}}>
        <Navigation/>
        {/* <Text>jhiui</Text> */}
      </View>
     );
  }
}
 
export default App;