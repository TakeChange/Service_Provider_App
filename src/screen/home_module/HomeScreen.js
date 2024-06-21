import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Image, Modal, TextInput, Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState('123 Main St, City, Country');
  const [search, setSearch] = useState('');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('https://raviscyber.in/Sevakalpak/index.php/Services/GetAllServices');
      console.log(response.data); // For debugging, you can remove this in production

      if (response.data.status === 'success') {
        setServices(response.data.service);
        setLoading(false);
      } else {
        console.error('Failed to fetch services');
        setLoading(false); // Set loading to false even on failure
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      setLoading(false); // Set loading to false on error
    }
  };

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
        <Image
         source={{ uri: item.serviceimg == "" ? 'https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png' : item.serviceimg }} 
          style={styles.serviceIcon}
          onError={() => console.warn(`Failed to load image: ${item.serviceimg}`)}
        />
        <Text style={styles.cardTitle}>{item.service}</Text>
      </View>
    </TouchableOpacity>
  );

  const filteredServices = services.filter(service =>
    service.service.toLowerCase().includes(search.toLowerCase())
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
            {loading ? (
              <Text>Loading...</Text>
            ) : (
              <FlatList
                data={filteredServices}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
              />
            )}
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
    marginBottom: 10,
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
    marginTop: 10,
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
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:  5,
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
  },
});

