
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import FavouriteService from '../screen/services/FavouriteService';
import CustomDrawer from '../app_navigation/CustomDrawer'
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
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigation} />
      <Drawer.Screen name="FavouriteService" component={FavouriteService} />
    </Drawer.Navigator>
  );
}

export default App_Drawer_Navigation;

