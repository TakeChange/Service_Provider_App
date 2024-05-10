// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native'; // Import Image
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screen/home_module/HomeScreen';
// import CategoryScreen from '../screen/home_module/CategoryScreen';


// import Home from "react-native-vector-icons/AntDesign";
// const Tab = createBottomTabNavigator();

// const BottomTabNavigation = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 tabBarShowLabel: false,
//                 tabBarHideOnKeyboard: true,
//                 tabBarStyle: {
//                     position: 'absolute',
//                     left: 0,
//                     right: 0,
//                     elevation: 0,
//                     backgroundColor: '#ffffff',
//                     //borderRadius: 15,
//                     height: '8%',
//                     ...styles.shadow

//                 }
//             }}>
//             <Tab.Screen
//                 name="HomeScreen"
//                 component={HomeScreen}
//                 options={{
//                     headerShown: false,
//                     tabBarIcon: ({ focused }) => (
//                         <View>
//                             {focused ?
//                                 <Home
//                                     name='home'
//                                     color='#3f55f8'
//                                     size={30}
//                                     style={{ alignSelf: 'center', marginTop: 2 }}
//                                 />

//                                 :

//                                 <Home
//                                     name='home'
//                                     color="grey"
//                                     size={30}
//                                     style={{ alignSelf: 'center', marginTop: 2 }}
//                                 />
//                             }
//                         </View>
//                     )
//                 }}
//             />

//             <Tab.Screen
//                 name="CategoryScreen"
//                 component={CategoryScreen}
//                 options={{
//                     headerShown: false,
//                     tabBarIcon: ({ focused }) => (
//                         <View>
//                             {focused ?
//                                 <Home
//                                     name='home'
//                                     color='#3f55f8'
//                                     size={30}
//                                     style={{ alignSelf: 'center', marginTop: 2 }}
//                                 />

//                                 :

//                                 <Home
//                                     name='home'
//                                     color="grey"
//                                     size={30}
//                                     style={{ alignSelf: 'center', marginTop: 2 }}
//                                 />
//                             }
//                         </View>
//                     )
//                 }}
//             />
//         </Tab.Navigator>
//     );
// }

// const styles = StyleSheet.create({
//     shadow: {
//         // Add your shadow styles here
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     },
// });

// export default BottomTabNavigation;


// BottomTabNavigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home_module/HomeScreen';
import CategoryScreen from '../screen/home_module/CategoryScreen';
import { View } from 'react-native';
import HomeIcon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          right: 0,
          elevation: 10,
          backgroundColor: '#ffffff',
          height: '8%',
          // Add shadow styles if needed
        }
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <HomeIcon
                name='home'
                color={focused ? '#3f55f8' : 'grey'}
                size={30}
                style={{ alignSelf: 'center', marginTop: 2 }}
              />
            </View>
          )
        }}
      />
     <Tab.Screen
        name="category"
        component={CategoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <HomeIcon
                name='home'
                color={focused ? '#3f55f8' : 'grey'}
                size={30}
                style={{ alignSelf: 'center', marginTop: 2 }}
              />
            </View>
          )
        }}
      />
     
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
