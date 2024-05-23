import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ClassPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is ClassPage</Text>
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

export default ClassPage;
