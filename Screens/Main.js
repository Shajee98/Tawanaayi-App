import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import  Home  from '../Screens/Home/Home'
import Profile from '../Screens/Profile/Profile'
import Info from '../Screens/Info'
const Tab = createMaterialBottomTabNavigator();


export class Main extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName="Home" labeled={false} shifting={true}
            labeled={false}
            sceneAnimationEnabled={false}
            activeColor="#3F51B5"
            inactiveTintColor="#757575"
            barStyle={{ backgroundColor: '#ffff' }}>
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color = {color} size={26} />
                        ), headerShown: false
                    }} />
                    <Tab.Screen name="Info" component={Info}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="information" color= {color} size={26} />
                        ), headerShown: false
                    }} />
                <Tab.Screen name="Profile" component={Profile} navigation={this.props.navigation}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color= {color} size={26} />
                        ),
                        headerShown: false
                    }} />
            </Tab.Navigator>
        )
    }
}

export default Main