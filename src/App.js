// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import MyStack from './routes/stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <MyStack/>
    </NavigationContainer>
  );
}

export default App;