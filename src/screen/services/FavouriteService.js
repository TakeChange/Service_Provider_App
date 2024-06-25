import { ScrollView, StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React, { useState, useContext } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../../asset/data/data';
import FavoriteContext from '../context/FavoriteContext';
import HeartComponent from '../../component/HeartComponent'


const FavouriteService = ({ }) => {
  const { favorites } = useContext(FavoriteContext);
  const { favourites, toggleFavourite } = useContext(FavoriteContext);

  const renderItem = ({ item }) => (
    <View style={styles.listContainer}>
      <View style={styles.name}>
      <Text style={styles.total}>Name : {item.name}</Text>
      <View>
        <HeartComponent  isFavorite={favorites.some(fav => fav.id === item.id)}
            onPress={() => toggleFavourite(item)} />
      </View>
      </View>
      <Text style={styles.total}>Contact No : {item.contact}</Text>
      <Text style={styles.total}>Service Type : {item.service}</Text>
      <Text style={styles.total}>Address : {item.address}</Text>
      <Text style={styles.total}>Area : {item.area}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.headerText}>Favorite Services</Text> */}
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};



export default FavouriteService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: '15%'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '2%',

  },
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
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