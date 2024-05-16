import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/app_navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from './src/screen/authentication_module/WelcomeScreen'




const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
    

  )
}

export default App

const styles = StyleSheet.create({})