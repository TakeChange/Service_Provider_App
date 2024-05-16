
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const handleLoginPress = () => {
    setIsLoginClicked(true);
    
  };

  const handleRegisterPress = () => {
    setIsLoginClicked(false);
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
          source={require('../../asset/images/welcm.png')}
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

export default SignInScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },
  TxtStyle: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 30,
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
    alignItems: 'center',
    marginVertical: 10,
  },
  imageStyle: {
    height: 400,
    width: 350,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    height: 55,
    marginBottom: 20,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonTextActive: {
    color: '#fff',
  },
});
