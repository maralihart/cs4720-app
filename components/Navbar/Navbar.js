import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components/native';
import { Banner, Row, Header} from '../Essentials/Essentials';

function NavbarContainer(props) {
  const Container = styled.View`
    flex: ${props.flex ? props.flex : 0.05};
    flexDirection: ${props.direction ? props.direction : 'row'};
    backgroundColor: ${props.bgcolor ? props.bgcolor : '#db6b5c'};
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
          title="Feed"
          onPress={() => navigation.navigate('Feed')}
          color = "#db6b5c"
          />
        <Button
          title="Search"
          onPress={() => navigation.navigate('Search')}
          color = "#db6b5c"
          />
        <Button
          title="New Listing"
          onPress={() => navigation.navigate('ComposeListing')}
          color = "#db6b5c"
        />
        <Button
          title="Profile"
          // onPress={() => navigation.navigate('Profile')}
          color = "#db6b5c"
        />
        <StatusBar style="auto" />
      </NavbarContainer>
  );
}
