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
      <View style={{ flex: 1, margin: 15 }}>
        <TouchableOpacity  onPress={() => navigation.navigate('')}>
          <LeftArrow
            name='arrow-left'
            size={30}
            color='#000'
          />
        </TouchableOpacity>

        <Image
          source={require('../../asset/images/OTP.png')}
          style={{ width: 230, height: 230, alignSelf: 'center', marginTop: '10%' }}
        />

        <Text style={styles.enterText}>Enter OTP</Text>
        <Text style={styles.reqText}>On 4 Digit Code has been sent to *******421 number</Text>

        <View style={styles.otpView}>
          <TextInput
            ref={et1}
            style={[styles.inputView, { borderColor: f1.length >= 1 ? '#009eb4' : '#000' }]}
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
            style={[styles.inputView, { borderColor: f2.length >= 1 ? '#009eb4' : '#000' }]}
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
            style={[styles.inputView, { borderColor: f3.length >= 1 ? '#009eb4' : '#000' }]}
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
            style={[styles.inputView, { borderColor: f4.length >= 1 ? '#009eb4' : '#000' }]}
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
          <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('')}>
            <Text style={styles.verify}>Verify</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ alignSelf: 'center',flexDirection:'row' }}>
            <Text style={styles.resend}>Resend OTP</Text>
            <Text style={{color:'#000',marginTop:'3%',paddingLeft:'2%'}}>0:20</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#009eb4',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: '2%',
    width: '80%',
    borderRadius: 15,
    marginTop: '12%'
  },
  verify: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
  enterText: {
    fontSize: 20,
    color: '#009eb4',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '5%'
  },
  reqText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  otpView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputView: {
    marginTop: '15%',
    width: '14%',
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
  resend: {
    color: '#009eb4',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop:'3%'
  }
})