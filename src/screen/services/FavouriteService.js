import { ScrollView, StyleSheet, Text, View, TouchableOpacity,TextInput,searchText,FlatList} from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../../asset/data/data';

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
                <Ionicons name="search" size={24} color="#000" style={styles.searchicon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    placeholderTextColor="#888"
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
        padding: '4%',

    },
    title:{
        marginBottom: '3%',
        alignItems: 'center',
        
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
       
        fontSize: 20,
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
        fontSize: 15,
        color: 'black',
       
      },
      searchicon:{
       marginLeft:10
      },
      listContainer: {
        flex: 1,
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 10,
        borderColor:'#009eb4',
        borderWidth:1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        padding: 10,
        paddingBottom: '4%'
    },
    total: {
        color: '#000',
        fontWeight: 'bold',
        //paddingLeft: '5%',
        fontSize: 15
    },
    
})