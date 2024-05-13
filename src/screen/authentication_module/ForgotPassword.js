import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const ForgotPassword = () => {
  return (
    <View style={styles.container}>

      <View style={styles.imgContainer}>
        <Image
          source={require('../../asset/images/forgot-password.webp')}
          style={{ width: "90%", height: 200, }}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>Forgot Password</Text>
        <Text style={styles.msg}>We have send a four digit code on your</Text>
        <Text style={styles.msg}>Phone number</Text>

      </View>

      <Text style={styles.textname}>Phone number</Text>
      <View style={styles.txtinput}>
        <TextInput
          style={styles.textfield}
          placeholder="Enter your phone number"
          keyboardType='numeric'
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',

  },
  title: {
    alignItems: 'center',
    marginTop:'3%'
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
   padding:'2%'
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  msg: {
    fontSize: 17,
    fontWeight: '700',
    
  },
  textname: {
    fontWeight: '600',
    marginTop: '10%',
    fontSize: 18,
    padding: '2%'

  },
  txtinput: {
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
    height: 50,
    backgroundColor: '#ff7235',
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

})