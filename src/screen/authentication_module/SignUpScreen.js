import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, ToastAndroid, FlatList, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import LeftArrow from 'react-native-vector-icons/Feather';
import { useFocusEffect } from '@react-navigation/native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';
import { REGISTER_USER, REGISTER_VENDOR } from '../../constant/App_constant';
import { postAllDataRequest } from '../../api/Api_constant';

const SignUpScreen = ({ navigation }) => {
    const [uname, setuName] = useState('');
    const [unameErr, setuNameErr] = useState('');
    const [mobile, setMobile] = useState('');
    const [mobileErr, setMobileErr] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [aadharErr, setAadharErr] = useState('');
    const [area, setArea] = useState('');
    const [areaErr, setAreaErr] = useState('');
    const [service, setService] = useState('');
    const [serviceErr, setServiceErr] = useState('');
    const [logo, setLogo] = useState('');
    const [logoErr, setLogoErr] = useState('');
    const [profilephoto, setProfilePhoto] = useState('');
    const [profilePhotoErr, setProfilePhotoErr] = useState('');
    const [role, setRole] = useState('');
    const [roleErr, setRoleErr] = useState('');
    const [address, setAddress] = useState('');
    const [addressErr, setAddressErr] = useState('');

    const validateMobile = () => {
        const mobileNumberPattern = /^[6-9]\d{9}$/;
        if (!mobileNumberPattern.test(mobile)) {
            setMobileErr('Please enter a valid 10-digit mobile number.');
        } else {
            setMobileErr('');
        }
    };
    const RegisterUser = async () => {

        const formData = new FormData();
        formData.append('name', uname);
        formData.append('contact', mobile);
        formData.append('aadhar', aadhar);
        formData.append('area', area);
        formData.append('role', role);
        formData.append('address', address);

        // Append logo if selected
        if (logo) {
            formData.append('logo', {
                uri: logo,
                type: 'image/jpeg',
                name: 'logo.jpg',
            });
        }


        if (profilephoto) {
            formData.append('profilephoto', {
                uri: profilephoto,
                type: 'image/jpeg',
                name: 'profilephoto.jpg',
            });
        }

        try {
            const response = await axios.post(REGISTER_VENDOR, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Response:', response.data);

            const { status, message } = response.data;

            if (status === 'success') {
                ToastAndroid.show(message, ToastAndroid.SHORT);
                navigation.navigate('SignInScreen');
            } else {
                console.error('Registration failed:', message);
                ToastAndroid.show(message, ToastAndroid.SHORT);
            }
        } catch (error) {
            console.error('Error:', error.response);
            ToastAndroid.show('Failed to register. Please try again.', ToastAndroid.SHORT);
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
        if (service === '') {
            setServiceErr('Service cannot be empty');
            isValid = false;
        } else {
            setServiceErr('');
        }
        // if (logo === '') {
        //     setLogoErr('Logo cannot be empty');
        //     isValid = false;
        // } else {
        //     setLogoErr('');
        // }
        // if (profilephoto === '') {
        //     setProfilePhotoErr('Profile Photo cannot be empty');
        //     isValid = false;
        // } else {
        //     setProfilePhotoErr('');
        // }
        if (role === '') {
            setRoleErr('Logo cannot be empty');
            isValid = false;
        } else {
            setRoleErr('');
        }
        if (address === '') {
            setAddressErr('Area cannot be empty');
            isValid = false;
        } else {
            setAddressErr('');
        }
        if (isValid) {
            RegisterUser();
            //storeData();
            //navigation.navigate('ProfileScreen')
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
        setArea(item);
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

    const selectProfilePhoto = () => {
        const options = {
            mediaType: 'photo',
        };

        launchImageLibrary(options, response => {
            handleImagePickerResponse(response, setProfilePhoto);
        });
    };

    const selectLogo = () => {
        const options = {
            mediaType: 'photo',
        };

        launchImageLibrary(options, response => {
            handleImagePickerResponse(response, setLogo);
        });
    };

    const handleImagePickerResponse = (response, setImage) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorMessage) {
            console.log('ImagePicker Error: ', response.errorMessage);
        } else {
            const uri = response.assets[0].uri;
            setImage(uri);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.leftIcon} onPress={() => navigation.navigate('OptionScreen')}>
                    <LeftArrow name='arrow-left' size={25} color='#fff' />
                </TouchableOpacity>
                <View style={styles.profileContainer}>
                    <TouchableOpacity onPress={selectProfilePhoto}>
                        {profilephoto ? (
                            <Image source={{ uri: profilephoto }} style={styles.profilePhoto} />
                        ) : (
                            <FontAwesome5 name="user" size={50} color="#ffffff" style={styles.defaultProfileIcon} />
                        )}
                    </TouchableOpacity>
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

                <Text style={styles.text}>Service</Text>
                <View style={styles.txtinput}>
                    <TextInput
                        style={styles.textfield}
                        placeholder="Enter Your Service "
                        maxLength={12}
                        value={service}
                        onChangeText={(text) => setService(text)}
                    />
                </View>
                <Text style={styles.error}>{serviceErr}</Text>

                <Text style={styles.text}>Role</Text>
                <View style={styles.txtinput}>
                    <TextInput
                        style={styles.textfield}
                        placeholder="Enter Your Role"
                        maxLength={12}
                        value={role}
                        onChangeText={(text) => setRole(text)}
                    />
                </View>
                <Text style={styles.error}>{roleErr}</Text>

                <Text style={styles.text}>Address</Text>
                <View style={styles.txtinput}>
                    <TextInput
                        style={styles.textfield}
                        placeholder="Enter Your Address "
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                </View>
                <Text style={styles.error}>{addressErr}</Text>

                <View style={styles.logoContainer}>
                    <Text style={styles.text}>Add Logo here</Text>
                    <TouchableOpacity onPress={selectLogo}>
                        {logo ? (
                            <Image source={{ uri: logo }} style={styles.logo} />
                        ) : (
                            <FontAwesome5 name="store" size={100} color="#ffffff" style={styles.defaultLogoIcon} />
                        )}
                    </TouchableOpacity>
                    {logoErr ? <Text style={styles.errorText}>{logoErr}</Text> : null}
                </View>

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
        padding: '6%',
    },
    leftIcon: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%',
        borderRadius: 10,
        alignSelf: 'flex-start',
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
    profileContainer: {
        alignItems: 'center',
        marginBottom: '5%',
    },
    profilePhoto: {
        width: 130,
        height: 130,
        borderRadius: 80,
        borderWidth: 2,
        borderColor: '#000',
    },
    defaultProfileIcon: {
        width: 130,
        height: 130,
        borderRadius: 80,
        backgroundColor: '#d3d3d3',
        textAlign: 'center',
        textAlignVertical: 'center',
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
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: '5%',
    },
    logo: {
        width: 300,
        height: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
    },
    defaultLogoIcon: {
        width: 300,
        height: 200,
        borderRadius: 10,
        backgroundColor: '#d3d3d3',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});









