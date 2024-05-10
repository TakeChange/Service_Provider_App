
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home_module/HomeScreen';
import CategoryScreen from '../screen/CategoryScreen';
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
