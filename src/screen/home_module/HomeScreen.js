import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Image, Modal, TextInput, Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState('123 Main St, City, Country');
  const [search, setSearch] = useState('');

  const services = [
    { id: '1', title: 'House cleaning', icon: require('../../asset/icons/houseclean.png') },
    { id: '2', title: 'Carpenter', icon: require('../../asset/icons/carpenter.png') },
    { id: '3', title: 'Beauty', icon: require('../../asset/icons/beauty.png') },
    { id: '4', title: 'AC Repair', icon: require('../../asset/icons/ac-repair.png') },
    { id: '5', title: 'Electrician', icon: require('../../asset/icons/electrician.png') },
  ];

  const handlePress = (id) => {
    setSelectedService(prevSelectedService => prevSelectedService === id ? null : id);
  };

  const clearSearch = () => {
    setSearch('');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        { backgroundColor: selectedService === item.id ? '#009eb4' : '#fff' }
      ]}
      onPress={() => handlePress(item.id)}
    >
      <View style={styles.imageContainer}>
        <Image source={item.icon} style={styles.serviceIcon} />
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container1}>
          <View style={styles.text}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
              Hello, User
            </Text>
            <Text style={{ fontSize: 16, color: '#c2c2c2' }}>
              Which service do you want today?
            </Text>

            <View style={styles.searchLocationContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Entypo name='location-pin' size={30} color='#000' />
                <Text style={styles.address}>{location}</Text>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.editIconContainer}>
                  <View style={styles.squareBorder}>
                    <MaterialIcons name='edit' size={24} color='black' />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search services..."
                value={search}
                onChangeText={setSearch}
              />
              {search.length > 0 && (
                <TouchableOpacity onPress={clearSearch} style={styles.clearIcon}>
                  <Ionicons name="close" size={25} color="black" />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.popularContainer}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: '500' }}>Popular services</Text>
            <Text>View All</Text>
          </View>
          <View style={styles.flatlist}>
            <FlatList
              data={services.filter(service => service.title.toLowerCase().includes(search.toLowerCase()))}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              numColumns={3}
            />
          </View>
        </View>
      </ScrollView>
      {selectedService && (
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => {
            navigation.navigate('ViewService');
          }}
        >
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new location:</Text>
            <TextInput
              style={styles.input}
              placeholder="New location"
              value={location}
              onChangeText={setLocation}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.buttonSave]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default HomeScreen;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    padding: 12,
  },
  text: {
    marginBottom: 10, // Reduced the marginBottom to decrease space
  },
  searchLocationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    position: 'relative',
  },
  popularContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, // Ensured no additional margin
  },
  flatlist: {
    flex: 1,
    marginTop: 15,
  },
  cardContainer: {
    flex: 1,
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
    textAlign: 'center',
  },
  serviceIcon: {
    width: 50,
    height: 50,
  },
  address: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    backgroundColor: '#009eb4',
    borderRadius: 50,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  editIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  squareBorder: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonCancel: {
    backgroundColor: '#ff5c5c',
  },
  buttonSave: {
    backgroundColor: '#009eb4',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderColor: 'black', // Changed border color to black
    borderWidth: 1,
    borderRadius: 5,
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
  },
});
