import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFunctionPage = () => {
  useEffect(() => {
    console.log('MyFunctionPage loaded');

    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is MyFunctionPage</Text>
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

export default MyFunctionPage;
