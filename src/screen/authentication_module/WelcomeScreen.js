
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LeftArrow from 'react-native-vector-icons/Feather'
import OptionScreen from './OptionScreen';
const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <LeftArrow
                    name='arrow-left'
                    size={30}
                    color='#000'
                />
            </TouchableOpacity>

            <View style={styles.content}>
                <ImageBackground
                    source={require('../../asset/images/welcome.png')}
                    resizeMode="contain"
                    style={styles.imageBackground}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Effortless & Reliable</Text>
                    <Text style={styles.textStyle}>Electrician Tracking !!!</Text>
                    
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OptionScreen')}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Welcome;

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
    imageBackground: {
        height: 400,
        width: 300,
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    textStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
       
    },
    button: {
        
        alignItems: 'center',
        justifyContent: 'center',
        height:40,
        width: '20%',
        borderRadius: 10,
        backgroundColor: '#009eb4',
        marginBottom: 30,
        marginLeft: '80%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
