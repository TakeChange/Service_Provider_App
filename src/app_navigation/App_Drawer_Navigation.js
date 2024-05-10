

// import React from 'react';
// import { View, Text } from 'react-native'; // Ensure these imports are correct
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from '../screen/home_module/HomeScreen'; // Verify the path to HomeScreen
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import BottomTabNavigation from './BottomTabNavigation';

// const Drawer = createDrawerNavigator();

// const App_Drawer_Navigation = () => {
//   return (
//       <Drawer.Navigator >
//         <Drawer.Screen name="Home" component={BottomTabNavigation} />
//       </Drawer.Navigator>

//   );
// }

// export default App_Drawer_Navigation;

// App_Drawer_Navigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import ForgotPassword from '../screen/ForgotPassword';
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

