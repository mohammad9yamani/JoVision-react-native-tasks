import React, { useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import MyFunctionPage_3 from './MyFunctionPage_3';

const Task_24 = () => {
  const childRef = useRef();

  const handleTextChange = (text) => {
    if (childRef.current) {
      childRef.current.updateText(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={handleTextChange}
      />
      <MyFunctionPage_3 ref={childRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
  },
});

export default Task_24;
