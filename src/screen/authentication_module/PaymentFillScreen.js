import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LeftArrow from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const PaymentFillScreen = () => {

  const [amount, setAmount] = useState('');
  const [amountErr, setAmountErr] = useState('');
  const [pin, setPin] = useState('');
  const [pinErr, setPinErr] = useState('');

  const Validation = () => {
    var isValid = true;
    if (amount === '') {
      setAmountErr('Amount cannot be empty');
      isValid = false;
    } else {
      setAmountErr('');
    }
    if (pin === '') {
      setPinErr('Upi Pin cannot be empty');
      isValid = false;
    } else {
      setPinErr('');
    }
    if (isValid) {
      RegisterUser();
      //storeData();
      //navigation.navigate('SignInScreen')
    }
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxContainerHead}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.leftIcon}>
              <LeftArrow name='arrow-left' size={25} color='#000' />
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.bankName}>Bank Of Maharashtra</Text>
              <Text style={styles.cardNumber}>****1234</Text>
            </View>
            <Image
              source={require('../../asset/images/bankicon.png')}
              style={styles.bankIcon}
            />
          </View>
        </View>
        <View style={styles.boxContaineramount}>
          <View style={styles.amountContainer}>
            <TextInput
              style={styles.amountInput}
              placeholder="₹ 0000"
              keyboardType="numeric"
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
          </View>
        </View>
        <Text style={styles.error}>{amountErr}</Text>
        <Text style={styles.pinLabel}>ENTER 4-DIGIT UPI PIN</Text>
        <TextInput
          style={styles.pinInput}
          placeholder="Enter your UPI pin"
          keyboardType="numeric"
          value={pin}
          onChangeText={(text) => setPin(text)}
        />
        <Text style={styles.error}>{pinErr}</Text>
        <TouchableOpacity style={styles.bottomButton} onPress={(Validation)} >
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('4%'),
    backgroundColor: '#fff',
  },
  leftIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp('2%'),
  },
  boxContainerHead: {
    backgroundColor: '#fff',
    paddingHorizontal: '2%',
    paddingVertical: '4%',
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: wp('3%'),
  },
  bankName: {
    fontSize: wp('4.3%'),
    fontWeight: 'bold',
    color: '#009eb4'
  },
  cardNumber: {
    fontSize: wp('4%'),
    color: '#000',
    marginTop: hp('0.5%'),
  },
  bankIcon: {
    width: wp('23%'),
    height: hp('6%'),
    marginRight: wp('5%'),
  },
  cardNumber: {
    fontSize: wp('4%'),
    color: '#000',
    fontWeight:'500'
  },
  boxContaineramount: {
    marginTop: hp('1%'),
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: '5%',
    //marginVertical: '7%',
    shadowColor: '#000',
    elevation: 5,
  },
  amountContainer: {
    alignItems: 'center',
    marginVertical: hp('5%'),
  },
  amountInput: {
    width: wp('70%'),
    paddingVertical: hp('1%'),
    fontSize: wp('9%'),
    textAlign: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 14,
   
  },
  pinLabel: {
    fontSize: wp('4%'),
    textAlign: 'center',
    //marginTop: hp('2%'),
    marginBottom: hp('3%'),
    color: '#000',
    fontWeight: '500',
  },
  pinInput: {
    fontSize: wp('4%'),
    textAlign: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: hp('1%'),
    //marginBottom: hp('7%')
  },
  bottomButton: {
    backgroundColor: '#009eb4',
    alignItems: 'center',
    paddingVertical: 10,
    width: '70%',
    borderRadius: 15,
    alignSelf: 'center'
  },
  payButtonText: {
    color: '#fff',
    fontSize: wp('4.5%'),
  },
  error: {
    color: 'red',
    marginBottom: hp('5%'),
    textAlign:'center'
},
});

export default PaymentFillScreen;
