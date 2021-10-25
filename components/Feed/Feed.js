import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { X, Filter, ChevronLeft} from 'react-native-feather';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Row, Text, Banner, Header, DefaultContainer } from '../Essentials/Essentials';
import Listing from '../Listing/Listing';
import {Image} from 'react-native';
import styled from 'styled-components';


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

export default function Feed({ navigation }) {
    const [topic, onSearchTopic] = useState('Search')
    
    return (
        <DefaultContainer>
            <Banner flex={0.1} width={'auto'}> 
                <TouchableHighlight>
                <ChevronLeft style={{color: 'db6b5c'}}/>
                </TouchableHighlight>
                <Image style={styles.smallLogo} source={require('../Essentials/bazaar.jpg')}/>
                <ChevronLeft style={{opacity: 0}}/>
            </Banner>
            <SearchContainer onChangeText={onSearchTopic}/>
            {/* <View style={styles.searchContainer}> */}
                {/* <View style={styles.searchBarContainer}> */}
                    {/* <Text color={'black'} size={12} bold styles={styles.item}>Search Feed</Text> */}
                    {/* <TextInput  */}
                        {/* style = {styles.input} */}
                        {/* onChangeText = {onSearchTopic} */}
                        {/* placeholder = "Search Feed" */}
                        {/* /> */}
                {/* </View> */}
                {/* <TouchableHighlight onPress={() => filter()}> */}
                    {/* <Filter height={18} style={{color: '#db6b5c'}}></Filter> */}
                {/* </TouchableHighlight> */}
            {/* </View>               */}
            <View style={styles.item}>
                <View style={styles.listingContainer}>
                    <Listing />
                </View>
            </View>
        </DefaultContainer>
  );
};
