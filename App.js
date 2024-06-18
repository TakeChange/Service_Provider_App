import React from 'react'
import AppNavigation from './src/app_navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screen/home_module/HomeScreen'


const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />                                
    </NavigationContainer>
   )
}
export default App;