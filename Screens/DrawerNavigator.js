import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile/Profile';
import Home from './Home/Home';


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
       <NavigationContainer independent={true}>
           <Drawer.Navigator>
               <Drawer.Screen name="Profile" component={Profile}/>
               <Drawer.Screen name="Home" component={Home}/>
           </Drawer.Navigator>
       </NavigationContainer>
    )
}

export default DrawerNavigator
