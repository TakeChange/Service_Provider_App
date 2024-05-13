

import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import PhoneInput from "react-native-phone-number-input";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo';

const ProfileScreen = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [area, setArea] = useState('');
    const [address, setAddress] = useState('');

    const [fullNameError, setFullNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [areaError, setAreaError] = useState('');
    const [addressError, setAddressError] = useState('');

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    const handleUpdate = () => {
        let isValid = true;

        if (!fullName) {
            setFullNameError('Enter your full name');
            isValid = false;
        } else {
            setFullNameError('');
        }

        if (!phoneNumber) {
            setPhoneNumberError('Enter your mobile number');
            isValid = false;
        } else {
            setPhoneNumberError('');
        }

        if (!confirmPassword) {
            setConfirmPasswordError('Enter your confirm password');
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }

        if (!area) {
            setAreaError('Enter your area');
            isValid = false;
        } else {
            setAreaError('');
        }

        if (!address) {
            setAddressError('Enter your address');
            isValid = false;
        } else {
            setAddressError('');
        }

        if (isValid) {
            showToast('Profile Updated Successfully!');
        }
    };

    return (
        <ScrollView style={{ flexGrow: 1 }}>
            <View style={styles.Container}>
                <Text style={{marginLeft:'50%',fontWeight:'800',color:'#000',fontSize:15}}>Profile</Text>
                <View>
                    <Text style={styles.text}>Full Name</Text>
                    <TextInput
                        style={styles.txtinput}
                        placeholder=""
                        value={fullName}
                        onChangeText={setFullName}
                    />
                    {fullNameError !== '' && <Text style={styles.error}>{fullNameError}</Text>}
                    <Text style={styles.text}>Mobile Number</Text>
                    <View style={styles.txtinput}>
                        <PhoneInput
                            defaultValue={phoneNumber}
                            defaultCode='IN'
                            onChangeFormattedText={(text) => setPhoneNumber(text)}
                        />
                        <TouchableOpacity onPress={() => { Alert.alert(phoneNumber) }}>
                        </TouchableOpacity>
                    </View>
                    {phoneNumberError !== '' && <Text style={styles.error}>{phoneNumberError}</Text>}
                    <Text style={styles.text}>Confirm Password</Text>
                    <TextInput
                        style={styles.txtinput}
                        placeholder=""
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}

                    />
                    {confirmPasswordError !== '' && <Text style={styles.error}>{confirmPasswordError}</Text>}
                    <Text style={styles.text}>Area</Text>
                    <View style={styles.txtinput}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                            <Entypo name='location-pin' size={30} color='#ff7235' />
                            <GooglePlacesAutocomplete
                                placeholder='Search Area'
                                debounce={400}
                                query={{
                                    key: 'API_KEY',
                                    language: 'en'
                                }}
                                styles={{
                                    container: {
                                        flex: 1,
                                    },
                                    listView: {
                                        position: 'absolute',
                                        top: 50,
                                    },
                                }}
                            />
                        </View>
                    </View>
                    <Text style={styles.text}>Address</Text>
                    <TextInput
                        style={styles.txtinput}
                        placeholder=""
                        value={address}
                        onChangeText={setAddress}
                    />
                    {addressError !== '' && <Text style={styles.error}>{addressError}</Text>}
                </View>

                <TouchableOpacity style={styles.updatebtn} onPress={handleUpdate}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>Update</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: '3%',
    },
    text: {
        fontWeight: '600',
        marginTop: '2%'
    },
    txtinput: {
        marginTop: 5,
        backgroundColor: '#fff',
        flex: 1,
        fontSize: 17,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
    },
    updatebtn: {
        backgroundColor: '#ff7235',
        justifyContent: 'center',
        marginTop: '2%',
        alignSelf: 'center',
        alignItems: 'center',
        padding: '2%',
        width: '50%',
        borderRadius: 15
    },
    error: {
        color: 'red',
    }
})

