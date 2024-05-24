import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyFunctionPage_2 from './MyFunctionPage_2';

const Task_22 = () => {
  const [showFunctionPage, setShowFunctionPage] = useState(false);
  const [text, setText] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
       <MyFunctionPage_2 onTextChange={setText} />
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

export default Task_22;
