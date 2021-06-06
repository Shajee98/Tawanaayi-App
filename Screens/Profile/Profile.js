import React from 'react'
import { useLayoutEffect } from 'react';
import { useContext,useEffect,useState } from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import styles from '../../assets/styles'
import {firebase, db} from '../../firebase'
import {UserContext} from './../../context'

const Item = ({ title, id, date }) => (
  <View style={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap' }}>
    <View style={{ borderColor: '#FFFFFF', alignItems: 'center', width: '50%' }}>
      <Text style={{ paddingLeft: 5, paddingRight: 2, paddingBottom: 5, paddingTop: 5, color: '#FFFFFF', alignSelf: 'center' }}>{date}</Text>
    </View>
    <View style={{ borderColor: '#FFFFFF', alignItems: 'center', width: '50%' }}>
      <Text style={{ paddingLeft: 2, paddingRight: 5, paddingBottom: 5, paddingTop: 5, color: 'green', alignSelf: 'center' }}>{title}</Text>
    </View>
  </View>
);
export default function Profile() {

  const {Gender} = useContext(UserContext);
  
  const [gender, setGender] = Gender
  const [age, setAge] = useState(0);
  const [bmi,setBMI] = useState([]);
  const [bmr,setBMR] = useState([]);
  const [bmiTimestamps, setBmiTimestamps] = useState([])
  const [bmrTimestamps, setBmrTimestamps] = useState([])

    useEffect(() => {
       setGenderandAge();
       getBMILogs();
       getBMRLogs();
  },[bmi,bmr])

  console.log(age);
  console.log(gender);
  console.log(bmi);
  console.log(bmr);
  console.log(bmiTimestamps);
  console.log(bmrTimestamps);

  const setGenderandAge = async () => {
    await database.ref('users/details').on('value', function(snapshot) {
         snapshot.forEach(function(childSnapshot) {
             if (childSnapshot.key === user)
             {
                Object.keys(childSnapshot.val()).forEach(function(item) {
              
                    setAge(childSnapshot.val()[item]['Age'])
                    setGender(childSnapshot.val()[item]['Gender'])
                  
                })
             }
         }) 
        })}

        const getBMILogs = async () => {

          await database.ref('users/BMI').on('value', function(snapshot) {
               snapshot.forEach(function(childSnapshot) {
                   if (childSnapshot.key === user)
                   {
                      Object.keys(childSnapshot.val()).forEach(function(item) {

                          bmi.push(childSnapshot.val()[item]['BMI'])
                          bmiTimestamps.push(childSnapshot.val()[item]['timestamp'])
                        
                      })
                   }
               }) 
              })}

              const getBMRLogs = async () => {

                await database.ref('users/BMR').on('value', function(snapshot) {
                     snapshot.forEach(function(childSnapshot) {
                         if (childSnapshot.key === user)
                         {
                            Object.keys(childSnapshot.val()).forEach(function(item) {

                              bmr.push(childSnapshot.val()[item]['BMR'])
                                bmrTimestamps.push(childSnapshot.val()[item]['timestamp'])
                              
                            })
                         }
                     }) 
                    })}

    var database = firebase.database();
    let user = firebase.auth().currentUser.displayName;
  // const DATA = [
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'First Item',
  //     date: '2021-02-20'
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Second Item',
  //     date: '2021-02-20'
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Third Item',
  //     date: '2021-02-20'
  //   },
  // ];

  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} date={item.date} />
  );

  // const renderItem =(group) => {
  //   const listItems = group.map((member) => {
  //     return <Text>{member}</Text>
  //   })
  //   return listItems;
  // }
  const renderSeparatorView = () => {
    return (
      <View style={{
        height: 1,
        width: "80%",
        alignSelf: 'center',
        backgroundColor: "#CEDCCE",
      }}
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={{
      backgroundColor: '#000000',
      flex: 1,
      justifyContent: 'center'
    }}>
      <View style={{ width: '80%', alignSelf: 'center', height: '100%', paddingTop: 20 }}>
        <Image source={require('../../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center', justifyContent: 'space-evenly', marginTop: 40, marginBottom: 10 }}></Image>
        <View>
          <Text style={{ marginTop: 5, color: '#FFFFFF', fontSize: 30, paddingTop: 10, fontWeight: '400', alignSelf: 'center', textAlign: "center"}}>
            {user}
           </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontFamily: "sans-serif", marginTop: 5, color: '#f5f5f5', fontSize: 15, paddingTop: 10, fontWeight: '50', alignSelf: 'center', paddingRight: 15 }}>
              {gender}
            </Text>
            <Text style={{ marginTop: 5, color: '#f5f5f5', fontSize: 15, paddingTop: 10, fontWeight: '50', alignSelf: 'center', paddingLeft: 15 }}>
              {age} years old
           </Text>
          </View>
          <Text style={{ color: '#FFFFFF', paddingLeft: '10%', fontSize: 28, paddingTop: 30, paddingBottom: 5, fontWeight: '300' }}>
            BMI Logs*
           </Text>
          <FlatList
            data={bmi}
            renderItem={renderItem}
              // ({item}) => (<Text style={{width: "200px"}}>{item}</Text>)
            
            keyExtractor={item => item.id}
            ItemSeparatorComponent={renderSeparatorView}

          />
          <Text style={{marginRight:'10%', color: '#FFFFFF', fontSize:11, fontWeight: '100', flexDirection: 'row', alignSelf:'flex-end', paddingTop: 5}}>
            *Latest three
          </Text>

          <Text style={{ color: '#FFFFFF', paddingLeft: '10%', fontSize: 28, paddingTop: 40, paddingBottom: 5, fontWeight: '300' }}>
            BMR Logs*
           </Text>
          <FlatList
            data={bmr}
            renderItem={renderItem}
              // ({item}) => (<Text style={{width: "200px"}}>{item}</Text>)
            keyExtractor={item => item.id}
            ItemSeparatorComponent={renderSeparatorView}

          />
          <Text style={{marginRight:'10%', color: '#FFFFFF', fontSize:11, fontWeight: '100', flexDirection: 'row', alignSelf:'flex-end', paddingTop: 5}}>
            *Latest three
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}