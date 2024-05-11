
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import ForgotPassword from '../screen/authentication_module/ForgotPassword';
<<<<<<< HEAD

=======
import CustomDrawer from './CustomDrawer';
const Drawer = createDrawerNavigator();
>>>>>>> c0c89d7d3f3c5846aabeb8535c11bd3b504d7469

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

