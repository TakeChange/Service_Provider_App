
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
<<<<<<< HEAD
import ForgotPassword from '../screen/ForgotPassword';
import CustomDrawer from '../app_navigation/CustomDrawer'
=======
import ForgotPassword from '../screen/authentication_module/ForgotPassword';
>>>>>>> 5895a72f27c09ca9b34a6e7e1254476770a8ef62
const Drawer = createDrawerNavigator();

const App_Drawer_Navigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
          headerTintColor: 'pink',
        },

        headerTitle: ''
      }}
      drawerContent={props => <CustomDrawer {...props} />}>

      <Drawer.Screen name="Home" component={BottomTabNavigation} />
      <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
    </Drawer.Navigator>
  );
}

export default App_Drawer_Navigation;

