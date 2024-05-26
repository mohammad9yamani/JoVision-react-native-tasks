import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage_4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  updateText = (newText) => {
    this.setState({ text: newText });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.text}</Text>
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
    marginVertical: 20,
  },
});

export default MyClassPage_4;
