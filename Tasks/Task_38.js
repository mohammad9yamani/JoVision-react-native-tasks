import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SharedTextProvider } from './SharedTextContext';
import ComponentTwo from './ComponentTwo';

const Task_38 = () => {
  return (
    <SharedTextProvider>
      <View style={styles.container}>
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
      </View>
    </SharedTextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task_38;
