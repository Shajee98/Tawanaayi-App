import React, { useState,useContext } from 'react'
import styles from '../assets/styles'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {UserContext} from './../context'
import {firebase,db} from './../firebase'
import { useEffect } from 'react';


export default function SignUp({navigation,route}) {

    const {Name,Email,Password,Gender,DOB} = useContext(UserContext);

    const [name, setName] = Name;
    const [email, setEmail] = Email;
    const [password, setPassword] = Password;
    const [gender, setGender] = useState('Male')
    const [age, setAge] = useState(0);
    const [date, setDate] = DOB
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    // var database = firebase.database();
    // let user = firebase.auth().currentUser.email;
    // let uid = user.uid;

    useEffect(() => {
        const getAge = () => {
           const year = new Date();
        // const currYear = year.getTime();
        // const birth_date = date.getTime();
        //    setAge(new Number((currYear-birth_date)/31536000000).toFixed(0))
        const currYear = year.getFullYear();
        setAge(currYear - parseInt(date.substring(0,4),10))
        }
        getAge();
    },[date,age])

    var database = firebase.database();

    const sendUserDetails = async () => {
        await database.ref('users/details').child(name.toString()).push(
            {
                Gender: gender,
                Age: age
            }
        )
        // await db.collection('users').doc(email.toString()).collection("user").add(
        //     {
        //         Name: name,
        //         Gender: gender,
        //         Age: age
        //     }
        // )
    }

    const onChange = (event, selectedDate) => {
        setShow(Platform.OS === 'ios');
        if (mode == 'date') {
            const currentDate = selectedDate || new Date();
            setDate(currentDate);
            setShow(Platform.OS !== 'ios'); // to show time
        }
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };
    const checkTextInput = () => {
        if (name === '') {
            alert('Please Enter Name');
            return;
        }
        else if (email === '') {
            alert('Please Enter Email');
            return;
        }
        else if (password === '') {
            alert('Please Enter Password');
            return;
        }
        else if (gender === '') {
            alert('Please Enter Gender');
            return;
        }
        else if (!date.match(/\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/)) {
            alert('Please Enter Date of Birth');
            return;
        }
        //Checked Successfully
        //Do whatever you want
        else {
            register();
            sendUserDetails();
        }
    };
    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
            }).then(navigation.navigate('SignIn'))
        }).catch((error) => alert(error.message))
      }
    return (
        <ScrollView contentContainerStyle={[styles.backgroundRest]}>
            <Image source={require('../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center', justifyContent: 'space-evenly', marginTop: 40, marginBottom: 30 }}></Image>
            <View style={{ width: '70%', alignSelf: 'center', marginTop: -40 }}>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 30, paddingTop: 20, fontWeight: '400' }}>
                    Sign Up
                </Text>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 30 }}>
                    Enter Full Name
                </Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
                }} placeholder="Insert your full name!" onChangeText={(text) => { setName(text) }} />
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 5 }}>
                    Enter Email
                </Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
                }} placeholder="Insert your email!" onChangeText={(text) => { setEmail(text) }} />
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 5 }}>
                    Enter Password
                </Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
                }} placeholder="Insert your password!" secureTextEntry={true} onChangeText={(text) => { setPassword(text) }} />
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 5 }}>
                    Gender
                </Text>
                <Picker
                    selectedValue={gender}
                    style={{ height: 50, width: 150, borderRadius: 15, color: '#000000' }}
                    onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                    itemStyle={{ backgroundColor: "#3265AB", fontFamily: "Poppins", fontSize: 19 }} 
                >
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Other" value="Other" />
                </Picker>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 5 }}>
                    Date of Birth
                </Text>
                {/* <View>
                    <Button onPress={showDatepicker} title="Show date picker!" />
                </View>
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )} */}
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
                }} placeholder="Insert your Date of Birth: YYYY-MM-DD" onChangeText={(text) => { setDate(text) }} />
            </View>
            <View style={{ paddingTop: 40 }}>
                <TouchableOpacity
                    onPress={checkTextInput}
                    style={styles.inYellow}
                ><Text style={{ fontWeight: 'bold' }}>Create account</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10 }}>
                <TouchableOpacity style={{ flex: 0, flexDirection: 'row', alignItems: 'center', marginTop: -20 }}
                    onPress={() => {
                        navigation.navigate('SignIn'),console.log(age)
                    }}
                ><Text style={{ fontWeight: 400, color: '#FFFFFF' }}>Already have an account? Click here</Text>
                </TouchableOpacity>
            </View>



        </ScrollView>
    )
}
