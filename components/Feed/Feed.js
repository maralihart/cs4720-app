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

export default function Feed({ navigation }) {
  const [topic, onSearchTopic] = useState('')

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <Banner flex={0.01} width={'auto'}> 
            {/* <TouchableHighlight> */}
            {/* <ChevronLeft style={{color: 'db6b5c'}}/> */}
            {/* </TouchableHighlight> */}
            {/* <SmallLogo flex={2}></SmallLogo> */}
            {/* <ChevronLeft style={{opacity: 0}}/> */}
        </Banner>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 320
          }}>
            <TextInput 
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'lightgray',
              padding: 10,
              width: 300,
              flex: 4,
              backgroundColor: 'rgb(242, 242, 247)'
            }}
            onChangeText={onSearchTopic}
            placeholder="Search Feed" 
            value={topic} />
          </View>
        <ComponentItem>
            <ListingContainer>
                <Listing navigation={navigation} filter={topic}/>
            </ListingContainer>
        </ComponentItem>
      <Navbar navigation={navigation}/>
    </View>
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
