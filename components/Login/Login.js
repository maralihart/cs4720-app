import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Button, StyleSheet, View } from 'react-native';
import { X } from 'react-native-feather';
import { TextInput } from 'react-native-gesture-handler';
import { Row, Text } from '../Essentials/Essentials';
import * as firebase from 'firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Login({ navigation }) {
  const [loginMode, SetLoginMode] = useState(true)
  const [name, onChangeName] = useState('')
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const authenticate = () => {
    // TODO: Error handling with invalid name, email, and password
    // TODO: Set up API to handle authentication
    setErrorMessage(null)
    if (!loginMode) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        userCredential.user.updateProfile({
          displayName: name
        })
        var user = userCredential.user;
        console.log(JSON.stringify(user))
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            var user = userCredential;
            console.log("login: " + user.email + user.name)
            onChangePassword('');
            navigation.navigate('Navbar');
          })
          .catch((error) => {
            setErrorMessage(error.message);
            console.log(errorMessage);
          });
        console.log("Logging in as", email, password)
      })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(errorMessage);
        });
      console.log("Signing up with", name, email, password)

    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          onChangePassword('');
          navigation.navigate('Navbar');
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(errorMessage);
        });
      console.log("Logging in as", email, password)
    }
  }

  const forgotPassword = () => {
    // TODO: Proper error handling with invalid email
    setErrorMessage(null)
    if (!email) setErrorMessage("Invalid email.")
    console.log("Forgot password", email)
  }
  return (
    <View style={styles.container}>
      <Row>
        <X fill="#000" width={32} height={32} />
        {loginMode
          ? <Text size={24}>Login</Text>
          : <Text size={24}>Sign Up</Text>
        }
        <Button
          onPress={() => SetLoginMode(!loginMode)}
          title={loginMode ? "Sign Up" : "Login"} />
      </Row>
      <Text color="red">{errorMessage}</Text>
      <SafeAreaView>
        {!loginMode && <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Enter Name Here"
        />
        }
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Enter Email Here"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Enter Password Here"
          secureTextEntry
        />
      </SafeAreaView>
      {/* TODO: Continue with Google button 
      https://docs.expo.dev/versions/latest/sdk/google-sign-in/*/}
      <Button
        onPress={() => authenticate()}
        title={loginMode ? "Login" : "Signup"} />
      <Button
        onPress={() => forgotPassword()}
        title="Forgot Password?" />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
