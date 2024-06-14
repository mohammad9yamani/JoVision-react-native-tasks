import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const ScreenOne = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Screen 1</Text>
    <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
    <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
    <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
  </View>
);

const ScreenTwo = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Screen 2</Text>
    <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
    <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
    <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
  </View>
);

const ScreenThree = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Screen 3</Text>
    <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
    <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
    <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
  </View>
);

const ScreenFour = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Screen 4</Text>
    <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
    <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
    <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
  </View>
);

const Task_42 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={ScreenOne} />
        <Tab.Screen name="Screen2" component={ScreenTwo} />
        <Tab.Screen name="Screen3" component={ScreenThree} />
        <Tab.Screen name="Screen4" component={ScreenFour} />
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

export default Task_42;
