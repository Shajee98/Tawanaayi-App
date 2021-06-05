import React from 'react'
import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import styles from '../../assets/styles'
const Item = ({ title, id, date }) => (
  <View style={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap' }}>
    <View style={{ borderColor: '#FFFFFF', alignItems: 'center', width: '50%' }}>
      <Text style={{ paddingLeft: 5, paddingRight: 2, paddingBottom: 5, paddingTop: 5, color: '#FFFFFF', alignSelf: 'center' }}>{date}</Text>
    </View>
    <View style={{ borderColor: '#FFFFFF', alignItems: 'center', width: '50%' }}>
      <Text style={{ paddingLeft: 2, paddingRight: 5, paddingBottom: 5, paddingTop: 5, color: '#FFFFFF', alignSelf: 'center' }}>{title}</Text>
    </View>
  </View>
);
export default function Profile() {
  //add context to get the user details here
  const name = ''
  const bmiLogs = []
  const bmrLogs = []
  const gen = 'Male' //use the gender from the db
  const [gender, setGender] = React.useState('')
  const setAGender = () => {
    if (gen === 'Male') {
      setGender('M')
    }
    else if (gen === 'Female') {
      setGender('F')
    }
    else if (gen === 'Other') {
      setGender('O')
    }
  }
  React.useEffect(() => {
    setAGender()
  }, [])
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      date: '2021-02-20'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      date: '2021-02-20'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      date: '2021-02-20'
    },
  ];

  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} date={item.date} />
  );
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
          <Text style={{ marginTop: 5, color: '#FFFFFF', fontSize: 40, paddingTop: 10, fontWeight: '400', alignSelf: 'center' }}>
            Jhon Raza
           </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontFamily: "sans-serif", marginTop: 5, color: '#f5f5f5', fontSize: 15, paddingTop: 10, fontWeight: '50', alignSelf: 'center', paddingRight: 15 }}>
              {gender}
            </Text>
            <Text style={{ marginTop: 5, color: '#f5f5f5', fontSize: 15, paddingTop: 10, fontWeight: '50', alignSelf: 'center', paddingLeft: 15 }}>
              20 years old
              {/* calculate age from DB */}
           </Text>
          </View>
          <Text style={{ color: '#FFFFFF', paddingLeft: '10%', fontSize: 28, paddingTop: 30, paddingBottom: 5, fontWeight: '300' }}>
            BMI Logs*
           </Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
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
            data={DATA}
            renderItem={renderItem}
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