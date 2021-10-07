// TODO: Aditi -- search bar + search results (listing preview)

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { X } from 'react-native-feather';
import { TextInput } from 'react-native-gesture-handler';
import { Row, Text } from '../Essentials/Essentials';
import { Listing } from '../Listing/Listing';
import {Image} from 'react-native';


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
        flex: 4
    },
    text: {
        color: '#db6b5c',
        fontSize: 12
    },
    item: {
        flex: 1,
        width: "100%"
    },
    smallLogo: {
        flex: 2,
        height: 20,
        resizeMode: 'contain'
    },
    searchContainer: {
        flex: 0.05,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-evenly",
        width: "100%"
    },
    bannerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        flex: 0.1,
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 30
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300
    },
    
    });

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
    
    return (
        <View style={styles.container}>
            <View style={styles.bannerContainer}>
                <Text>{'<'}</Text>    
                <Image style={styles.smallLogo} source={require('./bazaar.jpg')}/>
                <Text></Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchBarContainer}>
                    <TextInput 
                        style = {styles.input}
                        onChangeText = {onSearchTopic}
                        placeholder = "Search"
                        />
                </View>
                <Button 
                    onPress={() => filter()} 
                    style = {styles.text}
                    title= "Filter" 
                />
            </View>              
            <View style={styles.item}>
                {/* <Row>
                    <X fill="#000" width={32} height={32} />
                    <Text size={24}>Search</Text>
                <Button 
                    onPress={() => filter()} 
                    style = {styles.text}
                    title= "Filter" 
                />
                </Row>
        
            <TextInput 
                style = {styles.input}
                onChangeText = {onSearchTopic}
                placeholder = "Search"
                />
            <Button 
                onPress={() => findResults()} 
                title= "Go" 
                />
            <StatusBar style="auto" /> */}
            </View>
        </View>
  );
};
