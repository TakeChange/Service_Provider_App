
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import ForgotPassword from '../screen/authentication_module/ForgotPassword';
import CustomDrawer from './CustomDrawer'
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

