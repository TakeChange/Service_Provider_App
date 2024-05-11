
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App_Drawer_Navigation from './App_Drawer_Navigation';
import SignUpScreen from '../screen/authentication_module/SignUpScreen'
import ViewService from '../screen/services/ViewService';
const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name='SignUpScreen'
        component={SignUpScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name='drawer'
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
