import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LeftArrow from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import data from '../../asset/data/data'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeartComponent from '../../component/HeartComponent'
const ViewService = () => {
    const [searchText, setSearchText] = useState('');
    const renderItem = ({ item }) => {
        return (

            <View style={styles.listContainer}>
                <View style={styles.name}>
                    <Text style={styles.total}>Name : {item.name}</Text>
                    <View>
                        <HeartComponent />
                    </View>
                </View>
                <Text style={styles.total}>Contact No : {item.contactNumber}</Text>
                <Text style={styles.total}>Service Type : {item.serviceType}</Text>
                <Text style={styles.total}>Address : {item.address}</Text>

            </View>
        )
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.lefticon}>
                        <LeftArrow
                            name='arrow-left'
                            size={20}
                            color='#fff'
                        />
                    </TouchableOpacity>
                    <Text style={styles.service}>Service</Text>
                </View>
                <View style={styles.location}>
                    <Entypo
                        name='location-pin'
                        size={40}
                        color='#ff7235'
                    />
                    <Text style={styles.total}>444 Walnut St, City, Country</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="search" size={24} color="gray" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Search..."
                        placeholderTextColor="gray"
                        onChangeText={text => setSearchText(text)}
                        value={searchText}
                    />
                </View>
                <View>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={1}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default ViewService

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '4%'
    },
    lefticon: {
        backgroundColor: '#000',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '2%',
        width: '12%',
        borderRadius: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '2%'
    },
    service: {
        marginLeft: '30%',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    listContainer: {
        flex: 1,
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        padding: 5,
        paddingBottom: '4%'
    },
    total: {
        color: '#000',
        fontWeight: 'bold',
        //paddingLeft: '5%',
        fontSize: 15
    },
    name: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '2%'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 15,
        color: 'black',
    },
    icon: {
        marginLeft: 10,
    },

})