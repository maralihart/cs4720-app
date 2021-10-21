import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components/native';

function NavbarContainer(props) {
  const Container = styled.View`
    flex: ${props.flex ? props.flex : 1};
    flexDirection: ${props.direction ? props.direction : 'row'};
    backgroundColor: ${props.bgcolor ? props.bgcolor : '#fff'};
    alignItems: ${props.align ? props.align : 'flex-end'};
    justifyContent: ${props.justify ? props.justify : 'space-around'};
    `;
    
    return (
      <Container>
      { props.children }
    </Container>
  )
}

export default function Navbar({ navigation }) {
  return (
      <NavbarContainer>
        <Button
          title="New Listing"
          onPress={() => navigation.navigate('ComposeListing')}
        />
        <Button
          title="Listings"
          onPress={() => navigation.navigate('Listing')}
        />
        <StatusBar style="auto" />
      </NavbarContainer>
  );
}
