import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView, Alert, ToastAndroid } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { handleAdd, postAllDataRequest } from '../../api/Api_constant';
import { VALIDATE_MOBILE_NUMBER } from '../../constant/App_constant';
import axios from 'axios';

const SignInScreen = ({ navigation }) => {
  const [mobileNum, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleGetOTP = () => {
    const mobileNumberPattern = /^[7-9][0-9]{9}$/;
    if (mobileNumberPattern.test(mobileNum)) {
      setErrorMessage('');
      validateMobileNumber();

    } else {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
    }
  };

  const validateMobileNumber = async () => {
    const param = {
      loginid: mobileNum
    };
    try {
      const response = await axios.post(VALIDATE_MOBILE_NUMBER, param, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
      );

      const { status, message } = response.data;
      console.log('res!!', response);

      if (status === "success") {
        ToastAndroid.show(message, ToastAndroid.SHORT);
        navigation.navigate('OtpVerifyScreen', { mobileNumber: mobileNum })
      } else {
        console.error('Login failed:', message);
        ToastAndroid.show(message, ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log('error config', error.config);
    }
  };

  const handleChangeText = (text) => {
    const filteredText = text.replace(/[^0-9]/g, '');
    setMobileNumber(filteredText);
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setErrorMessage('');
      };
    }, [])
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../asset/images/Signup.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>Login Here</Text>
          <Text style={styles.msg}>Enter Your Mobile Number</Text>
          <Text style={styles.msg1}>reset your password</Text>
        </View>
        <Text style={styles.textname}>Mobile Number</Text>
        <View style={styles.txtinput}>
          <TextInput
            style={styles.textfield}
            placeholder="Enter your Mobile number"
            keyboardType='numeric'
            maxLength={10}
            value={mobileNum}
            onChangeText={handleChangeText}
          />
        </View>
        {errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleGetOTP}>
          <Text style={styles.buttonText}>Get OTP</Text>
        </TouchableOpacity>
        <View style={styles.bottomtxt}>
          <Text style={styles.txtname1}>New User?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.txtname2}> Create an Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '8%',
  },
  img: {
    width: '90%',
    height: 200,
  },
  title: {
    alignItems: 'center',
    marginTop: '3%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#009eb4',
    padding: '2%',
    marginTop: '5%',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  msg: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    marginTop: '5%',
  },
  msg1: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  textname: {
    color: '#000',
    fontWeight: '600',
    marginTop: '10%',
    fontSize: 15,
    padding: '2%',
  },
  txtinput: {
    height: 56,
    color: '#000000',
    marginTop: 5,
    backgroundColor: '#ffffff',
    fontSize: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
  },
  textfield: {
    marginLeft: '2%',
    color: '#000',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  button: {
    height: 56,
    backgroundColor: '#009eb4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '10%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  txtname1: {
    fontSize: 15,
    marginLeft: 30,
    fontWeight: 'bold',
  },
  txtname2: {
    fontSize: 15,
    color: '#009eb4',
    fontWeight: 'bold',
  },
  bottomtxt: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '2%',
  },
});
