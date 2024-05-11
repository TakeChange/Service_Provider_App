
import { StyleSheet, Text, View,TextInput, ScrollView,TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PhoneInput from "react-native-phone-number-input";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo';

const SignUpScreen = () => {
    const[phoneNumber ,setPhoneNumber] =useState('');
    return (
        <ScrollView>
        <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <View>
              <Text style={{fontSize:20,color:'#000',fontWeight:'800'}}>Profile</Text>
            </View>
            </View>

            
            <Text style={styles.text} >Full Name</Text>
                    <TextInput
                    style={styles.txtinput}
                        placeholder=""
                    />
            <Text style={styles.text}>Mobile Number</Text>
            <View style={styles.txtinput}>
                   <PhoneInput
                   defaultValue={phoneNumber}
                   defaultCode='IN'
                   />
                   <TouchableOpacity  onPress={()=>{ Alert.alert(phoneNumber)}}>
                   </TouchableOpacity>  
            </View>
            <Text style={styles.text}>Confirm Password</Text>
                    <TextInput
                    style={styles.txtinput}
                    secureTextEntry
                        placeholder=""
                    />
            
            <Text style={styles.text}>Address</Text>
                    <TextInput
                    style={styles.txtinput}
                        placeholder=""
                    />
            <Text style={styles.text}>Area</Text>
            <View style={styles.txtinput}>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
            <Entypo name='location-pin'size={30} color='#ff7235'/>
                <GooglePlacesAutocomplete
                placeholder='Search Area'
                debounce={400}
                query={{
                    key:'API_KEY',
                    language:'en'
                }}
                styles={{
                    container: {
                        flex: 1,
                    },
                    listView: {
                        position: 'absolute',
                        top: 50,
                    },
                }}
                />
                </View>
            </View>
              <TouchableOpacity style={styles.btn}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>Update</Text>
        </TouchableOpacity>
    </View>
        </ScrollView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '8%',
        
    },
    Icon: {
        alignItems: 'center',
        backgroundColor:'#FF7235',
        height: 50,
        width: 50,
        borderRadius: 40,
        
    },
    txtstyle: {
        fontSize: 27,
        fontWeight:'800',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center'
    },
    txtinput:{
        color:'#000000',
        marginTop:5,
        backgroundColor: '#ffffff',
        flex: 1,
        fontSize: 17,
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 15, 
        alignItems:'center',
        
    },
    btn:{
      backgroundColor: '#ff7235',
      justifyContent: 'center',
      marginTop: '10%',
      alignSelf: 'center',
      alignItems: 'center',
      padding: '2%',
      width: '50%',
      borderRadius: 15
    },
    text:{
        fontWeight: '600',
        marginTop:8
    },
    txt:{
        fontSize:10,
        color:'#000000',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        padding:'5%',
        width:'70%',
        borderRadius:2
    },
    msg:{
        flex:1,
        flexDirection:'row',
        marginTop:10
    }
})

