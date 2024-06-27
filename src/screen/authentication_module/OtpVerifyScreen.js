// import React, { useRef, useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ToastAndroid } from 'react-native';
// import LeftArrow from 'react-native-vector-icons/Feather';
// import axios from 'axios';
// import { useRoute } from '@react-navigation/native';
// import App_Drawer_Navigation from '../../app_navigation/App_Drawer_Navigation';
// import { VALIDATE_MOBILE_NUMBER } from '../../constant/App_constant';
// import { handleAdd, postAllDataRequest } from '../../api/Api_constant';

// const OtpVerifyScreen = ({ navigation }) => {
//   const route = useRoute();
//   const { mobileNumber } = route.params;
//   const maskedNumber = mobileNumber ? `******${mobileNumber.slice(-4)}` : '******';

//   const [otpInputs, setOtpInputs] = useState(['', '', '', '', '', '']);
//   const inputRefs = useRef([]);
//   const [error, setError] = useState('');
//   const [minutes, setMinutes] = useState(10);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, [])

//   const fetchData = async () => {
//     try {
//       const getUser = 'https://raviscyber.in/Sevakalpak/index.php/Api/Login'
//       const response = await axios.post(getUser, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("Response here:", response.data); // Log the response data
//       console.log(response.data)
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     let timer;
//     if (minutes > 0 || seconds > 0) {
//       timer = setTimeout(() => {
//         if (seconds > 0) {
//           setSeconds(prevSeconds => prevSeconds - 1);
//         } else if (minutes > 0) {
//           setMinutes(prevMinutes => prevMinutes - 1);
//           setSeconds(59);
//         }
//       }, 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [minutes, seconds]);

//   const handleInputChange = (index, value) => {
//     const updatedOtpInputs = [...otpInputs];
//     updatedOtpInputs[index] = value;
//     setOtpInputs(updatedOtpInputs);
//     setError('');
//     if (value === '' && index > 0) {
//       inputRefs.current[index - 1].focus();
//     } else if (index < otpInputs.length - 1 && value !== '') {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleVerify = () => {
//     if (otpInputs.some(input => input === '')) {
//       setError('Please fill in all OTP fields.');
//       return;
//     }
//     navigation.navigate('ProfileScreen');
//   };

//   const handleResendOtp = async () => {
//     const param = {
//       loginid: ''
//     }
//     console.log('param :: ', param);
//     try {
//       const response = postAllDataRequest(VALIDATE_MOBILE_NUMBER, param);
//       console.log('res', response);
//       const { status, message } = response.data;
//       console.log('res', message);
//       if (status === "success") {
//         ToastAndroid.show(message, ToastAndroid.SHORT);
//       } else {
//         console.error('Login failed:', message);
//         ToastAndroid.show(message, ToastAndroid.SHORT);
//       }
//     } catch (error) {
//       console.log('error', error)
//       ToastAndroid.show('Please enter valid mobile number', ToastAndroid.SHORT);
//     }
//   };


//   const renderOtpInputs = () => {
//     return otpInputs.map((otp, index) => (
//       <TextInput
//         key={index}
//         ref={ref => (inputRefs.current[index] = ref)}
//         style={[styles.inputView, { borderColor: otp.length >= 1 ? '#009eb4' : '#000' }]}
//         keyboardType='number-pad'
//         maxLength={1}
//         onChangeText={txt => handleInputChange(index, txt)}
//         value={otp}
//       />
//     ));
//   };

//   const formatTime = () => {
//     return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.leftIcon} onPress={() => navigation.navigate('SignInScreen')}>
//         <LeftArrow name='arrow-left' size={25} color='#fff' />
//       </TouchableOpacity>
//       <Image source={require('../../asset/images/Otp.png')} style={styles.imageStyle} />
//       <Text style={styles.enterText}>Enter OTP</Text>
//       <Text style={styles.reqText}>One 6 digit code has been sent to {maskedNumber} number</Text>


//       <View style={styles.otpContainer}>
//         {renderOtpInputs()}
//       </View>
//       {error ? <Text style={styles.errorText}>{error}</Text> : null}
//       <TouchableOpacity style={styles.bottomButton} onPress={handleVerify}>
//         <Text style={styles.verify}>Verify</Text>
//       </TouchableOpacity>

