import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SharedTextContext } from './SharedTextContext';

class ComponentOne extends Component {
  static contextType = SharedTextContext;

  render() {
    const { sharedText } = this.context;
    return (
      <View>
        <Text>{sharedText}</Text>
      </View>
    );
  }
}

export default ComponentOne;
