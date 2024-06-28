
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
import VendorDetailScreen from '../screen/services/VendorDetailScreen';
import VendorProfile from '../screen/home_module/VendorProfile';
import ProfileScreen from '../screen/bottomtab_navigation/ProfileScreen';
import PaymentSuccessfullyScreen from '../screen/authentication_module/PaymentSuccessfullyScreen';
import SuggestionScreen from '../screen/authentication_module/SuggestionScreen';
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
        name="Vendor Details" 
        component={VendorDetailScreen}
         />
        <Stack.Screen
          name='All Services'
          component={CategoryScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='VendorProfile'
          component={VendorProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name='PaymentSuccessfullyScreen'
          component={PaymentSuccessfullyScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name='SuggestionScreen'
          component={SuggestionScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </FavoriteProvider>
  );
}

export default AppNavigation;

