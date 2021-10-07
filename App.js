import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Listing from './components/Listing/Listing.js';
import ListingPreview from './components/ListingPreview/ListingPreview.js';
import * as firebase from 'firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { releaseChannel } from 'expo-updates';


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "cs4710mobileappdev.firebaseapp.com",
  projectId: "cs4710mobileappdev",
  storageBucket: "cs4710mobileappdev.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: "1:852344152474:web:55fd0f415224a04400da23",
  measurementId: "G-P3N28NP6LE"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return(
    //Uncomment this seciton to test ListingPreview
    <View>
      <ListingPreview
        ID={1}
      />
    </View>

//Uncomment this section to test Listing
    /*<View>
      <Listing/>
    </View>*/
  );
};