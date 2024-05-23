import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MyClassPage from './MyClassPage';

const Task_19 = () => {
  const [showClassPage, setShowClassPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show" 
      onPress={  () => {
        setShowClassPage(true);
      }} 
    />
      {showClassPage && <MyClassPage />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task_19;
