import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

const Task_26 = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchIpNonBlocking = () => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setIp(data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP:', error);
      });
  };

  
  const fetchIpBlocking = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      console.error('Error fetching IP:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Get IP (Non-blocking)" onPress={fetchIpNonBlocking} />
      <Button title="Get IP (Blocking)" onPress={fetchIpBlocking} />
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <Text style={styles.text}>{ip}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginVertical: 20,
  },
});

export default Task_26;
