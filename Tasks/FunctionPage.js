import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FunctionPage = () => {
  useEffect(() => {
    console.log('FunctionPage loaded');

    return () => {
      console.log('FunctionPage unloaded');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is FunctionPage</Text>
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
  },
});

export default FunctionPage;
