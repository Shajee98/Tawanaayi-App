import React, { Component, } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
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
            </TouchableOpacity></View>
            </View>
            <Button style={{width: "200px",alignItems: ""}} onPress={signOut}></Button>
            <Button style={{width: "200px",alignItems: ""}} onPress={() => navigation.navigate("Profile")}></Button>
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