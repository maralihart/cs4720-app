import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { X, Filter, ChevronLeft} from 'react-native-feather';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Row, Text, Header, Banner } from '../Essentials/Essentials';
import Listing from '../Listing/Listing';
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
        flex: 4,
        backgroundColor: "rgb(242, 242, 247)"
    },
    text: {
        color: '#db6b5c',
        fontSize: 12
    },
    item: {
        flex: 1,
        width: "100%"
    },
    fieldItem: {
        flex: 1,
        width: "100%",
        padding: 200,
    },
    bigLogo: {
        flex: 1,
        height: 10,
        resizeMode: 'contain'
    },
    searchContainer: {
        flex: 0.05,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "92%"
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
    },
    listingContainer: {
        position: 'absolute',
        right: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    
    });

export default function Signup() {  
    const [topic, onSearchTopic] = useState('Search')
    const [name, onChangeName] = useState(' ')
    const [resuts, onFindResults] = useState(' ')
     
    return (
        <View style={styles.container}>
            <Header flex={0.4}>
                <Banner>
                <TouchableHighlight>
                        <X style={{color: 'gray'}}/>
                    </TouchableHighlight>
                    <Text bold size={28}>Log In</Text>
                    <TouchableHighlight>
                        <Text size={16} color={'green'}>Sign Up</Text>
                    </TouchableHighlight>
                </Banner>
            </Header>
            <View styles={styles.fieldItem}>
                <View style={styles.searchContainer}>
                    <View style={styles.searchBarContainer}>
                        <TextInput 
                            style = {styles.input}
                            onChangeText = {onSearchTopic}
                            placeholder = "Email"
                            />
                    </View>
                </View>
            </View>
            <View styles={styles.fieldItem}>
                <View style={styles.searchContainer}>
                    <View style={styles.searchBarContainer}>
                        <TextInput 
                            style = {styles.input}
                            onChangeText = {onSearchTopic}
                            placeholder = "Password"
                            />
                    </View>
                </View>
            </View>
            <View style={styles.item}>

            </View>
        </View>
  );
};
