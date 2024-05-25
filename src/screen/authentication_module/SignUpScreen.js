import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFocusEffect } from '@react-navigation/native';
const SignUpScreen = ({ navigation }) => {
    const [uname, setuName] = useState('');
    const [unameErr, setuNameErr] = useState('');
    const [mobile, setMobile] = useState('');
    const [mobileErr, setMobileErr] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [aadharErr, setAadharErr] = useState('');
    const [adress, setaddress] = useState('');
    const [addressErr, setAdressErr] = useState('');
    const [area, setarea] = useState('');
    const [areaErr, setAreaErr] = useState('');

    const Validation = () => {
        var isValid = true;
        if (uname == '') {
            setuNameErr('Name do not empty');
            isValid = false;
        } else {
            setuNameErr('');
        }
        if (isValid) {

        }
    }

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                // Reset errors when navigating away from screen
                setuNameErr('');
            };
        }, [])
    );
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
                <View style={styles.txtinput}>
                    <TextInput
                        style={styles.textfield}
                        placeholder="Enter Your Name"
                        value={uname}
                        onChangeText={(text) => setuName(text)}
                    />
                </View>
                <Text style={styles.error}>{unameErr}</Text>
                <Text style={styles.text}>Mobile Number</Text>
                <View style={styles.txtinput}>
                    <TextInput
                        style={styles.textfield}
                        placeholder="Enter mobile Number"
                        keyboardType='numeric'
                        maxLength={10}
                        value={mobile}
                        onChangeText={(text) => setMobile(text)}
                    />
                </View>
                <Text style={styles.error}>{mobileErr}</Text>
                <Text style={styles.text}>Aadhar Number</Text>
                <View style={styles.txtinput}>
                    <TextInput
                        style={styles.textfield}
                        placeholder="Enter Your Aadhar Number"
                        keyboardType='numeric'
                        maxLength={10}
                        value={aadhar}
                        onChangeText={(text) => setAadhar(text)}
                    />
                </View>
                <Text style={styles.error}>{addressErr}</Text>
                <Text style={styles.text}>Address</Text>
                <View style={styles.txtinput}>
                    <TextInput
                        style={styles.textfield}
                        placeholder="Enter Your Address"
                        value={adress}
                        onChangeText={(text) => setaddress(text)}
                    />
                </View>
                <Text style={styles.error}>{addressErr}</Text>
                <Text style={styles.text}>Area</Text>
                <View style={styles.txtinput}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Entypo name='location-pin' size={30} color='#000' />
                        <GooglePlacesAutocomplete
                            placeholder='Search Area'
                            debounce={400}
                            query={{
                                key: 'API_KEY',
                                language: 'en'
                            }}
                            value={area}
                            onChangeText={(text) => setarea(text)}
                        />
                    </View>
                    <Text style={styles.error}>{areaErr}</Text>
                </View>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('App_Drawer_Navigation')}
                // onPress={Validation}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <View style={styles.msg}>
                    <Text style={styles.txtname1}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        <Text style={styles.txtname2}> Login</Text>
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
        backgroundColor: '#009eb4',
        height: 50,
        width: 50,
        borderRadius: 40,

    },
    Hellotxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        justifyContent: 'center',
        textAlign: 'center'
    },
    Acctxt: {
        fontSize: 17,
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
        height: 56,
        color: '#000000',
        marginTop: 4,
        backgroundColor: '#ffffff',
        fontSize: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'center',

    },
    textfield: {
        marginLeft: '2%',
        fontSize: 15,
        color: '#000'
    },
    button: {
        height: 50,
        backgroundColor: '#009eb4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: '12%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',

    },
    text: {
        color: '#000',
        fontWeight: '600',
        marginTop: 8,
        fontSize: 15
    },
    Numberinput: {
        flex: 1,
        height: 67,
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
    },
    msg: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '2%'
    },
    txtname1: {
        color: '#6d767a',
        fontWeight: 'bold',
        marginLeft: '5%'
    },
    txtname2: {
        color: '#009eb4',
        fontWeight: 'bold'
    },
    error: {
        color: 'red',
        marginHorizontal: 10,
        marginTop: '1%'
    }
})