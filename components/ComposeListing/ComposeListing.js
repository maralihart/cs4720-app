import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase'; 
import 'firebase/auth';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function ComposeListing( { navigation } ) {
  const [title, onChangeTitle] = useState('')
  const [header, onChangeHeader] = useState('')
  const [content, onChangeContent] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [posts, setPosts] = useState()

  function setupPostsListener() {
    console.log("LOG: " + firebase.database().ref('/Posts'));
    firebase.database().ref('/Posts').on('value', (snapshot) => {
      console.log(snapshot.val());
      setPosts(snapshot.val());
    });
  }
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

  useEffect(() => {
    setupPostsListener()
  }, [])

  const submit = () =>{
    if(!title || !header || !content){
      setErrorMessage("Please fill out all fields");
    }
    else{
      console.log(posts);
      const num = posts + 1;
      firebase.database().ref('/Posts').set(num);
      firebase.database().ref('/listings/' + num).set({
        Content: content,
        Header: header,
        Title: title,
        key: num,
        Poster: name,
        user: email,
      })
      onChangeTitle('');
      onChangeHeader('');
      onChangeContent('');
      navigation.navigate('Navbar');
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTitle}
            value={title}
            placeholder="Enter title here "
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeHeader}
            value={header}
            placeholder="Enter header Here"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeContent}
            value={content}
            placeholder="Enter content Here"
            multiline
          />
          <Button
            onPress={() => submit()}
            title = "submit"
            />
      </SafeAreaView>
    </ScrollView>
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
    //height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

