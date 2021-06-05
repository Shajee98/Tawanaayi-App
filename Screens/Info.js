import React, { useState } from 'react'
import styles from '../assets/styles'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity, Button } from 'react-native'

export default function Info() {
    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#000000',
        flex: 1,
        justifyContent: 'space-evenly',
        height: '400%'}}>
            <Image source={require('../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center', justifyContent: 'space-evenly', marginTop: -4, marginBottom: 30 }}></Image>
            <View style={{ width: '70%', alignSelf: 'center', marginTop: -40 }}>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 30, paddingTop: 20, fontWeight: '400' }}>
                    About us
                </Text>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 18, paddingTop: 10 }}>
                    Tawanaayi is a health application that lets users keep track of their health through health metrics like Body-Mass Index (BMI) and
                    Basal Metabolic Rate (BMR).
                </Text>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 25, paddingTop: 30, fontWeight: '300' }}>
                    BMI
                </Text>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 16, paddingTop: 10 }}>
                BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height.</Text>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 25, paddingTop: 30, fontWeight: '300' }}>
                    BMR
                </Text>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 16, paddingTop: 10 }}>
                The basal metabolic rate (BMR) is the amount of energy needed while resting in a temperate environment when the digestive system is inactive. It is the equivalent of figuring out how much gas an idle car consumes while parked. 
                </Text>
            </View>
        </ScrollView>
        
    )
}