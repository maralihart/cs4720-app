import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { X, Filter, ChevronLeft} from 'react-native-feather';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Row, Text, Banner, Header } from '../Essentials/Essentials';
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
    smallLogo: {
        flex: 2,
        height: 20,
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

export default function Feed() {
    const [topic, onSearchTopic] = useState('Search')
    
    return (
        <View style={styles.container}>
            <Banner flex={0.1} width={'auto'}> 
                <TouchableHighlight>
                    <ChevronLeft style={{color: 'green'}}/>
                </TouchableHighlight>
                <Image style={styles.smallLogo} source={require('../Essentials/bazaar.jpg')}/>
                <ChevronLeft style={{opacity: 0}}/>
            </Banner>
            <View style={styles.searchContainer}>
                <View style={styles.searchBarContainer}>
                    <TextInput 
                        style = {styles.input}
                        onChangeText = {onSearchTopic}
                        placeholder = "Search Feed"
                        />
                </View>
                <TouchableHighlight onPress={() => filter()}>
                    <Filter height={18} style={{color: 'green'}}></Filter>
                </TouchableHighlight>
            </View>              
            <View style={styles.item}>
                <View style={styles.listingContainer}>
                    <Listing />
                </View>
            </View>
        </View>
  );
};
