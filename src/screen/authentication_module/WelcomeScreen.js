
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Welcome = () => {
    return (
        <View style={styles.container}>
            
            <View style={styles.content}>
                <ImageBackground
                    source={require('../../asset/images/welcm.png')}
                    resizeMode="contain"
                    style={styles.imageBackground}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Effortless & Reliable</Text>
                    <Text style={styles.textStyle}>Electrician Tracking !!!</Text>
                    

                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        height: 300,
        width: 300,
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginVertical: 5,
    },
    button: { 
        marginLeft:200,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: 100,
        borderRadius: 15,
        backgroundColor: '#009eb4',
        marginBottom: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
});
