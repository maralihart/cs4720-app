import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Navbar({ navigation }) {
  return (
      <View style={styles.container}>
        <Text>Navbar</Text>
        <Button
          title="Calendar"
          onPress={() => navigation.navigate('Calendar')}
        />
        <Button
          title="New Listing"
          onPress={() => navigation.navigate('ComposeListing')}
        />
        <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title="Feed"
          onPress={() => navigation.navigate('Feed')}
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
