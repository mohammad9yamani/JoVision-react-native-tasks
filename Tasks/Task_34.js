import React, { useState , useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task_34 = () => {
  const [showTime, setShowTime] = useState(true);

  const toggleTime = () => {
    setShowTime(!showTime);
  };

  return (
    <View style={styles.container}>
      <Button title="Toggle Time" onPress={toggleTime} />
      {showTime && <TimeComponent />}
    </View>
  );
};


const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return currentTime;
};


const TimeComponent = () => {
  const currentTime = useCurrentTime();

  return (
    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>
        {currentTime.toLocaleTimeString()}
      </Text>
      <Text style={styles.dateText}>
        {currentTime.toLocaleDateString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 24,
    color: 'gray',
  },
});

export default Task_34;
