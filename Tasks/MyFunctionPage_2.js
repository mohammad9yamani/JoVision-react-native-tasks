import React, { useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const MyFunctionPage_2 = ({ onTextChange }) => {
  useEffect(() => {
    console.log('MyFunctionPage loaded');

    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Type here..."
        onChangeText={onTextChange}
      />
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
  },
});

export default MyFunctionPage_2;
