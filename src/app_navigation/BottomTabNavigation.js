import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home_module/HomeScreen';
import CategoryScreen from '../screen/bottomtab_navigation/CategoryScreen';
import { View, StyleSheet } from 'react-native';
import HomeIcon from 'react-native-vector-icons/MaterialIcons';
import Category from 'react-native-vector-icons/MaterialIcons';
import Profile from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from '../screen/bottomtab_navigation/ProfileScreen';

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
          backgroundColor: '#009eb4',
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
            <View style={styles.iconWrapper}>
              <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                <HomeIcon
                  name='home'
                  color='white'
                  size={28}
                  style={{ alignSelf: 'center' }}
                />
              </View>
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
            <View style={styles.iconWrapper}>
              <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                <Category
                  name='category'
                  color='white'
                  size={28}
                  style={{ alignSelf: 'center' }}
                />
              </View>
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
            <View style={styles.iconWrapper}>
              <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                <Profile
                  name='user'
                  color='white'
                  size={28}
                  style={{ alignSelf: 'center' }}
                />
              </View>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'transparent', // Initially transparent border
  },
  iconFocused: {
    borderColor: 'white', // Border color when focused
  },
});

export default BottomTabNavigation;
