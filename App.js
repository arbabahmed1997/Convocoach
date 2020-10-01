import React, { Component } from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/Navigation/navigation';
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <View style={{flex:1}}>
        <Navigation/>
      </View>
     );
  }
}
 
export default App;