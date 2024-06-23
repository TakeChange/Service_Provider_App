import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LeftArrow from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import HeartComponent from '../../component/HeartComponent'
import FavoriteContext from '../context/FavoriteContext';


const ViewService = ({ navigation, route }) => {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);
  const { vendors, service } = route.params;
  const [searchText, setSearchText] = useState('');
  const [filteredVendors, setFilteredVendors] = useState(vendors);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (vendors) {
      setFilteredVendors(
        vendors.filter(vendor =>
          vendor.name.toLowerCase().includes(searchText.toLowerCase()) ||
          vendor.service.toLowerCase().includes(searchText.toLowerCase()) ||
          vendor.area.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText, vendors]);

  const renderItem = ({ item }) => (
    <View style={styles.listContainer}>
      <TouchableOpacity>
        <View style={styles.name}>
          <Text style={styles.total}>Name : {item.name}</Text>
          <HeartComponent
            isFavorite={favorites.some(fav => fav.id === item.id)}
            onPress={() => toggleFavorite(item)}
          />
        </View>
        <Text style={styles.total}>Contact No : {item.contact}</Text>
        <Text style={styles.total}>Service Type : {item.service}</Text>
        <Text style={styles.total}>Address : {item.address}</Text>
        {/* <Text style={styles.total}>Aadhar : {item.aadhar}</Text> */}
        <Text style={styles.total}>Area : {item.area}</Text>


      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    navigation.setParams({ favorites });
  }, [favorites, navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftIcon}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <LeftArrow
                name='arrow-left'
                size={20}
                color='#fff'
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.headerText}>Vendors for {service}</Text>
        </View>
        <View style={styles.location}>
          <Entypo
            name='location-pin'
            size={25}
            color='#000'
          />
          <Text style={styles.total}>444 Walnut St, City, Country</Text>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="search" size={24} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#888"
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
        </View>
        <View>
          {loading ? (
            <ActivityIndicator size="large" color="#009eb4" />
          ) : (
            <FlatList
              data={filteredVendors}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '3%',

  },
  leftIcon: {

    backgroundColor: '#000',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '2%',
    width: '12%',
    borderRadius: 10
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: '4%'
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
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2%'
  },
  total: {
    color: '#000',
    fontWeight: '500',
    fontSize: 16,
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0, height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 10,
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
});
