// In App.js in a new project

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import LoginScreen from '../page/login';
import SplashScreen from '../page/splash';
import Aboutme_satu from '../page/aboutme_satu';
import Aboutme_dua from '../page/aboutme_dua';
import Aboutme_tiga from '../page/aboutme_tiga';
import Home from '../page/home';
import RegitserScreen from '../page/register';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    
      <Stack.Navigator initialRouteName=''>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Aboutme_satu" component={Aboutme_satu} options={{headerShown:false}} />
        <Stack.Screen name="Aboutme_dua" component={Aboutme_dua} options={{headerShown:false}} />
        <Stack.Screen name="Aboutme_tiga" component={Aboutme_tiga} options={{headerShown:false}} />
        <Stack.Screen name="HomeScreen" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}} />
        <Stack.Screen name="Register" component={RegitserScreen}  options={{headerShown:false}} />
      </Stack.Navigator>
  
  );
}

export default MyStack;