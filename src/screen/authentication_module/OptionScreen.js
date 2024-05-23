import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginOption from './LoginOption';
const OptionScreen = ({ navigation }) => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const handleLoginPress = () => {
    setIsLoginClicked(true);
    navigation.navigate('LoginOption'); // Change 'LoginScreen' to the name of your login screen
  };

  const handleRegisterPress = () => {
    setIsLoginClicked(false);
    navigation.navigate('LoginOption'); // Change 'SignUpScreen' to the name of your sign-up screen
  };

  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.TxtStyle}>Welcome!</Text>
        <Text style={styles.TxtStyle1}>It is great to have you here.</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require('../../asset/images/service.png')}
          resizeMode='contain'
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, isLoginClicked && styles.loginButtonActive]}
          onPress={handleLoginPress}
        >
          <Text style={[styles.buttonText, isLoginClicked && styles.buttonTextActive]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, !isLoginClicked && styles.registerButtonActive]}
          onPress={handleRegisterPress}
        >
          <Text style={[styles.buttonText, !isLoginClicked && styles.buttonTextActive]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OptionScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },
  TxtStyle: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  TxtStyle1: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  imageContainer: {
    justifyContent:'center',
    alignItems:'center',
    padding:'4%'
    
  },
  imageStyle: {
    height: 400,
    width: '90%',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginBottom: 20,
    padding: '2%',
    width: '80%',
    borderRadius: 15,
    
  },
  loginButtonActive: {
    borderColor: '#009eb4',
    backgroundColor: '#009eb4',
  },
  registerButtonActive: {
    borderColor: '#009eb4',
    backgroundColor: '#009eb4',
  },
  buttonText: {
    fontWeight: 'bold',
    color: "#000",
    textAlign: 'center',
    fontSize: 17,
    
  },
  buttonTextActive: {
    color: '#fff',
  },
});
