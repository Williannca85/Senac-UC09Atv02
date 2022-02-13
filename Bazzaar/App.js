import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppStack from './src/navigation/AppStack';

const Stack = createStackNavigator();

const App = () =>{

     return   (

      <NavigationContainer>
          {/* <AuthStack/> */}
          <AppStack />
      </NavigationContainer>
 ); 
}

    export default App;
    
    
    