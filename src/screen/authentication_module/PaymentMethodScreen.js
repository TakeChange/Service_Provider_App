
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import LeftArrow from 'react-native-vector-icons/Feather';
import { hasRestParameter } from 'typescript';

const PaymentMethodScreen = () => {
    const [selectedMethod, setSelectedMethod] = useState('');
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', margin: '5%' }}>
                    <TouchableOpacity style={styles.leftIcon}>
                        <LeftArrow name='arrow-left' size={30} color='#000' />
                    </TouchableOpacity>
                    <Text style={styles.paymenttxt}>Payment Method</Text>
                </View>

                <View style={styles.boxcontainer}>
                    <Text style={styles.sectionHeader}>UPI</Text>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => setSelectedMethod('Phone Pay')}
                    >
                        <Image source={require('../../asset/images/phonepay.jpeg')} style={styles.icon} />
                        <Text style={styles.optionText}>Phone Pay</Text>
                        <RadioButton
                            value="Phone Pay"
                            status={selectedMethod === 'Phone Pay' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedMethod('Phone Pay')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => setSelectedMethod('Google Pay')}
                    >
                        <Image source={require('../../asset/images/googlepay.jpeg')} style={styles.icon} />
                        <Text style={styles.optionText}>Google Pay</Text>
                        <RadioButton
                            value="Google Pay"
                            status={selectedMethod === 'Google Pay' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedMethod('Google Pay')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => setSelectedMethod('Enter UPI ID')}
                    >
                        <Image source={require('../../asset/images/upi.jpeg')} style={styles.icon} />
                        <Text style={styles.optionText}>Enter UPI ID</Text>
                        <RadioButton
                            value="Enter UPI ID"
                            status={selectedMethod === 'Enter UPI ID' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedMethod('Enter UPI ID')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.boxcontainer}>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>Credit/Debit Card</Text>
                        <TouchableOpacity style={styles.option}>
                            <Icon name="credit-card" size={24} color="#000" />
                            <Text style={styles.optionText}>Use a credit / debit card Visa Master card and more</Text>
                            <LeftArrow name='arrow-right' size={30} color='#000' />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.boxcontainer}>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>Net banking</Text>
                        <TouchableOpacity style={styles.option}>
                            <Entypo name="network" size={24} color="#000" style={{}} />
                            <Text style={styles.optionText}>Net banking all Major Banks avaliable</Text>

                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.boxcontainer}>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>Wallets</Text>
                        <TouchableOpacity style={styles.option}>
                            <Image source={require('../../asset/images/amazon.jpeg')} style={styles.amzonicon} />
                            <Text style={styles.optionText}>Amazon Pay Balance</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </ScrollView>
    )
}

export default PaymentMethodScreen
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    paymenttxt: {
        fontSize: 18,
        color: '#000',
        marginTop: '3%',
        marginLeft: '5%',
        fontWeight: 'bold'
    },
    leftIcon: {

        justifyContent: 'center',
        alignItems: 'center',
        padding: '3%',
        borderRadius: 10,
        alignSelf: 'flex-start',

    },
    boxcontainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: '5%',
        marginHorizontal: '3%',
        //marginTop: '10%',
        paddingVertical: '4%',
        marginVertical: '2%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },

    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        //borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    icon: {
        width: '12%',
        height: '90%',
        marginRight: 16,
    },
    amzonicon:{
        width: '12%',
        height: '125%',
        marginRight: 16,
    },
    optionText: {
        fontSize: 15,
        color: '#000',
        fontWeight: '600',
        marginLeft: '3%',
        flex: 1,
    },
    section: {
        marginVertical: 8,
    },
    sectionHeader: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
        //marginVertical: 8,
    },
    selectedIndicator: {
        fontSize: 18,
        color: 'green',
    },
    arrow: {
        fontSize: 40,
        color: '#000',
        fontWeight: 'bold'
    },
})
