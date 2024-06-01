import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import LeftArrow from 'react-native-vector-icons/Feather';
import App_Drawer_Navigation from '../../app_navigation/App_Drawer_Navigation';

const OtpVerifyScreen = ({ navigation }) => {
  const [otpInputs, setOtpInputs] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const [error, setError] = useState('');
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;
    if (minutes > 0 || seconds > 0) {
      timer = setTimeout(() => {
        if (seconds > 0) {
          setSeconds(prevSeconds => prevSeconds - 1);
        } else if (minutes > 0) {
          setMinutes(prevMinutes => prevMinutes - 1);
          setSeconds(59);
        }
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [minutes, seconds]);

  const handleInputChange = (index, value) => {
    const updatedOtpInputs = [...otpInputs];
    updatedOtpInputs[index] = value;
    setOtpInputs(updatedOtpInputs);
    setError('');
    if (value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (index < otpInputs.length - 1 && value !== '') {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    if (otpInputs.some(input => input === '')) {
      setError('Please fill in all OTP fields.');
      return;
    }
    navigation.navigate('App_Drawer_Navigation');
  };

  const handleResendOtp = () => {
    setMinutes(10);
    setSeconds(0);
    // Add logic to resend the OTP here
  };

  const renderOtpInputs = () => {
    return otpInputs.map((otp, index) => (
      <TextInput
        key={index}
        ref={ref => (inputRefs.current[index] = ref)}
        style={[styles.inputView, { borderColor: otp.length >= 1 ? '#009eb4' : '#000' }]}
        keyboardType='number-pad'
        maxLength={1}
        onChangeText={txt => handleInputChange(index, txt)}
        value={otp}
      />
    ));
  };

  const formatTime = () => {
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.leftIcon} onPress={() => navigation.navigate('SignInScreen')}>
        <LeftArrow name='arrow-left' size={25} color='#fff' />
      </TouchableOpacity>
      <Image source={require('../../asset/images/Otp.png')} style={styles.imageStyle} />
      <Text style={styles.enterText}>Enter OTP</Text>
      <Text style={styles.reqText}>One 4 digit code has been sent to *******421 number</Text>
      <View style={styles.otpContainer}>
        {renderOtpInputs()}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.bottomButton} onPress={handleVerify}>
        <Text style={styles.verify}>Verify</Text>
      </TouchableOpacity>

      <View style={styles.resendContainer}>
        <TouchableOpacity onPress={handleResendOtp}>
          <Text style={styles.resend}>Resend OTP</Text>
        </TouchableOpacity>
        <Text style={styles.timer}>{formatTime()}</Text>
      </View>
    </ScrollView>
  );
};

export default OtpVerifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: '3%',
  },
  leftIcon: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  imageStyle: {
    height: 280,
    width: 280,
    alignSelf: 'center'
  },
  enterText: {
    fontSize: 20,
    color: '#009eb4',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10%'
  },
  reqText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  otpContainer: {
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '7%',
  },
  inputView: {
    marginTop: '8%',
    width: '19%',
    height: '60%',
    borderWidth: 0.5,
    borderRadius: 10,
    color: 'black',
    marginLeft: '5%',
    textAlign: 'center'
  },
  bottomButton: {
    backgroundColor: '#009eb4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: '70%',
    borderRadius: 15,
    marginBottom: '5%',
  },
  verify: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resend: {
    color: '#009eb4',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginRight: '3%',
  },
  timer: {
    color: '#000',
  },
  errorText: {
    color: 'red',
    marginBottom: '2%',
  },
});