//       <View style={styles.resendContainer}>
//         <TouchableOpacity onPress={handleResendOtp}>
//           <Text style={styles.resend}>Resend OTP</Text>
//         </TouchableOpacity>
//         <Text style={styles.timer}>{formatTime()}</Text>
//       </View>
//     </View>
//   );
// };

// export default OtpVerifyScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     padding: '3%',
//   },
//   leftIcon: {
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '2%',
//     borderRadius: 10,
//     alignSelf: 'flex-start',
//   },
//   imageStyle: {
//     height: 280,
//     width: 280,
//     alignSelf: 'center'
//   },
//   enterText: {
//     fontSize: 20,
//     color: '#009eb4',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: '10%'
//   },
//   reqText: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#000',
//   },
//   otpContainer: {
//     width: '90%',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//     marginBottom: '7%',
//   },
//   inputView: {
//     marginTop: '8%',
//     width: '14%',
//     height: '65%',
//     borderWidth: 0.5,
//     borderRadius: 10,
//     color: 'black',
//     textAlign: 'center'
//   },
//   bottomButton: {
//     backgroundColor: '#009eb4',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 10,
//     width: '70%',
//     borderRadius: 15,
//     marginBottom: '5%',
//   },
//   verify: {
//     color: '#FFFFFF',
//     fontSize: 17,
//     fontWeight: 'bold',
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   resend: {
//     color: '#009eb4',
//     fontWeight: 'bold',
//     textDecorationLine: 'underline',
//     marginRight: '3%',
//   },
//   timer: {
//     color: '#000',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: '2%',
//   },
// });


import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ToastAndroid } from 'react-native';
import LeftArrow from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const OtpVerifyScreen = ({ navigation }) => {
  const route = useRoute();
  const { mobileNumber } = route.params;
  const maskedNumber = mobileNumber ? `******${mobileNumber.slice(-4)}` : '******';

  const [otpInputs, setOtpInputs] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const [error, setError] = useState('');
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [resendCount, setResendCount] = useState(0);

  useEffect(() => {
    // Removed the unused fetchData call
  }, []);

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

  const handleVerify = async () => {
    if (otpInputs.some(input => input === '')) {
      setError('Please fill in all OTP fields.');
      return;
    }

    const otp = otpInputs.join('');

    try {
      const response = await axios.post('https://raviscyber.in/Sevakalpak/index.php/Api/Login', {
        otp,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { status, message } = response.data;

      if (status === "success") {
        navigation.navigate('ProfileScreen');
      } else {
        setError(message);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError('Failed to verify OTP. Please try again.');
    }
  };

  const handleResendOtp = async () => {
    if (resendCount >= 3) {
      ToastAndroid.show('You have reached the maximum resend attempts. Please try again later.', ToastAndroid.SHORT);
      return;
    }

    try {
      const response = await axios.post('https://raviscyber.in/Sevakalpak/index.php/Api/GenerateOtp', {
        mobileNumber,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { status, message } = response.data;
      if (status === "success") {
        ToastAndroid.show('OTP has been resent.', ToastAndroid.SHORT);
        setResendCount(resendCount + 1);
        setMinutes(10); // Reset timer
        setSeconds(0);
      } else {
        console.error('Resend failed:', message);
        ToastAndroid.show(message, ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log('error', error);
      ToastAndroid.show('Error resending OTP. Please try again.', ToastAndroid.SHORT);
    }
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
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftIcon} onPress={() => navigation.navigate('SignInScreen')}>
        <LeftArrow name='arrow-left' size={25} color='#fff' />
      </TouchableOpacity>
      <Image source={require('../../asset/images/Otp.png')} style={styles.imageStyle} />
      <Text style={styles.enterText}>Enter OTP</Text>
      <Text style={styles.reqText}>One 6 digit code has been sent to {maskedNumber} number</Text>

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
    </View>
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
    alignSelf: 'center',
  },
  enterText: {
    fontSize: 20,
    color: '#009eb4',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10%',
  },
  reqText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  otpContainer: {
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '7%',
  },
  inputView: {
    marginTop: '8%',
    width: '14%',
    height: '65%',
    borderWidth: 0.5,
    borderRadius: 10,
    color: 'black',
    textAlign: 'center',
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
