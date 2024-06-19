
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';

const CategoryScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://raviscyber.in/Sevakalpak/index.php/Services/GetAllServices')
            .then(response => {
                if (response.data.status === 'success') {
                    setData(response.data.service);
                } else {
                    console.error('Failed to fetch services');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('ViewService')}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: `https://raviscyber.in/Sevakalpak/index.php/Services/GetAllServices${item.serviceimg}` }} 
                    style={styles.serviceIcon} 
                    onError={() => console.warn(`Failed to load image: ${item.serviceimg}`)}
                />
                <Text style={styles.cardTitle}>{item.service}</Text>
            </View>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.location}>
                <Entypo
                    name='location-pin'
                    size={25}
                    color='#000'
                />
                <Text style={styles.address}>123 Main St, City, Country</Text>
            </View>
            <View style={styles.inputContainer}>
                <Icon name="search" size={24} color='#000' style={styles.searchIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Type service name here..."
                    placeholderTextColor="#888"
                />
            </View>
            <Text style={styles.allServices}>All Services</Text>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={false}
                numColumns={3}
            />
        </View>
    );
};

export default CategoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '4%'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: '3%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '3%'
    },
    address: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    input: {
        flex: 1,
    },
    searchIcon: {
        marginLeft: '3%'
    },
    locIcon: {
        backgroundColor: '#fff',
        padding: '2%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    allServices: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: '4%'
    },
    cardContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: '4%',
        margin: '1%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 5,
        shadowRadius: 5,
    },
    cardTitle: {
        fontSize: 8,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#000',
        textAlign: 'center',
    },
    serviceIcon: {
        width: 50,
        height: 50,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
