import React from 'react'
import AppNavigation from './src/app_navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'


import PaymentMethodScreen from './src/screen/authentication_module/PaymentMethodScreen'


const App = () => {
  return (
     <NavigationContainer>
       <AppNavigation />                               
    </NavigationContainer>
  
   )
}
export default App;

