

import { StyleSheet, Text, View, ScrollView, FlatList, TextInput, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import React, { useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import axios from 'axios';
// Assuming you are using Expo for vector iconsr
const HomeScreen = ({ navigation }) => {
  const services = [
    { id: '1', title: 'House cleaning', icon: require('../../asset/icons/houseclean.png') },
    { id: '2', title: 'Carpenter', icon: require('../../asset/icons/carpenter.png') },
    { id: '3', title: 'Beauty', icon: require('../../asset/icons/beauty.png') },
    { id: '4', title: 'AC Repair', icon: require('../../asset/icons/ac-repair.png') },
    { id: '5', title: 'Electrician', icon: require('../../asset/icons/electrician.png') },
    { id: '6', title: 'Home painting', icon: require('../../asset/icons/painter.png') },
    { id: '7', title: 'AC Repair', icon: require('../../asset/icons/ac-repair.png') },
    { id: '8', title: 'Electrician', icon: require('../../asset/icons/electrician.png') },
    { id: '9', title: 'Home painting', icon: require('../../asset/icons/painter.png') },
    { id: '10', title: 'AC Repair', icon: require('../../asset/icons/ac-repair.png') },
    { id: '11', title: 'Electrician', icon: require('../../asset/icons/electrician.png') },
  ];
  const windowWidth = useWindowDimensions().width;
  const itemWidth = (windowWidth - 60) / 4;

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    try {
      const getUser = 'https://raviscyber.in/Sevakalpak/index.php/User/GetAllUsers'
      const response = await axios.get(getUser, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      });
      console.log("Response here:", response.data); // Log the response data
     // console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('ViewService')}>
      <View style={styles.imageContainer}>
        <Image source={item.icon} style={styles.serviceIcon} />
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.text}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
            Hello, User
          </Text>
          <Text style={{ fontSize: 16, color: '#c2c2c2' }}>
            Which service do you want today?
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
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
          </View>
        </View>
        <View style={styles.popularContainer}>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: '500' }}>Popular services</Text>
          <Text>View All</Text>
        </View>
        <View style={styles.flatlist}>
          <FlatList
            data={services}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={4}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    padding: 12
  },
  text: {
    marginBottom: 20,
  },
  searchLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  popularContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  flatlist: {
    flex: 1,
    marginTop: 15
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: '4%',
    margin: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  cardTitle: {
    fontSize: 8,
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

  //
  address: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',

  },
});
