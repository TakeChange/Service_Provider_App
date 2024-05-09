import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity ,Image} from 'react-native';
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
      icon: require('../../asset/icons/home.png') 
    },
    {
      id: 3,
      title: 'AC repair',
      icon: require('../../asset/icons/home.png') 
    },
    {
      id: 4,
      title: 'Salon',
      icon: require('../../asset/icons/home.png') 
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={{ backgroundColor: 'orange', width: 80, height: 130, marginHorizontal: 8, marginTop: 20 }}>
        <View style={{ backgroundColor: 'blue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={item.icon} size={40} color="black" />
        </View>
        <View style={{ backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{item.title}</Text>
        </View>
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
            Which service do you want today ?
          </Text>
        </View>
        <View style={styles.flatlist}>
          <FlatList
            data={services}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
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
    padding: 10
  },
  text: {
    backgroundColor: 'yellow'
  },
  flatlist: {
    flex: 1
  }
});
