import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Home from 'react-native-vector-icons/MaterialIcons';
const HomeScreen = () => {
  const services = [
    {
      id: 1,
      title: 'Home cleaning',
     
    },
    // Add more service items here if needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={{ backgroundColor: 'orange', width: 80, height: 150,  }}>
        <View style={{ backgroundColor: 'blue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Home name="home" size={40} color="black" />
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
