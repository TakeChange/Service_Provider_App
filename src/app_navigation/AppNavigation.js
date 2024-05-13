
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App_Drawer_Navigation from '../app_navigation/App_Drawer_Navigation';
import SignInScreen from '../screen/authentication_module/SignInScreen';
import SignUpScreen from '../screen/authentication_module/SignUpScreen'
<<<<<<< HEAD
import ViewService from '../screen/services/ViewService';
=======
import ViewService from './../screen/services/ViewService';
import SplashScreen from '../screen/authentication_module/SplashScreen';
import LoginOption from '../screen/authentication_module/LoginOption';
>>>>>>> c0c89d7d3f3c5846aabeb8535c11bd3b504d7469
const AppNavigation = () => {
  
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
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
