import React,{useContext,useEffect} from 'react'
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from '../assets/styles'
import {UserContext} from './../context'
import { firebase,db } from '../firebase'
import { useState } from 'react'
import { useLayoutEffect } from 'react'

const BMR = () => {
   
    const {Feets,Inches,Mass,HeightM,BMR,Gender} = useContext(UserContext);

    const [heightfeet, setFeet] = Feets
    const [heightinches, setInches] = Inches
    const [heightM, setMeters] = HeightM
    const [mass, setMass] = Mass
    const [bmr, setBMR] = BMR
    const [gender, setGender] = Gender
    const [age, setAge] = useState(0);
    const [visible, setVisible] = useState(false) 

    useEffect(() => {
       setMeters(heightfeet + heightinches)
       setVisible(false)

       const setGenderandAge = async () => {
        await database.ref('users/details').on('value', function(snapshot) {
             snapshot.forEach(function(childSnapshot) {
                 if (childSnapshot.key === user)
                 {
                    Object.keys(childSnapshot.val()).forEach(function(item) {
                      
                        setAge(childSnapshot.val()[item]['Age'])
                        setGender(childSnapshot.val()[item]['Gender'])
                        console.log(age);
                        console.log(gender);
                        if (gender === 'Male')
                            {
                                setBMR(88.362 + (13.397*mass) + (4.799*heightM*100) - (5.677*age))
                                console.log(bmr)
                            }
                            if (gender === 'Female')
                            {
                                setBMR( 447.593 + (9.247*mass) + (3.098*heightM*100) - (4.330*age))
                                console.log(bmr)
                            }
                    })
                 }
             })
            })}
            return setGenderandAge;
    },[bmr,mass,heightfeet,heightinches])

    var database = firebase.database();
    let user = firebase.auth().currentUser.displayName;

    const showAndsend = () => {
        sendBMR();
        setVisible(true)
    }

    const sendBMR = async () => {
        await database.ref('users/BMR').child(user).push(
     {
         BMR: bmr.toFixed(2),
         timestamp: firebase.database.ServerValue.TIMESTAMP
     }
              ).catch((error) => alert(error));
     }

    return (
        <ScrollView contentContainerStyle={[styles.backgroundRest]}>
            <View style={{ width: '70%', alignSelf: 'center' }}>
                <Image source={require('../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center', justifyContent: 'space-evenly', paddingTop: -40, marginBottom: 30 }}></Image>
                <View style={{ paddingBottom: 200 }}>
                    <Text style={{ marginTop: 10, color: '#FFCB1F', fontSize: 40, paddingTop: 20, fontWeight: '400', alignSelf: 'center', textAlign: "center" }}>
                        BMR Calculator
           </Text>
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                        <TextInput
                            placeholder='Feet'
                            keyboardType='numeric'
                            style={styles.in}
                            onChangeText={
                                height => {
                                    setFeet(height * 0.3048)
                                }
                            }
                        >
                        </TextInput>
                        <TextInput
                            placeholder='Inches'
                            keyboardType='numeric'
                            onChangeText={
                                inches => {
                                    setInches(inches * 0.0254)
                                }
                            }
                            style={styles.in}>
                        </TextInput>
                        <TextInput
                            placeholder='Mass (KGs)'
                            keyboardType='numeric'
                            onChangeText={
                                mass => {
                                    setMass(mass)
                                }
                            }
                            style={styles.in}>
                        </TextInput>
                    </View><View style={{ paddingTop: 40 }}>
                        <TouchableOpacity
                            onPress = {showAndsend}
                            style={styles.inBlue}
                        ><Text style={{ fontWeight: 'bold' }}>Calculate</Text>
                        </TouchableOpacity>
                    </View>
                    {(visible === true) ? <Text style={{marginTop: 10, color: '#FFCB1F', fontSize: 40, paddingTop: 20, fontWeight: '400', alignSelf: 'center'}}>{bmr.toFixed(2)}</Text> : null}
                </View>
            </View>
        </ScrollView>
    )
}

export default BMR
