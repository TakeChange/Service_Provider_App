import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, ToastAndroid, TextInput, ActivityIndicator, Alert, Modal, Image, Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { ListItem } from 'react-native-elements';
import { formatData } from '../../component/ServiceCard'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useFocusEffect } from '@react-navigation/native';
import { VENDORS_SERVICE, VENDORS_SERVICE_AREA, GET_ALL_SERVICES, All_AREA } from '../../constant/App_constant';


const baseURL = 'https://raviscyber.in/Sevakalpak/uploads/ServiceImages/';

const HomeScreen = ({ navigation }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [search, setSearch] = useState('');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAreaListVisible, setIsAreaListVisible] = useState(false);
  

  //GET_ALL_SERVICES

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(GET_ALL_SERVICES);
      console.log(response.data);

      if (response.data.status === 'success') {
        const updatedServices = response.data.service.map(service => ({
          ...service,
          serviceimg: service.serviceimg
            ? `${baseURL}${service.serviceimg}`
            : 'https://via.placeholder.com/150?text=No+Image+Available'
        }));
        setServices(updatedServices);
        setLoading(false);
      } else {
        console.error('Failed to fetch services');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      setLoading(false);
    }
  };

  //GET_VENDORS_BY_SERVICES_WITH_AREA and GET_VENDORS_BY_SERVICES

  const handlePress = async (service) => {
    try {
      const response = area
        ? await axios.post(
          VENDORS_SERVICE_AREA,
          { service, area },
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        : await axios.post(
          VENDORS_SERVICE,
          { service },
          { headers: { "Content-Type": "multipart/form-data" } }
        );

      console.log('API response:', response.data);

      if (response.data.status === 'success') {
        if (response.data.data && response.data.data.length > 0) {
          setSelectedService(service);
          navigation.navigate('ViewService', {
            vendors: response.data.data,
            service,
            area: area || 'No area selected',
          });
        } else {
          ToastAndroid.show('No vendors available for this service.', ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show(response.data.message || 'Failed to fetch vendors.', ToastAndroid.SHORT);
      }
    } catch (error) {
      if (error.response) {
        console.log('Error response:', error.response.data);
        if (error.response.data.status === 'error' && error.response.data.message === 'No Users Found') {
          ToastAndroid.show('No vendors available for this service.', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(error.response.data.message || 'An error occurred while fetching vendors.', ToastAndroid.SHORT);
        }
      } else {
        console.error('Error:', error.message);
        ToastAndroid.show('An error occurred while fetching vendors. Please try again later.', ToastAndroid.SHORT);
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      // This code will run when the screen is focused (i.e., when you navigate back to it)
      setArea('');
      setSearchQuery('');
    }, [])
  );

  const clearSearch = () => {
    setSearch('');
  };

  const clearSearchQuery = () => {
    setSearchQuery('');
    setArea(''); // Reset the area as well
  };


  const renderServiceItem = ({ item }) => {
    if (item.empty) {
      return <View style={[styles.cardContainer, styles.invisible]} />;
    }
    return (

      <TouchableOpacity
        style={[
          styles.cardContainer,
          { backgroundColor: selectedService === item.service ? '#009eb4' : '#fff' }
        ]}
        onPress={() => handlePress(item.service)}
      >

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.serviceimg }}
            style={styles.serviceIcon}
            onError={() => console.warn(`Failed to load image: ${item.serviceimg}`)}
            defaultSource={{ uri: 'https://via.placeholder.com/150?text=No+Image+Available' }}
          />
          <Text style={styles.cardTitle}>{item.service}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const filteredServices = services
    .filter(service => service.service.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 9);
    
  //Get All Area

  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [area, setArea] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const getArea = All_AREA;
      const response = await axios.get(getArea, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);

      const { status, data } = response.data;
      const sorted = data.sort((a, b) => {
        const nameA = a.area.toLowerCase();
        const nameB = b.area.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      setData(sorted);
      setSortedData(sorted);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setData([]);
    } else {
      const filtered = sortedData.filter((item) =>
        item.area.toLowerCase().startsWith(text.toLowerCase())
      );
      setData(filtered);
    }
  };

  const handleItemClick = (item) => {
    setArea(item.area);
    setSearchQuery(item.area);
    setData([]);
    setIsAreaListVisible(false);
  };



  const renderAreaItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemClick(item)}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.area}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
    
        <View style={styles.container1}>
          <View style={styles.text}>
            <Text style={styles.hellotxt}>
              Hello, User
            </Text>
            <Text style={styles.reqTxt}>
              Which service do you want today?
            </Text>
            <View style={styles.searchLocationContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Entypo name='location-pin' size={30} color='#000' />
                <TextInput
                  style={styles.textfield}
                  placeholder="Select Area..."
                  onChangeText={handleSearch}
                  onSubmitEditing={() => handleSearch(searchQuery)}
                  value={searchQuery}
                  onFocus={() => setIsAreaListVisible(true)}
                  onBlur={() => {
                    if (searchQuery.trim() === '') {
                      setIsAreaListVisible(false);
                    }
                  }}
                />
                  {searchQuery.length > 0 && (
                <TouchableOpacity onPress={clearSearchQuery} style={styles.clearIcon}>
                  <Ionicons name="close" size={25} color="black" />
                </TouchableOpacity>
              )}
              </View>
              {isAreaListVisible && searchQuery.trim() !== '' && (
                <View style={styles.listContainer}>
                  <FlatList
                    data={data}
                    renderItem={renderAreaItem}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.list}
                    showsVerticalScrollIndicator={true}
                    nestedScrollEnabled={true}
                    onChangeText={setSearchQuery}
                  />                 
                </View>
              )}
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
            <Text style={styles.popServices}>Popular services</Text>
            <View >
            {/* <TouchableOpacity onPress={handleViewAllPress} style={styles.viewAllContainer}>
                <Text style={styles.popServices}>View All</Text>
                <AntDesign name='right' size={17} style={styles.viewIcon} />
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => navigation.navigate('All Services', { area })} style={styles.viewAllContainer}>
                <Text style={styles.viewAll}>View All</Text>
                <AntDesign name='right' size={17} style={styles.viewIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.flatlist}>
            {loading ? (
              <ActivityIndicator size="large" color="#009eb4" />
            ) : (
              <FlatList
                data={formatData(filteredServices, numColumns)}
                renderItem={renderServiceItem}
                keyExtractor={item => item.id?.toString() || item.key}
                numColumns={numColumns}
              />             
            )}
          </View>
          {/* {selectedService && (
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => {
            navigation.navigate('ViewService');
          }}
        >
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      )} */}

        </View>

    </View>
  );
};

