import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFocusEffect } from '@react-navigation/native';

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

        const phoneNumberpattern = /^[7-9][0-9]{9}$/;
        if (!phoneNumber || !phoneNumberpattern.test(phoneNumber)) {
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
    useFocusEffect(
        React.useCallback(() => {
            return () => {
                setFullNameError('');
                setPhoneNumberError('');
                setAreaError('');
                setAddressError('');

            };
        }, [])
    );
    return (
        <ScrollView>
            <View style={styles.Container}>

                <Text style={styles.text}>Full Name</Text>
                <View style={styles.txtinput}>
                    <TextInput
                        style={styles.txtfield}
                        placeholder="Enter your name"
                        value={fullName}
                        onChange={(text) => setFullName(text)}
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
                        onChangeText={(text) => setPhoneNumber(text)}
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
                        onChangeText={(text) => setArea(text)}
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
                        placeholder="Enter your Address"
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                </View>
                {addressError !== '' && <Text style={styles.error}>{addressError}</Text>}

                <TouchableOpacity style={styles.updatebtn} onPress={handleUpdate}>
                    <Text style={styles.btn}>Update</Text>
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
        fontSize: 15,
        color: '#000',
        padding: '2%'
    },
    txtfield: {
        marginLeft: '2%',
        color: '#000'
    },
    txtinput: {
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
        justifyContent: 'center',

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
        padding: '3%',
        width: '50%',
        borderRadius: 15,
    },
    error: {
        color: 'red',
    },
    btn: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    }
})


