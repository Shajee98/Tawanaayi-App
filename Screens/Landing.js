import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createMaterialBottomTabNavigator();
import { Button, View, Text } from 'react-native';


export default function Landing({ navigation }) {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
                title="Register"
                onPress={() => navigation.navigate("SignUp")} />
            <Button
                title="Login"
                onPress={() => navigation.navigate("SignIn")} />
        </View>
            
        )
}

//export default Landing
