import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styled from 'styled-components/native';
import { Banner, Row, Header, SmallLogo} from '../Essentials/Essentials';

const Container = styled.SafeAreaView`
    flex: 0.05;
    width: 10px;
    height: 10px;
    background-color: white;
    alignSelf: center;
    justify-content: center;
    position: absolute;
    flexDirection: row;
`
;
// const Logo = styled.view`

export default function LogoHeader() {
    return (
        <Container>
            <Image
                // style={styles.logo}
                source={require('./bazaar.jpeg')}
            />
        </Container>
    );
}
