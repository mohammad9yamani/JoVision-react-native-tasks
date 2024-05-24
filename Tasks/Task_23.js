import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyClassPage_3 from './MyClassPage_3';

const Task_23 = () => {
  const [showClassPage, setShowClassPage] = useState(false);
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <MyClassPage_3 onTextChange={setText} />
    </View>
  );
};

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

export default Task_23;
