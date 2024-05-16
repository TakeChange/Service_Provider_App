import { ScrollView, StyleSheet, Text, View, TouchableOpacity,TextInput,searchText,FlatList} from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from './data';

const FavouriteService = () => {
    const [searchText, setSearchText] = useState('');
    const renderItem = ({ item }) => {
        return (
            <View style={styles.listContainer}>
                <Text style={styles.total}>Name : {item.name}</Text>
                <Text style={styles.total}>Contact No : {item.contactNumber}</Text>
                <Text style={styles.total}>Service Type : {item.serviceType}</Text>
                <Text style={styles.total}>Address : {item.address}</Text>
            </View>
        )
    }
    return (
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.title}>
        <Text style={styles.service}>Favourite Services</Text>
        </View>
        <View style={styles.inputContainer}>
                <Ionicons name="search" size={24} color="#ffffff" style={styles.searchicon} />
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

export default FavouriteService

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',

    },
    title:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:'2%'
        
    },
    icon:{
        backgroundColor:'#000',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:'2%',
        width:'12%',
        borderRadius:10
    },
    service: {
        marginLeft: '18%',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 15, 
        alignItems:'center',
        marginTop:10
      },
      input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 17,
        color: 'black',
       
      },
      searchicon:{
       color:'gray',
       marginLeft:10
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
        elevation: 10,
        padding: 5,
        paddingBottom: '10%',
    },
    total: {
        color: '#000',
        fontWeight: 'bold',
        paddingLeft: '5%',
        fontSize: 17
    },
    
})