import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/SearchBar/SearchBar';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Feed from './components/Feed/Feed'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
// import Login from './components/Login/Login';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <SearchBar/> */}
      {/* <SearchBar/> */}
      {/* <SearchBar/> */}
      <Signup/>
      <StatusBar style="auto" />
    </View>

//Uncomment this section to test Listing
/*
    <View>
      <Listing
      data = {[
        {key: 1, Title: 'Free item 1', Content: 'This is a free item'},
        {key: 2, Title: 'Free item 2', Content: 'This is a free item'},
        {key: 3, Title: 'Free item 3', Content: 'This is a free item'},
        {key: 4, Title: 'Free item 4', Content: 'This is a free item'},
        {key: 5, Title: 'Free item 1', Content: 'This is a free item'},
        {key: 6, Title: 'Free item 2', Content: 'This is a free item'},
        {key: 7, Title: 'Free item 3', Content: 'This is a free item'},
        {key: 8, Title: 'Free item 4', Content: 'This is a free item'},
        {key: 9, Title: 'Free item 1', Content: 'This is a free item'},
        {key: 10, Title: 'Free item 2', Content: 'This is a free item'},
        {key: 11, Title: 'Free item 3', Content: 'This is a free item'},
        {key: 12, Title: 'Free item 4', Content: 'This is a free item'},
        {key: 13, Title: 'Free item 1', Content: 'This is a free item'},
        {key: 14, Title: 'Free item 2', Content: 'This is a free item'},
        {key: 15, Title: 'Free item 3', Content: 'This is a free item'},
        {key: 16, Title: 'Free item 4', Content: 'This is a free item'},
        {key: 17, Title: 'Free item 1', Content: 'This is a free item'},
        {key: 18, Title: 'Free item 2', Content: 'This is a free item'},
        {key: 19, Title: 'Free item 3', Content: 'This is a free item'},
        {key: 20, Title: 'Free item 4', Content: 'This is a free item'},
      ]}
      />
    </View>*/
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});