
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home_module/HomeScreen';
import CategoryScreen from '../screen/CategoryScreen';
import { View } from 'react-native';
import HomeIcon from 'react-native-vector-icons/MaterialIcons';
import Category from 'react-native-vector-icons/MaterialIcons';
import Profile from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from '../screen/ProfileScreen'
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
                color={focused ? '#ff7235' : 'grey'}
                size={28}
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
              <Category
                name='category'
                color={focused ? '#ff7235' : 'grey'}
                size={28}
                style={{ alignSelf: 'center', marginTop: 2 }}
              />
            </View>
          )
        }}
      />
     

     <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Profile
                name='user'
                color={focused ? '#ff7235' : 'grey'}
                size={28}
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
