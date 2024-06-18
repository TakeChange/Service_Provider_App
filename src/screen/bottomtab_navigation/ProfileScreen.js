// import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { useFocusEffect } from '@react-navigation/native';
// import Entypo from 'react-native-vector-icons/Entypo';
// import axios from 'axios';

// const ProfileScreen = () => {
//     const [fullName, setFullName] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [area, setArea] = useState('');
//     const [address, setAddress] = useState('');

//     const [fullNameError, setFullNameError] = useState('');
//     const [phoneNumberError, setPhoneNumberError] = useState('');
//     const [areaError, setAreaError] = useState('');
//     const [addressError, setAddressError] = useState('');

//     const showToast = (message) => {
//         ToastAndroid.show(message, ToastAndroid.SHORT);
//     };

//     const handleUpdate = () => {
//         let isValid = true;

//         if (fullName == '') {
//             setFullNameError('Enter your full name');
//             isValid = false;
//         } else {
//             setFullNameError('');
//         }

//         const phoneNumberPattern = /^[7-9][0-9]{9}$/;
//         if (!phoneNumber || !phoneNumberPattern.test(phoneNumber)) {
//             setPhoneNumberError('Enter a valid 10-digit mobile number');
//             isValid = false;
//         } else {
//             setPhoneNumberError('');
//         }

//         if (area == '') {
//             setAreaError('Enter your area');
//             isValid = false;
//         } else {
//             setAreaError('');
//         }

//         if (address == '') {
//             setAddressError('Enter your address');
//             isValid = false;
//         } else {
//             setAddressError('');
//         }

//         if (isValid) {
//             showToast('Profile Updated Successfully!');
//         }
//     };

//     useFocusEffect(
//         React.useCallback(() => {
//             return () => {
//                 setFullNameError('');
//                 setPhoneNumberError('');
//                 setAreaError('');
//                 setAddressError('');
//             };
//         }, [])
//     );

//     useEffect(()=>{
//         fetchData();
//       },[])
    
//       const fetchData = async () => {
//         try {
//           const UpdateUser = 'https://raviscyber.in/Sevakalpak/index.php/User/UpdateUser'
//           const response = await axios.get(UpdateUser, {
//             // headers: {
//             //   "Content-Type": "multipart/form-data",
//             // },
//           });
//           console.log("Response here:", response.data); // Log the response data
//          // console.log(response.data)
//         } catch (error) {
//          console.error('Error fetching data:', error);
//         }
//       };
    

//     return (
//         <ScrollView>
//             <View style={styles.Container}>

//                 <Text style={styles.text}>Full Name</Text>
//                 <View style={styles.txtinput}>
//                     <TextInput
//                         style={styles.txtfield}
//                         placeholder="Enter your name"
//                         value={fullName}
//                         onChangeText={(text) => setFullName(text)}
//                     />
//                 </View>
//                 <Text style={styles.error}>{fullNameError}</Text>

//                 <Text style={styles.text}>Mobile Number</Text>
//                 <View style={styles.txtinput}>
//                     <TextInput
//                         style={styles.txtfield}
//                         placeholder="Enter your mobile number"
//                         value={phoneNumber}
//                         keyboardType="numeric"
//                         maxLength={10}
//                         onChangeText={(text) => setPhoneNumber(text)}
//                     />
//                 </View>
//                 <Text style={styles.error}>{phoneNumberError}</Text>

//                 {/* Uncomment and fix GooglePlacesAutocomplete if needed */}
//                 <Text style={styles.text}>Area</Text>
//                 <View style={styles.inputContainer}>
//                     <Entypo name='location-pin' size={24} color='#000' style={styles.icon} />
//                     <TextInput
//                         style={styles.txtfield}
//                         placeholder="Enter location"
//                         value={area}
//                         onChangeText={(text) => setArea(text)}
//                     />
//                     <View>
//                         <GooglePlacesAutocomplete
//                             debounce={400}
//                             query={{
//                                 key: 'API_KEY',
//                                 language: 'en'
//                             }}
//                             styles={{
//                                 container: {
//                                     flex: 1,
//                                 },
//                                 listView: {
//                                     position: 'absolute',
//                                     top: 50,
//                                 },
//                             }}
//                         />
//                     </View>
//                 </View>
//                 <Text style={styles.error}>{areaError}</Text>

