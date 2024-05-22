import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task_17 = () => {
  const [showName, setShowName] = useState(false);


  return (
    <View style={styles.container}>
      <Button
        title={showName ? "Hide" : "Show"}
        onPress={() => {
          setShowName(!showName);
        }}
      />
      {showName && <Text style={styles.nameText}>Mohammad Al-Yamani</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default Task_17;
