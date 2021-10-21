import React, { useState } from 'react';
import { StyleSheet, View, Button, SafeAreaView } from 'react-native';
import { X } from 'react-native-feather';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Row, Text, Header, Banner, FieldItem } from '../Essentials/Essentials';
import Navbar from '../Navbar/Navbar';
import * as firebase from 'firebase';

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
        marginRight: 0,
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "lightgray",
        padding: 10,
        width: 300,
        flex: 4,
        backgroundColor: "rgb(242, 242, 247)"
    },
    text: {
        color: '#db6b5c',
        fontSize: 12
    },
    item: {
        flex: 1,
        width: "100%"
    },
    fieldItem: {
        flex: 1,
        width: "100%",
        padding: 200,
    },
    bigLogo: {
        flex: 1,
        height: 10,
        resizeMode: 'contain'
    },
    searchContainer: {
        padding: 30,
        flex: 0.05,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "92%"
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
    },
    listingContainer: {
        position: 'absolute',
        right: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    
    });
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
              var user = userCredential.user;
              console.log(JSON.stringify(user))
              firebase.auth().currentUser.sendEmailVerification().then(() => {});
              setErrorMessage("Please check your email to verify your account");
              console.log("Logging in as", email, password)
            })
              .catch((error) => {
                setErrorMessage(error.message);
                console.log(errorMessage);
              });
            console.log("Signing up with", name, email, password)
    
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
                  navigation.navigate('Navbar');
                }
                else{
                  setErrorMessage("Please check your email to verify your account");
                }
              })
              .catch((error) => {
                setErrorMessage(error.message);
                console.log(errorMessage);
              });
            console.log("Logging in as", email, password)
          }
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
              style={styles.searchContainer}
              onChangeText={onChangeName}
              value={name}
              placeholder="Enter Name Here"
            />
            }
            <View styles={styles.fieldItem}>
              <View style={styles.searchContainer}>
                <View style={styles.searchBarContainer}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="Enter Email Here"
                  />
                </View>
              </View>
            </View>
            <View styles={styles.fieldItem}>
              <View style={styles.searchContainer}>
                <View style={styles.searchBarContainer}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Enter Password Here"
                    secureTextEntry
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
          {/* TODO: Continue with Google button 
          https://docs.expo.dev/versions/latest/sdk/google-sign-in/*/}
          <Button
            onPress={() => authenticate()}
            title={loginMode ? "Login" : "Signup"} />
        </View>
      );
    }

     function Signup() {
      const [loginMode, SetLoginMode] = useState(true)
      const [name, onChangeName] = useState('')
      const [email, onChangeEmail] = useState('')
      const [password, onChangePassword] = useState('')
      const [errorMessage, setErrorMessage] = useState(null)  
      const [topic, onSearchTopic] = useState('Search')
      const [resuts, onFindResults] = useState(' ')

  const authenticate = () => {
    setErrorMessage(null)
    if (!loginMode) {
      if(email.toLowerCase().includes('@virginia.edu')){
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
          userCredential.user.updateProfile({
            displayName: name
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
              navigation.navigate('Navbar');
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
    </View>
  )
}
