

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [oldpasswordError, setOldPasswordError] = useState('');
  const [newpasswordError, setNewPasswordError] = useState('');
  const [confirmpasswordError, setConfirmPasswordError] = useState('');
  const [error, setError] = useState('');

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleChangePassword = () => {
    let isValid = true;

    if (!oldPassword) {
      setOldPasswordError('Enter your old password');
      isValid = false;
    } else {
      setOldPasswordError('');
    }

    if (!newPassword) {
      setNewPasswordError('Enter your new password');
      isValid = false;
    } else {
      setNewPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Enter your confirm password');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
      isValid = false;
    }
    else {
      setError('');
    }

    if (isValid) {
      showToast('Password changed successfully');
    }
  };

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
        {oldpasswordError !== '' && <Text style={styles.error}>{oldpasswordError}</Text>}

        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder='ABC_0123'
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        {newpasswordError !== '' && <Text style={styles.error}>{newpasswordError}</Text>}

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder='ABC_0123'
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {confirmpasswordError !== '' && <Text style={styles.error}>{confirmpasswordError}</Text>}
        {error !== '' && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity style={styles.updateButton} onPress={handleChangePassword} >
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
    borderColor: '#888',
    marginBottom: '3%',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
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
  error: {
    color: 'red',
    marginBottom: '3%',
  }
});
