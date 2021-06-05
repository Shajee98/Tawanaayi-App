import React from 'react'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image } from 'react-native'
import styles from '../assets/styles'
export default function SplashScreen() {
    return (
        <ScrollView contentContainerStyle={[styles.background]}>
        <View style={{width: 200,height: 200,backgroundColor: '#F9E705', alignSelf: 'flex-end'}}></View>
        <Image source={require('../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center'}}></Image>
        <View style={{width: 200,height: 200,backgroundColor: '#73E6FD', alignSelf: 'flex-start'}}></View>
 
      </ScrollView>
        // <ScrollView style = {styles.background}>
        //     <ScrollView style={{backgroundColor: '', width: '60%', height: '30%'}}>
        //     </ScrollView>
        // </ScrollView>
    )
}
