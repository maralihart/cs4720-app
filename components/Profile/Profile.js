import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import 'firebase/auth';
import * as firebase from 'firebase';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Banner, Row, Text, Header} from '../Essentials/Essentials';


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

    export default function Profile({ navigation }) {
        const auth = firebase.auth();
        const [name, setName] = useState(null);
        const [email, setEmail] = useState(null);
        auth.onAuthStateChanged(user => {
          console.log(user);
          if (user) {
            setName(user.displayName);
            setEmail(user.email);
          } else {
          }
        });
    
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
                <Text size={32} bold>Student Name{!!(name) && name}</Text>
                <Text>{!!(email) && email}</Text>
            </View>              
            <View style={styles.item}>
        </View>
        </View>
  );
};
