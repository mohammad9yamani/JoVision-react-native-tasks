import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MyFunctionPage from './MyFunctionPage';

const Task_21 = () => {
  const [showFunctionPage, setShowFunctionPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show"
       onPress={ () => {
        setShowFunctionPage(!showFunctionPage);
      }} 
      />

      {showFunctionPage && <MyFunctionPage />}
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