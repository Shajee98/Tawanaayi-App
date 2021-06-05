import React, { Component, } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BMI from '../Screens/BMI/BMI';
import Home from '../Screens/Home/Home';
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="BMI" component={BMI} />
    </Tab.Navigator>
  );
}