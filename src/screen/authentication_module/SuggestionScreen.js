
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LeftArrow from 'react-native-vector-icons/Feather';
import { RadioButton } from 'react-native-paper';

const SuggestionScreen = () => {
    const [checked, setChecked] = useState('');

    const suggestions = [
        'Electrical Inspection',
        'Installations',
        'Appliance Installations',
        'Fault Finding and Repair',
        'Fuse Box Replacement',
        'Lighting Design and Installation',
        'Rewiring',
        'Emergency Call-Outs',
    ];

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftIcon}>
                <LeftArrow name='arrow-left' size={25} color='#000' />
            </TouchableOpacity>
            <Text style={styles.text}>Suggestion</Text>
            <View style={styles.suggestionsContainer}>
                {suggestions.map((item, index) => (
                    <View key={index} style={styles.suggestionItem}>
                        <RadioButton
                            value={item}
                            status={checked === item ? 'checked' : 'unchecked'}
                            onPress={() => setChecked(item)}
                        />
                        <Text style={styles.suggestionText}>{item}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

export default SuggestionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '3%',
    },
    leftIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3%',
        padding: '2%',
        alignSelf: 'flex-start',
    },
    text: {
        fontSize: 17,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: '3%',
    },
    suggestionsContainer: {
        marginTop: '8%',
    },
    suggestionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '3%',
    },
    suggestionText: {
        fontSize: 16,
        color: '#000',
    },
});
