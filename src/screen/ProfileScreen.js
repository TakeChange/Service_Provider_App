
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
const ProfileScreen = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [area, setArea] = useState('');
  const[address,setAddress]=useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Profile </Text>
          <View />
        </View>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.txtinput}>
          <PhoneInput
            defaultValue={phoneNumber}
            defaultCode='IN'
          />
          <TouchableOpacity style={styles.phoneButton} onPress={() => { Alert.alert(phoneNumber) }}>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

         <Text style={styles.label}>Area</Text>
        <TextInput
          style={styles.input}
          value={area}
          onChangeText={setArea}
        />

<Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />

        <TouchableOpacity style={styles.updateButton} >
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '12%',

  },
  icon: {
    backgroundColor: '#000',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '2%',
    width: '12%',
    borderRadius: 10
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: '2%',
  },
  input: {
    backgroundColor: '#fff',
    padding: '3%',
    borderRadius: 8,
    borderColor: '#ccc',
    marginBottom: '9%',
    fontSize: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 15,
  },
  txtinput:{
    backgroundColor: '#fff',
   borderRadius: 8,
    borderColor: '#ccc',
    marginBottom: '9%',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 15, 

},
updateButton: {
    backgroundColor: '#ff7235',
    justifyContent: 'center',
    marginTop: '2%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: '4%',
    width: '50%',
    borderRadius: 15
  },

});

