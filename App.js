import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
import Listing from './components/Listing/Listing.js';
import ListingPreview from './components/ListingPreview/ListingPreview.js';

export default function App() {
  const [authenticated, setAuthenticated] = useState(true);
  const Stack = createNativeStackNavigator();

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
      <Stack.Navigator initialRouteName={!initializing ? "Navbar" : "Login"}>
        <Stack.Screen name="Navbar" component={Navbar} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="ComposeListing" component={ComposeListing} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Listing" component={Listing} />
        <Stack.Screen name="ListingPreview" component={ListingPreview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
