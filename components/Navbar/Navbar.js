import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Navbar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Navigation</Text>
      <Button
        title="New Listing"
        onPress={() => navigation.navigate('ComposeListing')}
      />
      <Button
        title="Feed"
        onPress={() => navigation.navigate('Feed')}
      />
      <Button
        title="Listings"
        onPress={() => navigation.navigate('Listing')}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
