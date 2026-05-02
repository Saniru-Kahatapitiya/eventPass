import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './src/screens/LandingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import UserPortal from './src/screens/UserPortal';
import AdminPortal from './src/screens/AdminPortal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
        <Stack.Screen name="UserPortal" component={UserPortal} options={{ title: 'EventPass - User Portal' }} />
        <Stack.Screen name="AdminPortal" component={AdminPortal} options={{ title: 'EventPass - Admin Portal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
