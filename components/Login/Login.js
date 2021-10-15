import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { X } from 'react-native-feather';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Row, Text, Header, Banner } from '../Essentials/Essentials';
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

export default function Signup() {  
  const [topic, onSearchTopic] = useState('Search')
  const [name, onChangeName] = useState(' ')
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
      <Header flex={0.4}>
          <Banner>
          <TouchableHighlight>
                  <X style={{color: 'gray'}}/>
              </TouchableHighlight>
              <Text bold size={28}>Log In</Text>
              <TouchableHighlight>
                  <Text size={16} color={'green'}>Sign Up</Text>
              </TouchableHighlight>
          </Banner>
      </Header>
      <View styles={styles.fieldItem}>
          <View style={styles.searchContainer}>
              <View style={styles.searchBarContainer}>
                  <TextInput 
                      style = {styles.input}
                      onChangeText = {onSearchTopic}
                      placeholder = "Email"
                      />
              </View>
          </View>
      </View>
      <View styles={styles.fieldItem}>
          <View style={styles.searchContainer}>
              <View style={styles.searchBarContainer}>
                  <TextInput 
                      style = {styles.input}
                      onChangeText = {onSearchTopic}
                      placeholder = "Password"
                      />
              </View>
          </View>
      </View>
      <View style={styles.item}>
      </View>
    </View>
  )
}
