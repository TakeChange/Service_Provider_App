import { ScrollView, StyleSheet, Text, View, TouchableOpacity,TextInput,searchText,FlatList} from 'react-native'
import React, { useState,useContext  } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../../asset/data/data';
import FavoriteContext from '../context/FavoriteContext';

const FavouriteService = ({ route }) => {
    const { favorites } = useContext(FavoriteContext);
  
    const renderItem = ({ item }) => (
      <View style={styles.listContainer}>
        <Text style={styles.total}>Name : {item.name}</Text>
        <Text style={styles.total}>Contact No : {item.contact}</Text>
        <Text style={styles.total}>Service Type : {item.service}</Text>
        <Text style={styles.total}>Address : {item.address}</Text>
        <Text style={styles.total}>Area : {item.area}</Text>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Favorite Services</Text>
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };
  
  export default FavouriteService;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: '4%',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 20,
    },
    listContainer: {
      flex: 1,
      backgroundColor: 'white',
      margin: 8,
      borderRadius: 10,
      borderColor: '#009eb4',
      borderWidth: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
      padding: 10,
      paddingBottom: '4%',
    },
    total: {
      color: '#000',
      fontWeight: '500',
      fontSize: 16,
    },
  });