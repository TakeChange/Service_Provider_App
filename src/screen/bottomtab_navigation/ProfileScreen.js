import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import PhoneInput from "react-native-phone-number-input";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo';

const ProfileScreen = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [area, setArea] = useState('');
    const [address, setAddress] = useState('');

    const [fullNameError, setFullNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
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

        const phoneNumberRegex = /^[0-9]{10}$/;
        if (!phoneNumber || !phoneNumberRegex.test(phoneNumber)) {
            setPhoneNumberError('Enter a valid 10-digit mobile number');
            isValid = false;
        } else {
            setPhoneNumberError('');
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

                <View style={styles.txtinput}>
                    <TextInput
                        style={styles.txtfield}
                        placeholder="Enter your mobile number"
                        value={phoneNumber}
                        keyboardType="numeric"
                        maxLength={10}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                {phoneNumberError !== '' && <Text style={styles.error}>{phoneNumberError}</Text>}


                <Text style={styles.text}>Area</Text>
                <View style={styles.inputContainer}>
                    <Entypo name='location-pin' size={24} color='#000' style={styles.icon} />
                    <TextInput
                        style={styles.txtfield}
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
        fontSize: 17,
        color: '#000',
        padding: '2%'
    },
    txtfield: {
        marginLeft: '2%',
        color: '#000'
    },
    txtinput: {
        height: 56,
        color: '#000',
        marginTop: 5,
        backgroundColor: '#fff',
        fontSize: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,

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
        height: 56,

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
        borderRadius: 15,
        height: 56,

    },
    error: {
        color: 'red',
    },

})













