import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  const services = [
    {
      id: 1,
      title: 'Home cleaning',
      icon: require('../../asset/icons/home.png')
    },
    {
      id: 2,
      title: 'Beauty',
      icon: require('../../asset/icons/beuty.png')
    },
    {
      id: 3,
      title: 'AC repair',
      icon: require('../../asset/icons/acrepair.png')
    },
    {
      id: 4,
      title: 'Salon',
      icon: require('../../asset/icons/salon.png')
    },
    {
      id: 5,
      title: 'Home cleaning',
      icon: require('../../asset/icons/home.png')
    },
    {
      id: 6,
      title: 'Beauty',
      icon: require('../../asset/icons/beuty.png')
    },
    {
      id: 7,
      title: 'AC repair',
      icon: require('../../asset/icons/acrepair.png')
    },
    {
      id: 8,
      title: 'Salon',
      icon: require('../../asset/icons/salon.png')
    },
  ];
  const windowWidth = useWindowDimensions().width;
  const itemWidth = (windowWidth - 60) / 4;
  const renderItem = ({ item }) => {
    
    return (
      <TouchableOpacity>
        <View style={[styles.itemContainer, { width: itemWidth }]}>
          <View style={styles.iconContainer}>
            <Image source={item.icon} style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{fontSize:12,fontWeight:'500'}}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.text}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
            Hello, User
          </Text>
          <Text style={{ fontSize: 16, color: '#c2c2c2' }}>
            Which service do you want today ?
          </Text>
        </View>
        <View style={styles.popularContainer}>
          <Text style={{color:'black',fontSize:15,fontWeight:'500'}}>Polular services</Text>
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
    backgroundColor: 'red'
  },
  container1: {
    backgroundColor: 'pink',
    padding: 12
  },
  text: {
    backgroundColor: 'yellow'
  },

  popularContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20
  },

  ///////////Flatlist code
  flatlist: {
    flex: 1
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 6,
    marginVertical:18
  
  },
  iconContainer: {
    backgroundColor: '#c1c1c1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 80,
    marginBottom: 2,
    width:80
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width:80,
  },
  icon: {
    width: 60,
    height: 60,
  }
});
