import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'

const CategoryScreen = ({navigation}) => {
    const data = [
        { id: '1', title: 'House cleaning', icon: require('../../asset/icons/houseclean.png') },
        { id: '2', title: 'Carpenter', icon: require('../../asset/icons/carpenter.png') },
        { id: '3', title: 'Beauty', icon: require('../../asset/icons/beauty.png') },
        { id: '4', title: 'AC Repair', icon: require('../../asset/icons/ac-repair.png') },
        { id: '5', title: 'Electrician', icon: require('../../asset/icons/electrician.png') },
        { id: '6', title: 'Home painting', icon: require('../../asset/icons/painter.png') },
        { id: '7', title: 'Repair', icon: require('../../asset/icons/repair.png') },
        { id: '8', title: 'Cleaning', icon: require('../../asset/icons/cleaning.png') },
        { id: '9', title: 'Carpenter', icon: require('../../asset/icons/carpenter.png') },
        { id: '10', title: 'Electrician', icon: require('../../asset/icons/electrician.png') },

    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.cardContiner} onPress={() => navigation.navigate('ViewService')}>
            <View style={styles.imageContiner}>
                <Image source={item.icon} style={styles.serviceIcon} />
                <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>

            <TouchableOpacity>   
            <View style={{ flexDirection: 'row' }}>
            <Entypo
                        name='location-pin'
                        size={30}
                        color='#000'
                     />
                <Text style={styles.address}>123 Main St,City,Country</Text>
            </View>
            </TouchableOpacity> 

            <View style={styles.inputContainer}>
                <TouchableOpacity>
                    <Icon name="search" size={24} color='#000' style={styles.searchIcon} />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Type service name here..."
                    placeholderTextColor="#888"
                />
            </View>
            <Text style={styles.allsrvc}>All Services...</Text>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={false}
                numColumns={4}
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
        marginVertical: '2%',
        paddingHorizontal: '3%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, 
    },
    address:{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: '3%' 
    },
    input: {
        flex: 1,
        paddingVertical: '2%',
        fontSize: 16,
    },
    searchIcon: {
        marginRight: '2%',
    },
    locIcon:{
        backgroundColor:'#fff',
        padding:'2%',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, 
    },
   
    allsrvc: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: '6%'
    },
    cardContiner: {
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
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    serviceIcon: {
        width: 50,
        height: 50,
    },
});

