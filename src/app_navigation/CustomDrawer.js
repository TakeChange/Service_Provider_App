import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';


const CustomDrawer = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#009eb4', marginBottom: '2%', padding: '5%',flexDirection:'column' ,}}>
        <Image
          source={require('../asset/images/user-profile.jpg')}
          style={styles.imgStyle}
        ></Image>
        <Text style={styles.nameStyle}>Hello </Text>
      </View>
      <DrawerItemList {...props} />

      <TouchableOpacity style={styles.btnStyle}>
        <View style={styles.shareContainer}>
          <Ionicons name="exit-outline" size={22} color='#FF5757' />
          <Text
            style={{
              fontSize: 15,
              marginLeft: 10,
              color: '#FF5757',
              fontWeight: '600'
            }}>
            Logout
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  imgStyle: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2
  },
  nameStyle: {
    color: 'white',
    fontSize: 18,
    marginVertical: '5%',
    alignItems:'center',
    marginLeft:'5%'
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems:'center'
  },
  btnStyle: {
    marginTop: 400,
    padding: '5%'
  }
})