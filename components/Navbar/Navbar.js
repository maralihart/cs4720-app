import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components/native';
import { Banner, Row, Header } from '../Essentials/Essentials';
import 'firebase/auth';
import * as firebase from 'firebase';

function NavbarContainer(props) {
  const Container = styled.View`
    flex: ${props.flex ? props.flex : .06};
    flexDirection: ${props.direction ? props.direction : 'row'};
    backgroundColor: ${props.bgcolor ? props.bgcolor : '#db6b5c'};
    alignItems: ${props.align ? props.align : 'flex-end'};
    justifyContent: ${props.justify ? props.justify : 'space-around'};
    `;

  return (
    <Container>
      {props.children}
    </Container>
  )
}
export default function Navbar({ navigation }) {
  const auth = firebase.auth();
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  auth.onAuthStateChanged(user => {
    if (user) {
      setUser(user);
      setName(user.displayName);
      setEmail(user.email);
    } else {
    }
  });
  return (
    <NavbarContainer>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile', { name: name, email: email })}
        color="#db6b5c"
      />
      <Button
        title="New Listing"
        onPress={() => navigation.navigate('ComposeListing')}
        color="#db6b5c"
      />
      <Button
        title="Feed"
        onPress={() => navigation.navigate('Feed')}
        color="#db6b5c"
      />
      <Button
        title="Calendar"
        onPress={() => navigation.navigate('Calendar')}
        color="#db6b5c"
      />
      <StatusBar style="auto" />
    </NavbarContainer>
  );
}