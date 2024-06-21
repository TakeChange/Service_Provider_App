
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App_Drawer_Navigation from '../app_navigation/App_Drawer_Navigation';
import WelcomeScreen from '../screen/authentication_module/WelcomeScreen'
import OptionScreen from '../screen/authentication_module/OptionScreen'
import SignUpScreen from '../screen/authentication_module/SignUpScreen'
import SignInScreen from '../screen/authentication_module/SignInScreen'
import OtpVerifyScreen from '../screen/authentication_module/OtpVerifyScreen';
import ViewService from './../screen/services/ViewService';
import SplashScreen from '../screen/authentication_module/SplashScreen';
import LoginOption from '../screen/authentication_module/LoginOption';
import CategoryScreen from '../screen/bottomtab_navigation/CategoryScreen';
import { FavoriteProvider } from '../screen/context/FavoriteContext';
const AppNavigation = () => {

  const Stack = createNativeStackNavigator();

  return (
    <FavoriteProvider>
      <Stack.Navigator>
        <Stack.Screen
          name='SplashScreen'
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='WelcomeScreen'
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='OptionScreen'
          component={OptionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='LoginOption'
          component={LoginOption}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SignInScreen'
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='OtpVerifyScreen'
          component={OtpVerifyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SignUpScreen'
          component={SignUpScreen}
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
        <Stack.Screen
          name='CategoryScreen'
          component={CategoryScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </FavoriteProvider>
  );
}

export default AppNavigation;

