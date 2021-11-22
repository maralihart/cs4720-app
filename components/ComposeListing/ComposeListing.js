import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase'; 
import 'firebase/auth';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import moment from 'moment';

export default function ComposeListing( { navigation } ) {
  const [title, onChangeTitle] = useState('')
  const [header, onChangeHeader] = useState('')
  const [content, onChangeContent] = useState('')
  const [date, onChangeDate] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [posts, setPosts] = useState()

  function setupPostsListener() {
    firebase.database().ref('/posts').on('value', (snapshot) => {
      setPosts(snapshot.val());
    });
  }
  const auth = firebase.auth();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  auth.onAuthStateChanged(user => {
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
    console.log("Submit button pressed")
    const validHeaders = ["Event", "Free Item", "Barter Item"]
    console.log("before if statements")
    if(!title || !header || !content || (header == "Event" && date == null)){
      console.log("Error message1")
      setErrorMessage("Please fill out all fields");
    }
    else if(!validHeaders.includes(header)) {
      console.log(header)
      console.log("Error message2")
      setErrorMessage("Header must be one of the following values: ", validHeaders.join(", "))
    }
    else if(header == "Event" && !moment(date, "YYYY-MM-DD", true).isValid()) {
      console.log(date)
      console.log("Error message3")
      setErrorMessage("Please enter the date in the format of MM/DD/YYYY")
    }
    else{
      console.log("About to add to database")
      const num = posts + 1;
      firebase.database().ref('/posts').set(num);
      firebase.database().ref('/listings/' + num).set({
        Content: content,
        Header: header,
        Title: title,
        Key: num,
        Date: header == "Event" ? date : "",
        Poster: name,
        User: email,
        CommentsNum: 0,
      })
      firebase.database().ref('/listings/' + num + '/comments').set({
      })
      onChangeTitle('');
      onChangeHeader('');
      onChangeContent('');
      navigation.navigate('Feed');
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
            placeholder="Enter event/item name here"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeHeader}
            value={header}
            placeholder="Enter event/item type here (event/free item/barter item)"
          />
          {header == "Event" && <TextInput
            style={styles.input}
            onChangeText={onChangeDate}
            value={date}
            placeholder="Date of Event in the format YYYY-MM-DD"
          />}
          <TextInput
            style={styles.input}
            onChangeText={onChangeContent}
            value={content}
            placeholder="Enter event/item information here"
            multiline
          />
          <Text> { errorMessage }</Text>
          <Button
            onPress={() => {
              submit();
              }}
            title = "submit"
            color = "#db6b5c"
            />
      </SafeAreaView>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
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

