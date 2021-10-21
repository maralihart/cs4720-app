import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Navbar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bazaar</Text>
      <Button
        title="New Listing"
        onPress={() => navigation.navigate('ComposeListing')}
      />
      <Button
        title="Listings"
        onPress={() => navigation.navigate('Listing')}
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
