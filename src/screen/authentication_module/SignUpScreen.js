import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, ToastAndroid, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
import { REGISTER_USER } from '../../constant/App_constant';
import {  postAllDataRequest } from '../../api/Api_constant';

const SignUpScreen = ({ navigation }) => {
    const [uname, setuName] = useState('');
    const [unameErr, setuNameErr] = useState('');
    const [mobile, setMobile] = useState('');
    const [mobileErr, setMobileErr] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [aadharErr, setAadharErr] = useState('');
    const [area, setarea] = useState('');
    const [areaErr, setAreaErr] = useState('');

    const validateMobile = () => {
        const mobileNumberPattern = /^[6-9]\d{9}$/;
        if (!mobileNumberPattern.test(mobile)) {
            setMobileErr('Please enter a valid 10-digit mobile number.');
        } else {
            setMobileErr('');
        }
    };

    const RegisterUser = async () => {
        const param = {
            name: uname,
            contact: mobile,
            aadhar: aadhar,
            area: area,
            role:'',
            address:''
        };
        console.log('param :: ', param);
        try {
            const response = await postAllDataRequest(REGISTER_USER,param);
            console.log('res', response);
            const { status, message } = response.data;
            console.log('res', message);
            if (status === "success") {
                //console.log(response.data);
              ToastAndroid.show(message, ToastAndroid.SHORT);
            } else {
              console.error('registration failed:', message);
              ToastAndroid.show(message, ToastAndroid.SHORT);
            }
          } catch (error) {
            console.log('error', error.response)
            ToastAndroid.show('Please enter valid mobile number', ToastAndroid.SHORT);
          }
        };

    const Validation = () => {
        var isValid = true;
        if (uname === '') {
            setuNameErr('Name cannot be empty');
            isValid = false;
        } else {
            setuNameErr('');
        }
        if (mobile.trim() === '') {
            setMobileErr('Mobile number cannot be empty');
            isValid = false;
        } else {
            validateMobile(); 
        }
        if (aadhar === '') {
            setAadharErr('Aadhar Number cannot be empty');
            isValid = false;
        } else {
            setAadharErr('');
        }
        if (area === '') {
            setAreaErr('Area cannot be empty');
            isValid = false;
        } else {
            setAreaErr('');
        }
        if (isValid) {
            RegisterUser(); 
            //storeData();
            navigation.navigate('SignInScreen') 
        }
    };
    
    useFocusEffect(
        React.useCallback(() => {
            return () => {
                setuNameErr('');
                setMobileErr('');
                setAadharErr('');
                setAreaErr('');
            };
        }, [])
    );

    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const getUser = 'https://raviscyber.in/Sevakalpak/index.php/Areas/GetAllAreas';
            const response = await axios.get(getUser, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const { status, data } = response.data;
            const sorted = data.sort((a, b) => {
                const nameA = a.area.toLowerCase();
                const nameB = b.area.toLowerCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            setData(sorted);
            setSortedData(sorted);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = text => {
        setSearch(text);
        if (text.trim() === '') {
            setData([]);
        } else {
            const filtered = sortedData.filter(item =>
                item.area.toLowerCase().startsWith(text.toLowerCase())
            );
            setData(filtered);
        }
    };

    const handleItemClick = (item) => {
        setarea(item);
        setSearch(item);
        setData([]);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemClick(`${item.area}`)}>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{`${item.area}`}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
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
                <Text style={styles.text}>Full Name</Text>
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
                        onBlur={validateMobile}
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
                        onChangeText={handleSearch}
                        onSubmitEditing={() => handleSearch(search)}
                        value={search}
                        
                    />
                </View>
                {search.trim() !== '' && (
                    <View style={styles.listContainer}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        style={styles.list}
                        showsVerticalScrollIndicator={true}
                        nestedScrollEnabled={true}
                    />
                    </View>
                )}
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
    );
};

export default SignUpScreen;

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
        color: '#000',
        flex: 1,
    },
    button: {
        height: 50,
        backgroundColor: '#009eb4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: '10%',
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
        paddingRight: 10,
    },
    icon: {
        marginLeft: 10,
    },
    icontop: {
        padding: 10,
    },
    listContainer: {
        borderRadius: 10,
        maxHeight: 200,
        marginTop: 5,
    }
});
