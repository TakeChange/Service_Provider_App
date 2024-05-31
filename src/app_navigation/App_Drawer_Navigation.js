
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import FavouriteService from '../screen/services/FavouriteService';
import CustomDrawer from '../app_navigation/CustomDrawer'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
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

      <Drawer.Screen
        name="Home"
        component={BottomTabNavigation}
        options={{
          headerShown: true,
          title: 'Home',
          drawerIcon: ({ focused, size }) => (
            <FontAwesome name='home' size={22} color='#000'
              style={{ height: 25, width: 25, marginRight: -20 }} />
          ),
        }}
      />
      <Drawer.Screen
        name="FavouriteService"
        component={FavouriteService}
        options={{
          headerShown: true,
          title: 'Favourite Service',
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name='favorite'
              size={22} color='#000'
              style={{ height: 25, width: 25, marginRight: -20 }} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default App_Drawer_Navigation;

