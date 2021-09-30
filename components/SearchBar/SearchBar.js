// TODO: Aditi -- search bar + search results (listing preview)

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { X } from 'react-native-feather';
import { TextInput } from 'react-native-gesture-handler';
import { Row, Text } from '../Essentials/Essentials';
import {Image} from 'react-native';

export default function SearchBar() {
    const [topic, onSearchTopic] = useState('Search')
    const [name, onChangeName] = useState(' ')
    const [resuts, onFindResults] = useState(' ')

    const findResults = () => {
        // implement results
    }

    const filter = () => {
        // implement filter button
    }

    const styles = StyleSheet.create({
        container: {
          paddingTop: 10,
        },
        tinyLogo: {
          width: 300,
          height: 300,
        },
        logo: {
          width: 50,
          height: 50,
        },
      });
    
    return (
        <View style={styles.container}>
        <Image
          style={styles.logo}
        //   source={require('./bazaar.png')}
          source={require('./bazaar.jpg')}

        />
        <View style={styles.container}>
            <Row>
                <X fill="#000" width={32} height={32} />
                <Text size={24}>Search</Text>
            <Button 
                onPress={() => filter()} 
                title= "Filter" 
            />
            </Row>
    
        <TextInput 
            style = {styles.input}
            onChangeText = {onSearchTopic}
            value = {topic}
            placeholder = " Search "
            />
        <Button 
            onPress={() => findResults()} 
            title= "Go" 
            />
        <StatusBar style="auto" />
        </View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});