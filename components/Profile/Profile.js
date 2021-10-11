import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { X, Filter, ChevronLeft} from 'react-native-feather';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Banner, Row, Text, Header} from '../Essentials/Essentials';
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
        width: "100%",
        padding: 10
    },
    listingContainer: {
        position: 'absolute',
        right: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    
    });

export default function Profile() {
    const [topic, onSearchTopic] = useState('Search')
    const [name, onChangeName] = useState(' ')
    const [resuts, onFindResults] = useState(' ')
    
    return (
        <View style={styles.container}>
            <Header flex={0.7} backgroundColor={'green'}>
                <Banner width={'150%'}>
                <TouchableHighlight styles={styles.item}>
                        <Text color={'white'} size={16}>Settings</Text>
                    </TouchableHighlight>
                    <Text color={'white'} size={28} bold styles={styles.item}>Profile</Text>
                    <TouchableHighlight styles={styles.item}>
                        <Text color={'white'} size={16}>Logout</Text>
                    </TouchableHighlight>    
                </Banner>
            </Header>
            <View style={styles.item}>
                <Text size={32} bold>Student Name</Text>
                    <Listing
                        data = {[
                            {key: 1, Title: 'Free item 1', Content: 'This is a free item'},
                            {key: 2, Title: 'Free item 2', Content: 'This is a free item'},
                            {key: 3, Title: 'Free item 3', Content: 'This is a free item'},
                            {key: 4, Title: 'Free item 4', Content: 'This is a free item'},
                        ]}
                    />
            </View>              
            <View style={styles.item}>
        </View>
        </View>
  );
};
