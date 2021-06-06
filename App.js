import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import BMI from './Screens/BMI';
import BMR from './Screens/BMR';
import Home from './Screens/Home/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
import { Main } from './Screens/Main'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  AuthContext  from './components/context'
import signInScreen from './Screens/SignIn'
import signUpScreen from './Screens/SignUp'
import  Landing  from './Screens/Landing'
//import  Home  from './Screens/Home/Home'
import  Profile  from './Screens/Profile/Profile'
import SplashScreen from './Screens/SplashScreen'
import ForgotPassword from './Screens/ForgotPassword';
import {UserDetails} from './context'
import { AsyncStorage } from 'react-native';

const Tab = createBottomTabNavigator();
export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false,
      logged: false
    }
    this.logChange = this.logChange.bind(this); //used this
  }
  logChange = () => { //used this
    this.state.logged = true
  } 
  componentDidMount() {
    setTimeout(() => {
      this.setState({loaded: true});
    }, 1000);
  };
  render(){
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [isLoggedIn, setLoggedIn] = React.useState(false);
  // this.props.navigation.setParams({
  //   searchText: bool,
  // });
  // this.setState({threebool:bool})
  //const [userToken, setUserToken] = React.useState(null);
  //setLoggedIn(props.log)
  // const authContext = React.useMemo(() => ({
  //   signIn: () => {
  //     setUserToken('fgkj');
  //     setIsLoading(false);
  //   },
  //   signOut: () => {
  //     setUserToken(null);
  //     setIsLoading(false);
  //   },
  //   signUp: () => {
  //     setUserToken('fgkj');
  //     setIsLoading(false);
  //   },
  // }));
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, [])
  
  if (!this.state.loaded) {
        return (
          <SplashScreen />
    )
  }
  if (this.state.loaded){
    return(
      <UserDetails>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
        {/* used this for state management ac = {this.logChange()} */}
        <Stack.Screen name="SignUp" component={signUpScreen} options={{headerShown:false}} />
          <Stack.Screen name="SignIn" ac = {this.logChange()} component={signInScreen} options={{headerShown:false}} />
          <Stack.Screen name="Forgot" component={ForgotPassword} options={{headerShown:true}} />
          {/* use header shown false for home screen in same screen */}
          {this.state.logged?(<Stack.Screen name="Main" component={Main} options={{headerShown:false}} />): null}
          {this.state.logged?(<Stack.Screen name="Home" component={Home} options={{headerShown:false}} />): null}
          {this.state.logged?(<Stack.Screen name="Profile" component={Profile} options={{headerShown:true}} />): null}
          <Stack.Screen name="BMI" component={BMI} options={{headerShown:true}} />
          <Stack.Screen name="BMR" component={BMR} options={{headerShown:true}} />
          </Stack.Navigator>
          </NavigationContainer>
          </UserDetails>
    )
  }
  //if (!isLoading && logged){
  // return (
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName="Main">
  //         {/* <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} /> */}
  //         <Stack.Screen name="Main" component={Main} options={{ title: '' }} />
  //         <Stack.Screen name="Home" component={Home} options={{ title: '' }} />
  //         <Stack.Screen name="Profile" component={Profile} options={{ title: '' }} />

  //       </Stack.Navigator>

  //     </NavigationContainer>

  // );
  
 // }
}
}
export default App