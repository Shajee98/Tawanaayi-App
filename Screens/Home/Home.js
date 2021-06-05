import React, { Component, } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
import generalStyle from '../../genStyles.js'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../../assets/styles'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {firebase,db} from '../../firebase'

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();


export default function Home({navigation}) {
  // state = {
  //   nu: 5,
  // }
  // constructor(props) {
  //   //constructor to set default state  
  //   super(props);
  // }
  //   static navigationOptions = {  
  //     title: 'Home',  
  //     headerStyle: {  
  //         backgroundColor: '#f4511e',  
  //     },  
  //     //headerTintColor: '#0ff',  
  //     headerTitleStyle: {  
  //         fontWeight: 'bold',  
  //     },  
  // };  
  
  // render() {
    // const { navigate } = this.props.navigation;
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
              // color="#00B0FF"  
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
              // color="#00B0FF"  
              onPress={() =>
                // this.props.
                navigation.navigate('BMR'
                // , {
                // }
                )
              } style={styles.inBlue}
              color='green'
            ><Text>BMR</Text>
            </TouchableOpacity></View>
            </View>
            <Button onPress={signOut}>Logout</Button>
          {/*BMI(this.state.nu) THIS IS HOW YOU CALL A FUNCTIONAL COMPONENT WITH PROPS PASSED*/}
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
    // backgroundColor: "#FFFFFF",
    // borderRadius: 10,
    // paddingVertical: 40,
    // paddingTop: 20,
    // marginTop: 20,
    minWidth: "60%",
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 1.0,
    // shadowRadius: 2,
    // shadowColor: "rgba(193, 211, 251, 0.5)",
    //elevation: 5,
  },
  inYellow: {
    flex: 0,
    //backgroundColor: '#000',
    // color: '#FFCB1F',
    // textDecorationStyle: 'solid',
    // alignItems: 'center',
    // //justifyContent: 'center',
    // justifySelf: 'center',
    // padding: 15,
    // fontSize: 20
    // flexDirection: 'column',
    // height: 65,
    // textAlign: "center",
    // width: "80%",
    // fontSize: 23,
    // marginTop: 34,
    // color: "#FFFFFF",
    // marginRight: 5,
    // marginLeft: 5,
    // marginBottom: 10,
    // marginTop: 50,
    //"#FFCB1F"
    backgroundColor: "#fff700",
    //defaultTextColor: "hsl(0, 0%, 0%)",
    borderRadius: 360,
    alignItems: "center",
    //disabled: false,
    //disabledBackground: "#f3f3f3",
    //disabledTextColor: "#AAAAAA",
    //font: false,
    fontFamily: "Open Sans",
    fontSize: 16,
    // hoverBackground: "#0077FF",
    // hoverTextColor: "#ffffff",
    // onMouseEnter: undefined,
    // onMouseLeave: undefined,
    padding: 10,
    // pressedBackgroun: "#0088FF",
    // pressedTextColor: "#ffffff",
    // shadow: false,
    // variant: "Default",
    // whileHoverScale: 1.1,
    // whileTapScale: 0.95,
    marginBottom: 45
  },
  inBlue: {
    flex: 0,
    //backgroundColor: '#000',
    // color: '#FFCB1F',
    // textDecorationStyle: 'solid',
    // alignItems: 'center',
    // //justifyContent: 'center',
    // justifySelf: 'center',
    // padding: 15,
    // fontSize: 20
    // flexDirection: 'column',
    // height: 65,
    // textAlign: "center",
    // width: "80%",
    // fontSize: 23,
    // marginTop: 34,
    // color: "#FFFFFF",
    // marginRight: 5,
    // marginLeft: 5,
    // marginBottom: 10,
    // marginTop: 50,
    //"#FFCB1F"
    backgroundColor: "#00e5ff",
    //defaultTextColor: "hsl(0, 0%, 0%)",
    borderRadius: 360,
    alignItems: "center",
    //disabled: false,
    //disabledBackground: "#f3f3f3",
    //disabledTextColor: "#AAAAAA",
    //font: false,
    fontFamily: "Open Sans",
    fontSize: 16,
    // hoverBackground: "#0077FF",
    // hoverTextColor: "#ffffff",
    // onMouseEnter: undefined,
    // onMouseLeave: undefined,
    padding: 10,
    // pressedBackgroun: "#0088FF",
    // pressedTextColor: "#ffffff",
    // shadow: false,
    // variant: "Default",
    // whileHoverScale: 1.1,
    // whileTapScale: 0.95,
    marginBottom: 45
  },
  box: {
    //flex: 1,
    //backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 15,
    // color: "#FFCB1F"
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 15,
    padding: 15
  },
  button: {
    //flex: 1,
    //backgroundColor: '#000',
    // color: "#FFCB1F",
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 15,
    //backgroundColor: "#10100F"

  },
  TitleText: {
    color: "#FFCB1F",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 35,
    //fontFamily: "Cochin",
    paddingBottom: 30,
    paddingTop: 20,
    marginBottom: 150
    // backgroundColor: "#FFFFFF",
    // borderRadius: 10,
    // paddingHorizontal: 30,
    // paddingVertical: 40,
    // minWidth: "80%",
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 1.0,
    // shadowRadius: 2,
    // shadowColor: "rgba(193, 211, 251, 0.5)",
    // elevation: 5,
  },
});