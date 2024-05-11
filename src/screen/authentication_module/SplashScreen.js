import { StyleSheet, Text, View ,Image } from 'react-native'
import React, { useEffect } from 'react'
import SignInScreen from '../authentication_module/SignInScreen'
const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
          navigation.navigate('SignInScreen')
        }, 2000)
      })
  return (
    <View style={styles.container}>
      <Image source={require('../../asset/icons/cleaning.png')}
      resizeMode='contain' style={{height:"50%", width:'40%'}}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        

    }
})