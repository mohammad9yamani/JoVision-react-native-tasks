import React, { useState, useCallback } from 'react';
import { View, ScrollView, Text, StyleSheet, RefreshControl } from 'react-native';


const Task_37 = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [texts, setTexts] = useState(Array.from({ length: 100 }, () => generateRandomWord(5)));

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setTexts(Array.from({ length: 100 }, () => generateRandomWord(5)));
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {texts.map((text, index) => (
        <Text key={index} style={styles.text}>
          {text}
        </Text>
      ))}
    </ScrollView>
  );
};

const generateRandomWord = (length) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default Task_37;
