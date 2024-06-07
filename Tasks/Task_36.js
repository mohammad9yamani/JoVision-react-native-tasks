import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';


function generateRandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


const Task_36 = () => {

    const randomWords = Array.from({ length: 100 }, () => generateRandomWord(5));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {randomWords.map((word, index) => (
        <Text key={index} style={styles.text}>
          {word}
        </Text>
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default Task_36;
