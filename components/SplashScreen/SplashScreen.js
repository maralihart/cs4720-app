
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 180,
    paddingRight: 0,
    paddingLeft: 0,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
  logo: {
    width: 280,
    height: 280,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./logo.png')}
      />
    </View>
  );
}

export default DisplayAnImage;