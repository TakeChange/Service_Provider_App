import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import LeftArrow from 'react-native-vector-icons/Feather'
import { RadioButton } from 'react-native-paper'

const LoginOption = ({ navigation }) => {
    const [checked, setChecked] = useState('');

    const handleNextPress = () => {
        if (checked === 'first') {
            navigation.navigate('SignInScreen');
        } else if (checked === 'second') {
            // navigation.navigate('VendorScreen');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftIcon}>
                <TouchableOpacity onPress={() => navigation.navigate('OptionScreen')}>
                    <LeftArrow
                        name='arrow-left'
                        size={20}
                        color='#fff'
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.lable}>
                <Text style={styles.txt}>You are</Text>
                <Text style={styles.info}>Please select your role for this app</Text>
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
                    <Text style={styles.user}>User</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../../asset/images/customers.jpeg')}
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
                    <Text style={styles.user}>Vendor</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../../asset/images/service.jpeg')}
                        style={{ width: "90%", height: 200, borderRadius: 20 }}
                    />
                </View>
            </View>
            <View style={styles.Butnview}>
                <TouchableOpacity style={styles.butn} onPress={handleNextPress}>
                    <Text style={styles.next}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginOption

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '4%'
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    info: {
        color: '#000',
    },
    radio: {
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4%'
    },
    Butnview: {
        paddingVertical: '8%'
    },
    butn: {
        backgroundColor: '#009eb4',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        alignItems: 'center',
        padding: '2%',
        width: '25%',
        borderRadius: 10
    },
    next: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 18
    },
    user: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#000',
        fontSize: 17
    },
    lable: {
        paddingLeft: '4%',
        marginTop:'4%'
    },
    leftIcon: {
        backgroundColor:'#000',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:'2%',
        width:'10%',
        borderRadius:10
    }
})
