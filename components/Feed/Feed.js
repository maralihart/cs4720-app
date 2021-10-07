// TODO: Aditi -- search bar + search results (listing preview)

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { X, Filter, ChevronLeft} from 'react-native-feather';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Row, Text } from '../Essentials/Essentials';
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
                <TouchableHighlight>
                    <ChevronLeft style={{color: 'green'}}/>
                </TouchableHighlight>
                <Image style={styles.smalllLogo} source={require('../Essentials/bazaar.jpg')}/>
                <ChevronLeft style={{opacity: 0}}/>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchBarContainer}>
                    <TextInput 
                        style = {styles.input}
                        onChangeText = {onSearchTopic}
                        placeholder = "Search Feed"
                        />
                </View>
                {/* <Button 
                    onPress={() => filter()} 
                    style = {styles.text}
                    title= "Filter" 
                /> */}
                <TouchableHighlight onPress={() => filter()}>
                    <Filter height={18} style={{color: 'green'}}></Filter>
                </TouchableHighlight>
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
            <View style={styles.listingContainer}>
                <Listing
                    data = {[
                        {key: 1, Title: 'Free item 1', Content: 'This is a free item'},
                        {key: 2, Title: 'Free item 2', Content: 'This is a free item'},
                        {key: 3, Title: 'Free item 3', Content: 'This is a free item'},
                        {key: 4, Title: 'Free item 4', Content: 'This is a free item'},
                    ]}
                />
            </View>
            </View>
        </View>
  );
};
