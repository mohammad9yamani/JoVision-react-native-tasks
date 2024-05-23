import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is MyClassPage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default MyClassPage;
