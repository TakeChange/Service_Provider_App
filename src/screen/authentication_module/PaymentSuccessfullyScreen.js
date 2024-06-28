import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LeftArrow from 'react-native-vector-icons/Feather';

const PaymentSuccessfullyScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftIcon} onPress={() => navigation.navigate('PaymentSuccessfullyScreen')}>
                <LeftArrow name='arrow-left' size={25} color='#000' />
            </TouchableOpacity>
            <View style={styles.content}>
                <ImageBackground
                    source={require('../../asset/images/Payment.png')}
                    resizeMode="contain"
                    style={styles.imageBackground}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.Pymenttxt}>Payment</Text>
                    <Text style={styles.text}>Successfully</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OptionScreen')}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PaymentSuccessfullyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%',
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
    imageBackground: {
        height: 250,
        width: 300,
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    Pymenttxt: {
        fontSize: 25,
        marginTop: 20,
        color: "#009eb4",
        fontWeight: '700'
    },
    text: {
        fontSize: 25,
        color: "#009eb4",
        fontWeight: '700'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '25%',
        borderRadius: 10,
        backgroundColor: '#009eb4',
        marginBottom: 30,
        marginLeft: '75%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
});
