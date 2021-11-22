import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import * as firebase from 'firebase';
import Navbar from '../Navbar/Navbar';
import { SafeAreaView, Dimensions, Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import { Row, Banner, Header, DefaultContainer, ComponentItem, ListingContainer, SmallLogo } from '../Essentials/Essentials';

export default function Profile({ navigation , route}) {
  const { name } = route.params;
  const { email } = route.params;
  const [data, setData] = useState(null)
  const [bio, setBio] = useState(null)
  const [editMode, setEditMode] = useState(false);
  const [newBio, setNewBio] = useState(null);

  const auth = firebase.auth();
  const [accName, setAccName] = useState(null);
  const [accEmail, setAccEmail] = useState(null);
  auth.onAuthStateChanged(user => {
    if (user) {
      setAccName(user.displayName);
      setAccEmail(user.email);
    } else {
    }
  });


  function setupListListener() {
    firebase.database().ref('listings').on('value', (snapshot) => {
      if (snapshot.val() != null) {
        setData(snapshot.val().filter((item) => (item != null && item && item.User == email)));
      }

    })
  }
  function setupBioListener(){
    firebase.database().ref('/Profiles/' + email.substr(0, email.indexOf('@'))).on('value', (snapshot) => {
      if (snapshot.val() != null) {
        setBio(snapshot.val().bio)
        setNewBio(snapshot.val().bio)
      }
    })
  }

  useEffect(() => {
    setupListListener()
    setupBioListener()
  }, [])
  function renderItem({ item }) {
    let itemKey = item.Key;
    return (
      <View style={styles.view}>
        <TouchableOpacity onPress={() => { navigation.navigate({ name: 'ListingPreview', params: { key: itemKey, }, }) }}>
          <Text style={styles.item}>[{item.Header}] {item.Title}</Text>
          <Text style={styles.description}>{item.Header == "Event" && `${item.Date}\n`}{item.Content}</Text>
        </TouchableOpacity>
      </View >)
  }

  function SortingFunction(first, second){
    if (first.key > second.key){
      return -1;
    }
    else{
      return 1;
    }
  }
  
  function submitNewBio(){
    firebase.database().ref('/Profiles/' + email.substr(0, email.indexOf('@'))).update({
      bio: newBio,
    })
  }
  return (
<DefaultContainer>
  
    <View style={styles.container}>
    <SafeAreaView>
    <ScrollView>
      <Text style = {styles.name}>{!!(name) && name}</Text>
      {!editMode && <Text>Bio: </Text>}
      {!editMode && <Text>{!!(bio) && bio}</Text>}
      {editMode && <TextInput
            style={styles.input}
            onChangeText={setNewBio}
            value={newBio}
            placeholder="Enter new bio here"
          />}
          {editMode && <Button
            onPress={() => {
              submitNewBio();
              setEditMode(!editMode)
			}}
            title = "Submit New Bio"
            color = "#db6b5c"
            />}
      {(email == accEmail) && <TouchableOpacity
            onPress={() => {
              setEditMode(!editMode)
			}}
            
            style = {styles.editButton}
            ><Text>{ editMode ? "Cancel Edit" : "Edit Bio"}</Text></TouchableOpacity>}
      
      <StatusBar style="auto" />
      </ScrollView>
      {Array.isArray(data) &&
        <FlatList
          data={data.sort(SortingFunction)}
          renderItem={renderItem}
          keyExtractor={item => {
            return item.Key.toString();
          }
          }
          style={styles.container}
        />}
      </SafeAreaView>
      
    </View>
    
    <View style = {styles.navbar}>
    <Navbar navigation={navigation}/>
    </View>
    
</DefaultContainer>
    
  );
}

const styles = StyleSheet.create({
  editButton:{
    backgroundColor: '#87CEEB',
    borderRightWidth: Dimensions.get('window').width *.8,
    borderRightColor: 'white'
  },
  input: {
		//height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	  },
  Logo: {
    color: "rgb(231, 111, 81)",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    alignSelf: "stretch",
    marginLeft: 119,
    marginRight: 118,
  },
  container: {
    marginTop: 100,
    marginBottom: 20,
  },
  item: {
    marginLeft: 10,
    fontSize: 18,
    height: 24,
  },
  description: {
    padding: 0,
    fontSize: 14,
    height: 36,
    marginLeft: 10,
  },
  view: {
    marginBottom: 10
  },
  navbar:{
    marginBottom: 70
  },
  name: {
    marginTop: 10,
    textAlign: "center",
  },
})
