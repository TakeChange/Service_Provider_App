import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeScreen')
    }, 2000);
  })
  return (
    <View style={styles.container}>
      <Image
        source={require('../../asset/images/Sevakalpak.png')}
        resizeMode='contain'
        style={styles.imageStyle}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  imageStyle: {
    height: "90%",
    width: '90%'
  },
})