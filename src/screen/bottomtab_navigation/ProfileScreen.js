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
        <ScrollView>
            <View style={styles.Container}>

                <Text style={styles.text}>Full Name</Text>
                <View style={styles.txtinput}>
                    <TextInput
                        style={styles.txtfield}
                        placeholder=""
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </View>
                {fullNameError !== '' && <Text style={styles.error}>{fullNameError}</Text>}

                <Text style={styles.text}>Mobile Number</Text>
                <View style={styles.numberinput}>
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
                <View style={styles.txtinput}>
                    <TextInput
                        style={styles.txtfield}
                        placeholder=""
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}

                    />
                </View>
                {confirmPasswordError !== '' && <Text style={styles.error}>{confirmPasswordError}</Text>}


                <Text style={styles.text}>Area</Text>
                <View style={styles.inputContainer}>
                    <Entypo name='location-pin' size={24} color='#000' style={styles.icon} />
                    <TextInput
                        placeholder="Enter location"
                        value={area}
                        onChangeText={setArea}
                    />
                    <View>
                        <GooglePlacesAutocomplete
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
                {areaError !== '' && <Text style={styles.error}>{areaError}</Text>}

                <Text style={styles.text}>Address</Text>
                <View style={styles.txtinput}>
                    <TextInput
                        style={styles.txtfield}
                        placeholder=""
                        value={address}
                        onChangeText={setAddress}
                    />
                </View>
                {addressError !== '' && <Text style={styles.error}>{addressError}</Text>}

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
        padding: '5%',
    },
    text: {
        fontWeight: '600',
        fontSize: 17
    },
    txtfield: {
        marginLeft: '2%',
        color: '#000'
    },
    txtinput: {
        marginTop: 5,
        backgroundColor: '#fff',
        flex: 1,
        height: '50%',
        fontSize: 17,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    numberinput: {
        height: 65,
        textcolor: '#000',
        marginTop: 5,
        backgroundColor: '#ffffff',
        flex: 1,
        fontSize: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    icon: {
        marginLeft: 10,
    },
    updatebtn: {
        backgroundColor: '#009eb4',
        justifyContent: 'center',
        marginTop: '10%',
        alignSelf: 'center',
        alignItems: 'center',
        padding: '2%',
        width: '50%',
        borderRadius: 15
    },
    error: {
        color: 'red',
    },

})









