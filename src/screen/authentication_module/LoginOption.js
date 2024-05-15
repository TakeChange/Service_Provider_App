import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import LeftArrow from 'react-native-vector-icons/Feather'
import { RadioButton } from 'react-native-paper'
const LoginOption = ({navigation}) => {
    const [checked, setChecked] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.leftIcon}>
                <TouchableOpacity>
                    <LeftArrow
                        name='arrow-left'
                        size={30}
                        color='#000'
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
                <TouchableOpacity style={styles.butn}>
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
        fontWeight: '600',
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
        width: '20%',
        borderRadius: 10
    },
    next: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 15
    },
    user: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#000',
        fontSize: 20
    },
    lable: {
        paddingLeft: '2%'
    }

})