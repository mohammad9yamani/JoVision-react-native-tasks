import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const ScreenOne = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen 1</Text>
  </View>
);

const ScreenTwo = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen 2</Text>
  </View>
);

const ScreenThree = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen 3</Text>
  </View>
);

const ScreenFour = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen 4</Text>
  </View>
);

const Task_41 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen 1" component={ScreenOne} />
        <Tab.Screen name="Screen 2" component={ScreenTwo} />
        <Tab.Screen name="Screen 3" component={ScreenThree} />
        <Tab.Screen name="Screen 4" component={ScreenFour} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Task_41;
