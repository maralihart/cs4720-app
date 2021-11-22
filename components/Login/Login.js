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
import 'firebase/auth';

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
      if(email.toLowerCase().includes('@virginia.edu')){
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
          userCredential.user.updateProfile({
            displayName: name
          })
          firebase.database().ref('/Profiles/' + email).set({
            bio: "Default Bio",
          })
          var user = userCredential.user;
          firebase.auth().currentUser.sendEmailVerification().then(() => {});
          setErrorMessage("Please check your email to verify your account");
        })
          .catch((error) => {
            setErrorMessage(error.message);
          });

      }
      else{
        setErrorMessage('Please use a Univeristy of Virginia email')
      } 
    }else {
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            var user = firebase.auth().currentUser;
            if(user.emailVerified){
              onChangePassword('');
              navigation.navigate('Feed');
            }
            else{
              setErrorMessage("Please check your email to verify your account");
            }
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      }
  }

  const forgotPassword = () => {
    // TODO: Proper error handling with invalid email
    setErrorMessage(null)
    if (!email) setErrorMessage("Invalid email.")
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
          title={loginMode ? "Sign Up" : "Login"} 
          color = "#db6b5c" />
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
        title={loginMode ? "Login" : "Signup"} 
        color = "#db6b5c" />
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
