import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';

const SignInScreen = ({navigation}) => {

  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState('');
 

  const Validation = () => {
    var isValid = true;
    if (mobile == '') {
      setMobileError('Mobile Number do not empty');
        isValid = false;
    } else {
      setMobileError('');
    }
    const phoneNumberRegex = /^[0-9]{10}$/;
        if (!mobile || !phoneNumberRegex.test(mobile)) {
            setMobileError('Enter a valid 10-digit mobile number');
            isValid = false;
        } else {
            setMobileError('');
        }
   
    if (isValid) {
       
    }
  
}
// const check = async () => {
//   try {
//       var mobile = await AsyncStorage.getItem('mobile');

//       if (mobile == mobile) {
//           ToastAndroid.show(' Successfully', ToastAndroid.LONG);
//           await AsyncStorage.setItem('login', 'yes');
//           navigation.navigate(OtpVerifyScreen)
//       }
//       else {
//           ToastAndroid.show('Mobile number do not match', ToastAndroid.LONG);
//       }
//   }
//   catch (e) {
//       console.log(e)
//   }
// }

useFocusEffect(
  React.useCallback(() => {
      return () => {
          // Reset errors when navigating away from screen
          setMobileError('');
      };
  }, [])
);
  return (
    <View style={styles.container}>

      <View style={styles.imgContainer}>
        <Image
          source={require('../../asset/images/Signup.png')}
          style={{ width: "90%", height: 200, }}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>Login Here</Text>
        <Text style={styles.msg}>Enter Your Mobile Number </Text>
        <Text style={styles.msg1}>reset your password </Text>

      </View>

      <Text style={styles.textname}>Mobile Number</Text>
      <View style={styles.txtinput}>
      <TextInput
      style={styles.textfield}
          placeholder="Enter mobile Number"
          keyboardType='numeric'
          maxLength={10}
      />
      </View>
      <Text style={styles.error}>{mobileError}</Text>
      <TouchableOpacity style={styles.button} 
      onPress={() => navigation.navigate('OtpVerifyScreen')}
      // onPress={Validation}
      >
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>

      <View style={styles.bottomtxt}>
      <Text style={styles.txtname1}>New User?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
      <Text style={styles.txtname2}> Create an Account</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '8%',

  },
  title: {
    alignItems: 'center',
    marginTop:'3%'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#009eb4',
   padding:'2%',
   marginTop:'5%'
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  msg: {
    color:'#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:'5%'
  },
  msg1:{
    color:'#000',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  textname: {
    color:'#000',
    fontWeight: '600',
    marginTop: '10%',
    fontSize: 15,
    padding: '2%'

  },
  txtinput: {
    height:56,
    color: '#000',
    backgroundColor: '#ffffff',
    fontSize: 15,
    borderRadius: 17,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    justifyContent:'center'

  },
  textfield: {
    marginLeft: '2%',
    color:'#000',
  },
  button: {
    height: 56,
    backgroundColor: '#009eb4',
     justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    marginTop: '5%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    

  },
  txtname1:{
    color:'#000',
    fontSize:15,
    marginLeft:30,
    fontWeight:'bold'
  },
  txtname2:{
    fontSize:15,
   color:'#009eb4',
   fontWeight:'bold'
  },
  bottomtxt:{
    flex:1,
    flexDirection:'row',
    marginTop:'2%',
    
  },
  error:{
    color: 'red',
    marginHorizontal: 10,
    marginTop: '1%'
  }
})