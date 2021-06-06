import React,{useContext,useEffect} from 'react'
import styles from '../assets/styles'
import { View, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import {firebase,db} from './../firebase'
import {UserContext} from './../context'
// import AsyncStorage from '@react-native-community/async-storage'


export default function SignIn(props) {

    const STORAGE_KEY = '@save_age' 
   
    const {Name,Email,Password} = useContext(UserContext);
    const [email, setEmail] = Email;
    const [password, setPassword] = Password;

    useEffect(() => {
        readData();
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser)
            {
              props.navigation.replace('Home')
            }
             setEmail("");
             setPassword("");
        });
         return unsubscribe;
      },[]);
      
          const SignIn = () => {
             firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => alert(error));
          };

          const saveData = async () => {
            try {
              await AsyncStorage.setItem(STORAGE_KEY, age)
              alert('Data successfully saved')
            } catch (e) {
              alert('Failed to save the data to the storage')
            }
          }

          const readData = async () => {
            try {
              const userAge = await AsyncStorage.getItem(STORAGE_KEY)
          
              if (userAge !== null) {
                setAge(userAge)
              }
            } catch (e) {
              alert('Failed to fetch the data from storage')
            }
          }

    return (
        <ScrollView contentContainerStyle={[styles.backgroundRest]}>
        <Image source={require('../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center', justifyContent: 'space-evenly', marginTop: 80, marginBottom: 30 }}></Image>
        <View style={{ width: '70%', alignSelf: 'center' }}>
            <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 30, paddingTop: 20, fontWeight: '400' }}>
                Sign In
            </Text>
            <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 30 }}>
                Enter Email
            </Text>
            <TextInput style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
            }} placeholder="Insert your email!" onChangeText={(text) => setEmail(text)} />
            <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 5 }}>
                Enter Password
            </Text>
            <TextInput style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
            }} placeholder="Insert your password!" secureTextEntry onChangeText={(text) => setPassword(text)}/>
            </View>
            {/* </View> */}
            <View style={{ paddingTop: 40 }}>
                <TouchableOpacity
                    onPress={SignIn}
                    style={styles.inBlue}
                ><Text style={{ fontWeight: 'bold' }}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10 }}>
                <TouchableOpacity style={{ flex: 0, flexDirection: 'row', alignItems: 'center', marginTop: -20 }}
                    onPress={() => {
                        props.navigation.navigate('SignUp')
                    }}
                ><Text style={{ fontWeight: 400, color: '#FFFFFF' }}>Don't have an account? Click here</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10 }}>
                <TouchableOpacity style={{ flex: 0, flexDirection: 'row', alignItems: 'center', marginTop: -20 }}
                    onPress={() => {
                        props.navigation.navigate('Forgot',email);
                    }}
                //   onPress={() =>
                //     this.props.navigation.navigate('Covid', {
                //       userName: this.state.nu,
                //       otherParam: '101'
                //     })}
                ><Text style={{ fontWeight: 400, color: '#FFFFFF' }}>Forgot Password? Click here</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    )
}
