import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
    const [uname, setuName] = useState('');
    const [unameErr, setuNameErr] = useState('');
    const [mobile, setMobile] = useState('');
    const [mobileErr, setMobileErr] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [aadharErr, setAadharErr] = useState('');
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
        if (mobile == '') {
            setMobileErr('Mobile do not empty');
            isValid = false;
        }
        else {
            setMobileErr('');
        }
        if (aadhar == '') {
            setAadharErr('Aadhar Number do not empty');
            isValid = false;
        }
        else {
            setAadharErr('');
        }
        if (area == '') {
            setAreaErr('Area do not empty');
            isValid = false;
        }
        else {
            setAreaErr('');
        }
        if (isValid) {
            storeData('');
        }
        
    }
    const storeData = async () => {
        try {
            await AsyncStorage.setItem('username', uname);
            await AsyncStorage.setItem('Mobile', mobile);
            await AsyncStorage.setItem('Aadhar', aadhar);
            await AsyncStorage.setItem('Area', area);
            getData();
            ToastAndroid.show('SignUp successfully', ToastAndroid.LONG);
            navigation.navigate('SignInScreen')
        }
        catch (e) {
            console.log(e);
        }
    }
    const getData = async () => {
        try {
            var username = await AsyncStorage.getItem('username');
            var Mobile = await AsyncStorage.getItem('Mobile');
            var aadhar = await AsyncStorage.getItem('Aadhar');
            var Area = await AsyncStorage.getItem('Area');

            console.log('Username :', username)
            console.log('Mobile :', Mobile)
            console.log('aadhar :', aadhar)
            console.log('area :', Area)
        }
        catch (e) {
            console.log(e);
        }
    }
    useFocusEffect(
        React.useCallback(() => {
            return () => {
                // Reset errors when navigating away from screen
                setuNameErr('');
                setMobileErr('');
                setAadharErr('');
                setAreaErr('');
                
            };
        }, [])
    );
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.mainIcon}>
                    <View style={styles.Icon}>
                        <FontAwesome5 name="user" size={30} color="#ffffff" style={styles.icontop} />
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
                        maxLength={12}
                        value={aadhar}
                        onChangeText={(text) => setAadhar(text)}
                    />
                </View>
                <Text style={styles.error}>{aadharErr}</Text>

                <Text style={styles.text}>Area</Text>
                <View style={styles.inputContainer}>
                    <Entypo name='location-pin' size={24} color='#000' style={styles.icon} />
                    <TextInput
                        style={styles.textfield}
                        placeholder="Enter location"
                        value={area}
                        onChangeText={(text) => setarea(text)}
                    />
                    <View>
                        <GooglePlacesAutocomplete
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
                <Text style={styles.error}>{areaErr}</Text>
                <TouchableOpacity style={styles.button} onPress={Validation}>
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
        marginTop: 3,
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
    icontop: {
        padding: 10,
    }
})