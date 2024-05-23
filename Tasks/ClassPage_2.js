import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ClassPage_2 extends Component {
 
 
  componentDidMount() {
    console.log('ClassPage_2 loaded');
  }

  componentWillUnmount() {
    console.log('ClassPage_2 unloaded');
  }
 
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is ClassPage_2</Text>
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

export default ClassPage_2;
