import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const baseURL = 'https://raviscyber.in/Sevakalpak/uploads/VendorImages/';

const VendorDetailScreen = ({  route }) => {
  const { vendor } = route.params;

  const logoURL = vendor.logo ? `${baseURL}${vendor.logo}` : 'https://via.placeholder.com/150?text=No+Image+Available';
  const profilePhotoURL = vendor.profilephoto ? `${baseURL}${vendor.profilephoto}` : 'https://via.placeholder.com/150?text=No+Image+Available';

  console.log('Logo URL:', logoURL);
  console.log('Profile Photo URL:', profilePhotoURL);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: profilePhotoURL }} style={styles.profilePhoto} />
        <View style={styles.detailContainer}>
          <Text style={styles.detailText}>Name: {vendor.name}</Text>
          <Text style={styles.detailText}>Contact No: {vendor.contact}</Text>
          <Text style={styles.detailText}>Service Type: {vendor.service}</Text>
          <Image source={{ uri: logoURL }} style={styles.logo} />
          <Text style={styles.detailText}>Address: {vendor.address}</Text>
          <Text style={styles.detailText}>Area: {vendor.area}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default VendorDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: '10%',
  },
  detailContainer: {
    backgroundColor: '#fff',
    padding: '5%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    borderWidth:1,
    borderColor:'#009eb4'
  },
  detailText: {
    fontSize: 16,
    marginBottom: '5%',
  },
});