export default HomeScreen;

const { width } = Dimensions.get('window');
const numColumns = 3;
const itemPadding = 5;
const itemWidth = (width - (numColumns + 1) * itemPadding) / numColumns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     paddingBottom: '15%'
  },
  container1: {
    padding: 12,
  },
  hellotxt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  reqTxt: {
    fontSize: 16,
    color: '#5A5A5A'
  },
  listContainer: {
    borderRadius: 10,
    maxHeight: 200,
  },
  textfield: {
    fontSize: 17,
    color: '#000',
    flex: 1,
    //fontWeight: '500'
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
    marginTop: '5%',
  },
  flatlist: {
    marginTop: '5%',
  },
  cardContainer: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: itemWidth + 0,
    padding: itemPadding,
    width: itemWidth,
    margin: itemPadding,
  },
  cardTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#000',
    textAlign: 'center',
    flexWrap: 'wrap-reverse'
  },
  serviceIcon: {
    width: 65,
    height: 65,
  },
  address: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  popServices: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  viewAll: {
    color: '#009eb4',
    fontSize: 15,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewIcon: {
    color: '#009eb4',
  },
  imageContainer: {
    alignItems: 'center',
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
  // input: {
  //   width: '100%',
  //   height: 40,
  //   borderColor: '#ccc',
  //   borderWidth: 1,
  //   padding: 10,
  //   marginBottom: 20,
  //   borderRadius: 5,
  // },
  listContainer: {
    borderRadius: 10,
    maxHeight: 200,
    marginTop: 5,
  },
  clearIcon: {
    position: 'absolute',
    right: 10, 
  },
});


