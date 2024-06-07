import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Task_35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await AsyncStorage.getItem('formData');
        if (data) {
          const parsedData = JSON.parse(data);
          const currentTime = new Date();
          const dataTime = new Date(parsedData.timestamp);
          const timeDifference = (currentTime - dataTime) / 1000; // in seconds

          if (timeDifference < 60) {
            setName(parsedData.name);
            setAge(parsedData.age);
            setCountry(parsedData.country);
          } else {
            await AsyncStorage.removeItem('formData');
          }
        }
      } catch (error) {
        console.log('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  const handleSubmit = async () => {
    if (name && age && country) {
        
        const formData = {
        name: name,
        age: age,
        country: country,
        timestamp: new Date(),
    };
          

      try {
        await AsyncStorage.setItem('formData', JSON.stringify(formData));
        Alert.alert('Data saved successfully');
      } catch (error) {
        console.log('Error saving data:', error);
      }
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Task_35;
