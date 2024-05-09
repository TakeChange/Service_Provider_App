
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon}>
        <Feather
                        name='arrow-left'
                        size={20}
                        color='#fff'
                    />
        </TouchableOpacity>
        <Text style={styles.heading}>Change Password</Text>
        <View />
      </View>

      <Text style={styles.label}>Old Password</Text>
      <TextInput
        style={styles.input}
        placeholder='ABC_0123'
        secureTextEntry
        value={oldPassword}
        onChangeText={setOldPassword}
      />

      <Text style={styles.label}>New Password</Text>
      <TextInput
        style={styles.input}
        placeholder='ABC_0123'
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder='ABC_0123'
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.updateButton} >
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>Update</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default ChangePasswordScreen;

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
    backgroundColor:'#000',
    justifyContent:'flex-start',
    alignItems:'center',
    padding:'2%',
    width:'12%',
    borderRadius:10
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
  updateButton: {
    backgroundColor: '#ff7235',
    justifyContent: 'center',
    marginTop: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: '4%',
    width: '50%',
    borderRadius: 15
  },
  
});

