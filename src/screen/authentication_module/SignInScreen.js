import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const SignInScreen = ({navigation}) => {
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
          placeholder="Enter your Mobile number"
          keyboardType='numeric'
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OtpVerifyScreen')}>
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
    fontSize: 26,
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
    fontSize: 20,
    fontWeight: '600',
    marginTop:'5%'
  },
  msg1:{
    color:'#000',
    fontSize: 20,
    fontWeight: '600',
    
  },
  textname: {
    color:'#000',
    fontWeight: '600',
    marginTop: '10%',
    fontSize: 17,
    padding: '2%'

  },
  txtinput: {
    height:56,
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

  },
  textfield: {
    marginLeft: '2%',
    color: '#000'
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
    fontSize: 16,
    fontWeight: 'bold',

  },
  txtname1:{
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
    
  }
})