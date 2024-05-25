import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ImageBackground
                    source={require('../../asset/images/welcome.png')}
                    resizeMode="contain"
                    style={styles.imageBackground}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.mottoStyle}>Customer happiness is our motto !!!</Text>
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
        height: 250,
        width: 300,
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    mottoStyle:{
        fontSize:16, 
        marginTop:20, 
        color:"#000",
        fontWeight:'700'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height:40,
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
