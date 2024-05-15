
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import ForgotPassword from '../screen/authentication_module/ForgotPassword';
<<<<<<< HEAD
import CustomDrawer from '../app_navigation/CustomDrawer'
const Drawer = createDrawerNavigator();
=======

>>>>>>> 99cf6096739006e5dffbc392c28a81d8166e274c

const App_Drawer_Navigation = () => {

  const Drawer = createDrawerNavigator();
  
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,

        },

        headerTitle: ''
      }}

    >
      <Drawer.Screen name="Home" component={BottomTabNavigation} />
      <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
    </Drawer.Navigator>
  );
}

export default App_Drawer_Navigation;

