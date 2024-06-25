import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ToastAndroid, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import axios from "axios";
import { UPDATE_USER } from "../../constant/App_constant";
import { postAllDataRequest } from "../../api/Api_constant";
import { ListItem } from 'react-native-elements';

const ProfileScreen = () => {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [area, setarea] = useState('');
    const [address, setAddress] = useState("");

    const [fullNameError, setFullNameError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [areaErr, setAreaErr] = useState('');
    const [addressError, setAddressError] = useState("");

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };
    const handleUpdate = () => {
        let isValid = true;

        if (fullName === "") {
            setFullNameError("Enter your full name");
            isValid = false;
        } else {
            setFullNameError("");
        }
        const phoneNumberPattern = /^[7-9][0-9]{9}$/;
        if (!phoneNumber || !phoneNumberPattern.test(phoneNumber)) {
            setPhoneNumberError("Enter a valid 10-digit mobile number");
            isValid = false;
        } else {
            setPhoneNumberError("");
        }
        if (area === "") {
            setAreaErr("Enter your area");
            isValid = false;
        } else {
            setAreaErr("");
        }
        if (address === "") {
            setAddressError("Enter your address");
            isValid = false;
        } else {
            setAddressError("");
        }
        if (isValid) {
            showToast("Profile Updated Successfully!");
            const userId = " ";
            const updatedUserData = {
                name: fullName,
                contact: phoneNumber,
                aadhar: "",
                area: area,
                id: "",
                address: address,
            };
            UpdateUser(userId, updatedUserData);
        }
    };
    const UpdateUser = async (userId, updatedUserData) => {
        const param = {
            name: updatedUserData.name,
            contact: updatedUserData.contact,
            aadhar: updatedUserData.aadhar,
            area: updatedUserData.area,
            role: updatedUserData.role,
            address: updatedUserData.address,
        };
        try {
            const response = await postAllDataRequest(`${UPDATE_USER}/${userId}`, param);
            const { status, message } = response.data;
            if (status === "success") {
                ToastAndroid.show(message, ToastAndroid.SHORT);
            } else {
                console.error("Update failed:", message);
                ToastAndroid.show(message, ToastAndroid.SHORT);
            }
        } catch (error) {
            console.log("Update error", error.response);
            ToastAndroid.show("Failed to update user information", ToastAndroid.SHORT);
        }
    };
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        fetchData1();
    }, []);
    const fetchData1 = async () => {
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
    useFocusEffect(
        React.useCallback(() => {
            return () => {
                setFullNameError("");
                setPhoneNumberError("");
                setAreaErr("");
                setAddressError("");
            };
        }, [])
    );
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const UpdateUser = "https://raviscyber.in/Sevakalpak/index.php/User/UpdateUser";
            const response = await axios.get(UpdateUser);
            console.log("Response here:", response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    return (
        <ScrollView>
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
                        style={styles.textfield1}
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
                <Text style={styles.text}>Address</Text>
                <View style={styles.txtinput}>
                    <TextInput
                        style={styles.txtfield}
                        placeholder="Enter your Address"
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                </View>
                <Text style={styles.error}>{addressError}</Text>
            </View>
            <TouchableOpacity style={styles.updatebtn} onPress={handleUpdate}>
                <Text style={styles.btn}>Update</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
export default ProfileScreen;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: "5%",
    },
    text: {
        fontWeight: "600",
        fontSize: 15,
        color: "#000",
        padding: "2%",
    },
    txtfield: {
        marginLeft: "2%",
        color: "#000",
    },
    txtinput: {
        color: "#000",
        marginTop: 5,
        backgroundColor: "#fff",
        fontSize: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: "center",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    icon: {
        marginLeft: 10,
    },
    updatebtn: {
        backgroundColor: "#009eb4",
        justifyContent: "center",
        marginTop: "10%",
        alignSelf: "center",
        alignItems: "center",
        padding: "3%",
        width: "50%",
        borderRadius: 15,
    },
    error: {
        color: "red",
    },
    btn: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#fff",
    },
    textfield1: {
        fontSize: 15,
        color: '#000',
        flex: 1,
    },
    listContainer: {
        borderRadius: 10,
        maxHeight: 200,
        marginTop: 5,
    }
});







