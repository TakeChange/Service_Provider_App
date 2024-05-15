import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import User from 'react-native-vector-icons/FontAwesome'
import LeftArrow from 'react-native-vector-icons/Feather'
import Eye from 'react-native-vector-icons/Ionicons';
import LoginOption from '../authentication_module/LoginOption'

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [userError, setUserError] = useState('');
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const Validation = () => {
    var isValid = true;
    if (username == '') {
      setUserError('Username do not empty');
      isValid = false;
    } else {
      setUserError('');
    }
    if (password == '') {
      setPasswordError('Password do not empty');
      isValid = false;
    } else {
      setPasswordError('');
    }

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.lefticon} >
        
      </TouchableOpacity>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.title1}>Login to your existing account</Text>
      <View style={styles.main}>
        <Text style={styles.textStyle}>Username</Text>
        <View style={styles.inputStyle} >
          <TextInput
          
            placeholder="username"
            value={username}
            onChangeText={setUsername}
          />
          <View>
            <User
              name="user"
              size={20}
              color='black'
              style={{ padding: 10 }}
            />
          </View>
        </View>
        <Text style={styles.error}>{userError}</Text>
        <Text style={styles.textStyle}>Password</Text>

        <View style={styles.inputStyle}>
          <TextInput
            placeholder="password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={{ padding: 10 }}>
            <Eye
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color='black'
            />
          </TouchableOpacity>
        </View>



        <Text style={styles.error}>{passwordError}</Text>

        <Text style={styles.forgotText}>Forget password ?</Text>

        <TouchableOpacity style={styles.button} onPress={Validation}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>


        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text style={{ color: '#1C3C20', fontSize: 15, fontWeight: 'bold', }}>New User? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginOption')}>
          <Text style={{ color: '#ff7235', fontSize: 15, fontWeight: 'bold', }}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30

  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  
  textStyle: {
    marginRight: '60%',
    color: '#1C3C20',
    fontSize: 16,
    marginBottom: 1,
     fontWeight:'bold',
     marginTop:10
  },
  title: {
    marginTop: 20,
    marginHorizontal: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1C3C20',
  },
  title1: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1C3C20',

  },

  inputStyle: {
    
    color: '#000000',
    marginTop: 3,
    backgroundColor: '#ffffff',
    width: '85%',
    height: 50,
    fontSize: 16,
    paddingLeft: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  forgotText: {
    color: '#ff7235',
    paddingLeft: '50%'
  },
  button: {
    width: '85%',
    height: 50,
    backgroundColor: '#ff7235',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',

  },
  error: {
    color: 'red',
    paddingRight: '30%',
    fontSize:14
  }
});

export default SignInScreen;


