// import React from 'react'
// import AppNavigation from './src/app_navigation/AppNavigation'
// import { NavigationContainer } from '@react-navigation/native'

// const App = () => {
//   return (
//     <NavigationContainer>
//       <AppNavigation />                                
//     </NavigationContainer>
//    )
// }
// export default App;

import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

const ValidateMobileScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateMobileNumber = async () => {
    if (!mobileNumber) {
      Alert.alert('Error', 'Please enter a mobile number');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('https://raviscyber.in/Sevakalpak/index.php/Api/ValidateMobileNumber', {
        method: 'POST',
        body: JSON.stringify({ loginid: mobileNumber }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        keyboardType="numeric"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <Button title="Validate Mobile Number" onPress={validateMobileNumber} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        data && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{JSON.stringify(data, null, 2)}</Text>
          </View>
        )
      )}
    </View>
  );
};

export default ValidateMobileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
  },
  resultText: {
    fontSize: 16,
  },
});
