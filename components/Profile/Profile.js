import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'firebase/auth';
import * as firebase from 'firebase';

export default function Profile({ navigation }) {
  const auth = firebase.auth();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  auth.onAuthStateChanged(user => {
    console.log(user);
    if (user) {
      setName(user.displayName);
      setEmail(user.email);
    } else {
    }
  });
  return (
    <View style={styles.container}>
      <Text>{!!(name) && name}</Text>
      <Text>{!!(email) && email}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
