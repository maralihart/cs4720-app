import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { releaseChannel } from 'expo-updates';

import * as firebase from 'firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import Login from './components/Login/Login';
import Feed from './components/Feed/Feed';
import Calendar from './components/Calendar/Calendar';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import ComposeListing from './components/ComposeListing/ComposeListing';
import Listing from './components/Listing/Listing';
import ListingPreview from './components/ListingPreview/ListingPreview';
// import SplashScreen from './components/SplashScreen/SplashScreen';
import LogoHeader from './components/LogoHeader/LogoHeader';


export default function App() {
  const Stack = createNativeStackNavigator();

  const [appIsReady, setAppIsReady] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyA6bvrrwuVo15KB0rjyJefDokY4ac3fYKs",
    authDomain: "cs4710mobileappdev.firebaseapp.com",
    projectId: "cs4710mobileappdev",
    storageBucket: "cs4710mobileappdev.appspot.com",
    messagingSenderId: "852344152474",
    appId: "1:852344152474:web:55fd0f415224a04400da23",
    measurementId: "G-P3N28NP6LE"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={!initializing ? "Login" : "Login"}>
        <Stack.Screen name="Navbar" component={Navbar} options= {{headerShown: false}}/>
        {/* <Stack.Screen name="Feed" component={Feed} options= {{headerTitle: (props) => <LogoHeader {...props} /> }} /> */}
        <Stack.Screen name="Feed" component={Feed} options= {{headerShown: false}}/>
        <Stack.Screen name="Calendar" component={Calendar} options= {{headerShown: false}}/>
        <Stack.Screen name="ComposeListing" component={ComposeListing} options= {{headerShown: false}}/>
        <Stack.Screen name="Profile" component={Profile} options= {{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options= {{headerShown: false}}/>
        <Stack.Screen name="Listing" component={Listing} options= {{headerShown: false}}/>
        <Stack.Screen name="ListingPreview" component={ListingPreview} options= {{headerShown: false}}/>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options= {{headerShown: false}}/> */}
      </Stack.Navigator>
      {/* <LogoHeader/> */}
    </NavigationContainer>
  );
}
