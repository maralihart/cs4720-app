import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { X, Filter, ChevronLeft} from 'react-native-feather';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Row, Text, Banner, Header, DefaultContainer, ComponentItem, ListingContainer, SmallLogo } from '../Essentials/Essentials';
import Listing from '../Listing/Listing';
import Navbar from '../Navbar/Navbar';
import {Image} from 'react-native';
import styled from 'styled-components';

function FilterButton(props) {
  const color = props.color ? props.color : '#db6b5c';
  const height = props.height ? props.height + 'px' : '18px';
  return (
      <TouchableHighlight onPress={() => filter()}>
          <Filter height={height} style={{color: color}}></Filter>
      </TouchableHighlight>
  )

}

function SearchBar(props) {
  const Container = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
  width: ${props.containerWidth ? props.containerWidth : '320'};
  `;
  const Input = styled.TextInput`
  height: ${props.height ? props.height + 'px' : '40px'};
  margin: ${props.margin ? props.margin + 'px' : '12px'};
  marginRight: ${props.marginRight ? props.marginRight + 'px' : '0px'};
  borderWidth: ${props.borderWidth ? props.borderWidth + 'px' : '1px'};
  borderRadius: ${props.borderRadius ? props.borderRadius + 'px' : '5px'};
  borderColor: ${props.borderColor ? props.borderColor: 'lightgray'};
  padding: ${props.padding ? props.padding + 'px' : '10px'};
  width: ${props.inputWidth ? props.inputWidth + 'px' : '300px'};
  flex: ${props.flex ? props.flex: '4'};
  backgroundColor: ${props.backgroundColor ? props.backgroundColor : 'rgb(242, 242, 247)'};
  `;

  return (
      <Container>
          <Input onChangeText={props.onChangeText ? props.onChangeText : null}
          placeholder={props.placeholder ? props.placeholder : "Search Feed"}>
          </Input>
          { props.children }
      </Container>
  )
}


function SearchContainer(props) {
  const Container = styled.View`
  flex: ${props.flex ? props.flex : 0.05};
  flexDirection: ${props.direction ? props.direction : 'row'};
  width: ${props.width ? props.width : '92%'};
  alignItems: ${props.align ? props.align : 'center'};
  justifyContent: ${props.justify ? props.justify : 'space-between'};
  `;

  const onChangeText = props.onChangeText ? props.onChangeText : null;

  return (
      <Container>
          <SearchBar onChangeText={onChangeText}>
          </SearchBar>
          <FilterButton>
          </FilterButton>
              { props.children }
      </Container>
  )
}

export default function Feed({navigator}) {
  const [topic, onSearchTopic] = useState('Search')

  return (
    <DefaultContainer>
        <Banner flex={0.01} width={'auto'}> 
            {/* <TouchableHighlight> */}
            {/* <ChevronLeft style={{color: 'db6b5c'}}/> */}
            {/* </TouchableHighlight> */}
            {/* <SmallLogo flex={2}></SmallLogo> */}
            {/* <ChevronLeft style={{opacity: 0}}/> */}
        </Banner>
        <SearchContainer onChangeText={onSearchTopic}/>
        <ComponentItem>
            <ListingContainer>
                <Listing />
            </ListingContainer>
        </ComponentItem>
      <Navbar/>
    </DefaultContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
