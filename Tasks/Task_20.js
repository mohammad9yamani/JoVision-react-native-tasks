import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ClassPage_2 from './ClassPage_2';

const Task_20 = () => {
  const [showClassPage, setShowClassPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show" 
      onPress={  () => {
        setShowClassPage(!showClassPage);
      }} 
    />
      {showClassPage && <ClassPage_2 />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task_20;
