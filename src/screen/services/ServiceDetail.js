import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

const ServiceDetail = () => {
    return (
        <View style={styles.container}>
        <View>
            <TouchableOpacity style={styles.icon}>
                <Feather
                    name='arrow-left'
                    size={20}
                    color='#fff'
                />
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default ServiceDetail

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: '4%',
    },
    icon: {
        backgroundColor:'#000',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:'2%',
        width:'12%',
        borderRadius:10
      },
})