import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import LeftArrow from 'react-native-vector-icons/Feather'
import ButtonIcon from 'react-native-vector-icons/MaterialIcons'
import { RadioButton } from 'react-native-paper'
const LoginOption = () => {
    const [checked, setChecked] = useState('');

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.lefticon}>
                    <LeftArrow
                        name='arrow-left'
                        size={20}
                        color='#fff'
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.Lable}>
                <Text style={styles.txt}>You are</Text>
                <Text style={styles.info}>Please select your role for this app.</Text>
            </View>
            <Text></Text>
            <View>
                <View style={styles.radio}>
                    <RadioButton
                        value='first'
                        status={checked == 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color='#000'
                    />
                    <Text style={styles.info}>Customer</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../../asset/images/customer.jpg')}
                        style={{ width: "90%", height: 200, borderRadius: 20 }}
                    />
                </View>

            </View>

            <View>
                <View style={styles.radio}>
                    <RadioButton
                        value='second'
                        status={checked == 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                        color='#000'
                    />
                    <Text style={styles.info}>Service</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../../asset/images/service.jpeg')}
                        style={{ width: "90%", height: 200, borderRadius: 20 }}
                    />
                </View>
            </View>
            <View style={styles.Butnview}>
                <TouchableOpacity style={styles.butn}>
                <ButtonIcon
                        name='arrow-forward'
                        size={30}
                        color='#fff'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginOption

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:'4%'
    },
    lefticon: {
        backgroundColor:'#000',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:'2%',
        width:'12%',
        borderRadius:10
    },
    Lable: {
        marginTop: "3%",
    },
    txt: {
        fontSize: 25,
        fontWeight: '600',
        color: '#000'
    },
    info: {
        color: '#000',
        marginTop: "2%",
        fontWeight: '500'
    },
    radio: {
        alignItems: 'flex-start',
        flexDirection:'row'
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Butnview:{
       // paddingTop: "5%",
       paddingVertical:'8%'
    },
    butn:{
        backgroundColor:'#ff7235',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        padding:'5%',
        width:'45%',
        borderRadius:15
    }

})