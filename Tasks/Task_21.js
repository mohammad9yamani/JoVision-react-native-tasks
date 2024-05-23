import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import FunctionPage from './FunctionPage';

const Task_21 = () => {
  const [showFunctionPage, setShowFunctionPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show"
       onPress={ () => {
        setShowFunctionPage(!showFunctionPage);
      }} 
      />

      {showFunctionPage && <FunctionPage />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task_21;