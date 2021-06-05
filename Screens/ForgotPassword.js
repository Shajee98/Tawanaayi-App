import React from 'react'
import styles from '../assets/styles'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import {UserContext} from './../context'
import {firebase,db} from './../firebase'
import { useContext } from 'react'


export default function ForgotPassword({navigation}) {

    const {Email, NewPassword} = useContext(UserContext);
    const [email, setEmail] = Email;

    const resetPassword = () => {
        firebase.auth().sendPasswordResetEmail(email).then(() => alert("Password email sent!")).then(()=> navigation.navigate('SignIn')).catch((error) => alert(error));
    }

    return (
        <ScrollView contentContainerStyle={[styles.backgroundRest]}>
            <Image source={require('../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center', marginTop: -30 }}></Image>
            <View style={{ width: '70%', alignSelf: 'center' }}>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 30, paddingTop: 20, fontWeight: '400' }}>
                    Change Password
                    </Text>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 30 }}>
                    Enter Email
                    </Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
                }} placeholder="Insert your email!" onChangeText={(text) => setEmail(text)}/>
                
                <View style={{paddingTop: 40}}>
                <TouchableOpacity
                    onPress={resetPassword}
                    style={styles.inYellow}
                ><Text style={{ fontWeight: 'bold' }}>Send Email</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
