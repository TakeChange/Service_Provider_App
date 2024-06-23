import React from 'react'
import AppNavigation from './src/app_navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'
import ProfileScreen from './src/screen/bottomtab_navigation/ProfileScreen'


const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />      
      {/* <ProfileScreen/>                           */}
    </NavigationContainer>
   )
}
export default App;

