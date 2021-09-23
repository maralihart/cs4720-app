import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export function Row(props) {

  return (
    <View style={{ flexDirection: 'row' }}>
      { props.children }
    </View>
  );
}

export function Text(props) {

  const Text = styled.Text`
    font-size: ${props.size ? props.size + "px" : "12px"};
    color: ${props.color ? props.color : 'black'};
    font-weight: ${props.bold ? '700' : '400'};
  `;

  return (
    <Text>
      { props.children }
    </Text>
  );
}