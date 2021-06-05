import React,{useContext,useLayoutEffect,useState,useEffect} from 'react'
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import styles from '../assets/styles'
import {UserContext} from './../context'
import { firebase,db } from '../firebase'


   function BMI () {
    const {Feets,Inches,Mass,HeightM,BMI} = useContext(UserContext);

    const [heightfeet, setFeet] = Feets;
    const [heightinches, setInches] = Inches;
    const [heightM, setMeters] = HeightM;
    const [mass, setMass] = Mass;
    const [bmi, setBMI] = BMI;
    const [visible, setVisible] = useState(false);

    var database = firebase.database();
    let user = firebase.auth().currentUser.displayName

    useEffect(() => {
        setMeters(heightfeet+heightinches)
        setBMI(mass/(heightM*2));
        setVisible(false);
    },[heightfeet,heightinches,mass])

    const showAndsend = () => {
        sendBMI();
        setVisible(true);
    }

    const sendBMI = async () => {
       await database.ref('users/BMI').child(user).push(
    {
        BMI: bmi.toFixed(2),
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
                        BMI Calculator
           </Text>
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                        <TextInput
                            placeholder='Feet'
                            keyboardType='numeric'
                            style={styles.in}
                            onChangeText={
                                feets => {
                                    setFeet(feets * 0.3048)
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
                            onSubmitEditing={sendBMI}
                            onChangeText={
                                mass => {
                                    setMass(mass)
                                }
                            }
                            style={styles.in}>
                        </TextInput>
                    </View>
                    <View style={{ paddingTop: 40 }}>
                        <TouchableOpacity 
                            onPress={showAndsend}
                            style={styles.inYellow}
                        ><Text style={{ fontWeight: 'bold' }}>Calculate</Text>
                        </TouchableOpacity>
                    </View>
                    {(visible === true) ? <Text style={{cmarginTop: 10, color: '#FFCB1F', fontSize: 40, paddingTop: 20, fontWeight: '400', alignSelf: 'center'}}>{bmi.toFixed(2)}</Text> : null}
                </View>  
            </View>
        </ScrollView>
    )
}

export default BMI
