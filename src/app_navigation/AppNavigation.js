
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App_Drawer_Navigation from '../app_navigation/App_Drawer_Navigation';
import SignInScreen from '../screen/authentication_module/SignInScreen';
import SignUpScreen from '../screen/authentication_module/SignUpScreen'
import ViewService from './../screen/services/ViewService';
import SplashScreen from '../screen/authentication_module/SplashScreen';
import LoginOption from '../screen/authentication_module/LoginOption';
const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SplashScreen'
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='SignInScreen'
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUpScreen'
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='LoginOption'
        component={LoginOption}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='App_Drawer_Navigation'
        component={App_Drawer_Navigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ViewService'
        component={ViewService}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;
