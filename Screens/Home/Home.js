import React, { Component, } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import generalStyle from '../../genStyles.js'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../../assets/styles'
import {firebase,db} from '../../firebase'
import { useEffect } from 'react';

export default function Home({navigation}) {

    const signOut = () => {
      firebase.auth().signOut().then(() => {
          navigation.replace("SignIn");
      });
  };
    return (
      <ScrollView contentContainerStyle={[styles.backgroundRest]}>

      <Image source={require('../../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center', justifyContent: 'space-evenly', marginTop: -80, marginBottom: 90 }} />
      <View style={{ width: '70%', alignSelf: 'center' }}>
      
          <View style={{paddingTop: -230}}>
            <TouchableOpacity
              title="BMI"
              onPress={() =>
                navigation.navigate('BMI', {
                })
              } style={styles.inYellow}
              color='green'
            ><Text>BMI</Text>
            </TouchableOpacity></View>
            <View style={styles.intro}>
            <TouchableOpacity
              title="BMI"
              onPress={() =>
                navigation.navigate('BMR')
              } style={styles.inBlue}
              color='green'
            ><Text>BMR</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles1.inPurple} onPress={signOut}><Text style={{color: 'white'}}>Logout</Text></TouchableOpacity>   
            <TouchableOpacity style={styles1.inPink} onPress={() => navigation.navigate("Profile")}><Text style={{color: 'white'}}>Profile</Text></TouchableOpacity>
            </View>            
        </ScrollView>
    )
  }
// }
const styles1 = StyleSheet.create({
  navPage: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  intro: {
    flexDirection: "column",
    alignSelf: 'center',
    minWidth: "60%",
  },
  inYellow: {
    flex: 0,
    backgroundColor: "#fff700",
    borderRadius: 360,
    alignItems: "center",
    fontFamily: "Open Sans",
    fontSize: 16,
    padding: 10,
    marginBottom: 45
  },
  inPurple: {
    flex: 0,
    backgroundColor: "#3F51B5",
    borderRadius: 360,
    alignItems: "center",
    fontFamily: "Open Sans",
    fontSize: 16,
    padding: 10,
    marginBottom: 45,
    marginTop: 40,
    width: "100px",
    alignSelf: "center"
  },
  inPink: {
    flex: 0,
    backgroundColor: "#E72EC5",
    borderRadius: 360,
    alignItems: "center",
    fontFamily: "Open Sans",
    fontSize: 16,
    padding: 10,
    marginBottom: 45,
    width: "100px",
    alignSelf: "center"
  },
  inBlue: {
    flex: 0,
    backgroundColor: "#00e5ff",
    borderRadius: 360,
    alignItems: "center",
    fontFamily: "Open Sans",
    fontSize: 16,
    padding: 10,
    marginBottom: 45
  },
  box: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 15,
    padding: 15
  },
  button: {
  },
  TitleText: {
    color: "#FFCB1F",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 35,
    paddingBottom: 30,
    paddingTop: 20,
    marginBottom: 150
  },
});