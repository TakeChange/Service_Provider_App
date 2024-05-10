import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import LeftArrow from 'react-native-vector-icons/Feather'

const OtpVerifyScreen = ({ navigation }) => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();

  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  return (
    <ScrollView >
      <View style={{ flex:1,margin: 15 }}>
        <TouchableOpacity style={styles.lefticon} onPress={() => navigation.navigate('')}>
            <LeftArrow
            name='arrow-left'
            size={20}
            color='#fff'
          />
       </TouchableOpacity>

        <Text style={styles.MainText}>Verification Code</Text>
        <Image
          source={require('../../asset/images/OTP.png')}
          style={{ width: 230, height: 230,alignSelf:'center',marginTop: '10%' }}
        />
        <Text style={styles.reqText}>Please enter the verification code sent to your mobile number...</Text>

        <View style={styles.otpView}>
          <TextInput
            ref={et1}
            style={[styles.inputView, { borderColor: f1.length >= 1 ? 'blue' : '#000' }]}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={txt => {
              setF1(txt);
              if (txt.length >= 1) {
                et2.current.focus();
              }
            }} />
          <TextInput
            ref={et2}
            style={[styles.inputView, { borderColor: f2.length >= 1 ? 'blue' : '#000' }]}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={txt => {
              setF2(txt);
              if (txt.length >= 1) {
                et3.current.focus();
              } else if (txt.length < 1) {
                et1.current.focus();
              }
            }} />
          <TextInput
            ref={et3}
            style={[styles.inputView, { borderColor: f3.length >= 1 ? 'blue' : '#000' }]}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={txt => {
              setF3(txt);
              if (txt.length >= 1) {
                et4.current.focus();
              } else if (txt.length < 1) {
                et2.current.focus();
              }
            }} />
          <TextInput
            ref={et4}
            style={[styles.inputView, { borderColor: f4.length >= 1 ? 'blue' : '#000' }]}
            keyboardType='number-pad'
            maxLength={1}
            value={f4}
            onChangeText={txt => {
              setF4(txt);
              if (txt.length >= 1) {
                et4.current.focus();
              } else if (txt.length < 1) {
                et3.current.focus();
              }
            }} />
        </View>
        <View>
          <Text style={styles.TimeText}>Do not received code? </Text>
        </View>
        <View>
          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <Text style={{ color: '#000', fontWeight: 'bold', textDecorationLine: 'underline' }}>RESEND</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('')}>
            <Text style={styles.ConfirmC}>Confirm Code</Text>
          </TouchableOpacity></View>
      </View>
    </ScrollView>
  )
}

export default OtpVerifyScreen

const styles = StyleSheet.create({
  MainText: {
    fontSize: 26,
    color: '#1D1E20',
    fontWeight: '900',
    textAlign: 'center',
  },
  bottomButton: {
    backgroundColor: '#ff7235',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: '5%',
    width: '60%',
    borderRadius: 15,
    marginTop: '12%'
  },
  ConfirmC: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
  reqText: {
    textAlign: 'center',
    fontSize: 16,
    padding: '4%',
    color: '#000',
    marginTop: '4%'
  },
  otpView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputView: {
    marginTop: '15%',
    width: '15%',
    height: '45%',
    borderWidth: 0.5,
    borderRadius: 10,
    color: 'black',
    marginLeft: 10,
    textAlign: 'center'

  },
  TimeText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 17,
    marginTop: '10%',
  },
  lefticon: {
    backgroundColor: '#000',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '2%',
    width: '12%',
    borderRadius: 10
  }
})