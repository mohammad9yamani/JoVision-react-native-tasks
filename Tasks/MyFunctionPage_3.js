import React, { useImperativeHandle, useState, forwardRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFunctionPage_3 = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setText(newText);
    },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
});

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

export default MyFunctionPage_3;
