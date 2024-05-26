import React, { useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import MyClassPage_4 from './MyClassPage_4';

const Task_25 = () => {
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
      <MyClassPage_4 ref={childRef} />
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
    width: '80%',
    marginBottom: 20,
  },
});

export default Task_25;
