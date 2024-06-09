import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ComponentOne from './ComponentOne';
import { SharedTextContext } from './SharedTextContext';

const ComponentTwo = () => {
  const { sharedText, setSharedText } = useContext(SharedTextContext);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={sharedText}
        onChangeText={(text) => setSharedText(text)}
        placeholder="Enter text"
      />
      <ComponentOne />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ComponentTwo;
