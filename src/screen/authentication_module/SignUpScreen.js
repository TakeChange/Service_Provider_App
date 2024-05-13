import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PhoneInput from "react-native-phone-number-input";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo';

const SignUpScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.mainIcon}>
                    <View style={styles.Icon}>
                        <FontAwesome5 name="user" size={30} color="#ffffff" style={{ padding: 10 }} />
                    </View>
                </View>

                <View style={styles.txtstyle}>
                    <Text style={styles.Hellotxt}>Hello, User</Text>
                    <Text style={styles.Acctxt}>Create an Account</Text>
                </View>

                    <Text style={styles.text} >Full Name</Text>
                    <TextInput
                    style={styles.txtinput}
                        placeholder=""
                    />
                <Text style={styles.text}>Mobile Number</Text>
                <View style={styles.Numberinput}>
                    <PhoneInput
                        defaultValue={phoneNumber}
                        defaultCode='IN'
                    />
                    <TouchableOpacity onPress={() => { Alert.alert(phoneNumber) }}>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>Adhar Number</Text>
                <TextInput
                    style={styles.txtinput}
                    placeholder=""
                    keyboardType='numeric'
                />
                <Text style={styles.text}>Address</Text>
                <TextInput
                    style={styles.txtinput}
                    placeholder=""
                />
                <Text style={styles.text}>Area</Text>
                <View style={styles.txtinput}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Entypo name='location-pin' size={30} color='#ff7235' />
                        <GooglePlacesAutocomplete
                            placeholder='Search Area'
                            debounce={400}
                            query={{
                                key: 'API_KEY',
                                language: 'en'
                            }}

                        />
                    </View>
                </View>
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.txtinput}
                    placeholder=""
                />
                <Text style={styles.text}>Confirm Password</Text>
                <TextInput
                    style={styles.txtinput}
                    placeholder=""
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('App_Drawer_Navigation')}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <View style={styles.msg}>
                    <Text style={{ color: '#6d767a', fontWeight: '700' }}>Already have an account?</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#FF7235', fontWeight: '700' }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '8%',

    },
    mainIcon: {
        alignItems: 'center'
    },
    Icon: {
        alignItems: 'center',
        backgroundColor: '#FF7235',
        height: 50,
        width: 50,
        borderRadius: 40,

    },
    Hellotxt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        justifyContent: 'center',
        textAlign: 'center'
    },
    Acctxt: {
        fontSize: 18,
        color: '#000',
        justifyContent: 'center',
        textAlign: 'center'
    },
    txtstyle: {
        fontSize: 15,
        fontWeight: '800',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center'
    },
    txtinput: {
        color: '#000000',
        marginTop: 5,
        backgroundColor: '#ffffff',
        flex: 1,
        fontSize: 15,
        paddingLeft: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',

    },
    button: {
        height: 50,
        backgroundColor: '#ff7235',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',

    },
    text: {
        fontWeight: '600',
        marginTop: 8,
        fontSize: 16
    },
    msg: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    },
    Numberinput: {
        height: 51,
        color: '#000000',
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
    }
})