//                 <Text style={styles.text}>Area</Text>
//                 <View style={styles.txtinput}>
//                     <TextInput
//                         style={styles.txtfield}
//                         placeholder="Enter your Area"
//                         value={address}
//                         onChangeText={(text) => setAddress(text)}
//                     />
//                 </View>
//                 <Text style={styles.error}>{addressError}</Text>

//                 <TouchableOpacity style={styles.updatebtn} onPress={handleUpdate}>
//                     <Text style={styles.btn}>Update</Text>
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>
//     );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
//     Container: {
//         flex: 1,
//         padding: '5%',
//     },
//     text: {
//         fontWeight: '600',
//         fontSize: 15,
//         color: '#000',
//         padding: '2%'
//     },
//     txtfield: {
//         marginLeft: '2%',
//         color: '#000'
//     },
//     txtinput: {
//         color: '#000',
//         marginTop: 5,
//         backgroundColor: '#fff',
//         fontSize: 15,
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 4,
//         elevation: 5,
//         justifyContent: 'center',
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginTop: 5,
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     icon: {
//         marginLeft: 10,
//     },
//     updatebtn: {
//         backgroundColor: '#009eb4',
//         justifyContent: 'center',
//         marginTop: '10%',
//         alignSelf: 'center',
//         alignItems: 'center',
//         padding: '3%',
//         width: '50%',
//         borderRadius: 15,
//     },
//     error: {
//         color: 'red',
//     },
//     btn: {
//         fontWeight: 'bold',
//         fontSize: 20,
//         color: '#fff'
//     }
// });










import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import { ListItem } from 'react-native-elements';

const ProfileScreen = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [area, setArea] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [areaError, setAreaError] = useState('');
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    const handleUpdate = () => {
        let isValid = true;

        if (fullName.trim() === '') {
            setFullNameError('Enter your full name');
            isValid = false;
        } else {
            setFullNameError('');
        }

        const phoneNumberPattern = /^[7-9][0-9]{9}$/;
        if (!phoneNumber || !phoneNumberPattern.test(phoneNumber)) {
            setPhoneNumberError('Enter a valid 10-digit mobile number');
            isValid = false;
        } else {
            setPhoneNumberError('');
        }

        if (area.trim() === '') {
            setAreaError('Enter your area');
            isValid = false;
        } else {
            setAreaError('');
        }

        if (isValid) {
            updateUser();
        }
    };

    const updateUser = async () => {
        try {
            const response = await axios.post('https://raviscyber.in/Sevakalpak/index.php/User/UpdateUser/2', {
                fullName: fullName,
                phoneNumber: phoneNumber,
                area: area,
                contact: 'value_here', // Replace with actual value for contact
                aadhar: 'value_here',  // Replace with actual value for aadhar
                id: 'value_here'       // Replace with actual value for id
            });

            if (response.data.status === 'success') {
                showToast('Profile Updated Successfully!');
            } else {
                showToast('Update failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            showToast('An error occurred. Please try again.');
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                setFullNameError('');
                setPhoneNumberError('');
                setAreaError('');
            };
        }, [])
    );

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

    const handleSearch = (text) => {
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

    return (
        <View style={styles.Container}>
            <Text style={styles.text}>Full Name</Text>
            <View style={styles.txtinput}>
                <TextInput
                    style={styles.txtfield}
                    placeholder="Enter your name"
                    value={fullName}
                    onChangeText={(text) => setFullName(text)}
                />
            </View>
            <Text style={styles.error}>{fullNameError}</Text>

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
            <Text style={styles.error}>{phoneNumberError}</Text>

            <Text style={styles.text}>Area</Text>
            <View style={styles.inputContainer}>
                <Entypo name='location-pin' size={24} color='#000' style={styles.icon} />
                <TextInput
                    style={styles.txtfield}
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
            <Text style={styles.error}>{areaError}</Text>

            <TouchableOpacity style={styles.updatebtn} onPress={handleUpdate}>
                <Text style={styles.btn}>Update</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;

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
    },
    listContainer: {
        borderRadius: 10,
        maxHeight: 200,
        marginTop: 5,
    }
});



