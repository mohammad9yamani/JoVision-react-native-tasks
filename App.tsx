import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View , ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import taskMapping from './taskMapping';

enableScreens();

const currentTask = 'Task_37'; // Update this value to switch between tasks

const App = () => {
  const CurrentTaskComponent = taskMapping[currentTask];

  // Special case handling for Task_41 and Task_42
  if (currentTask === 'Task_41' || currentTask === 'Task_42') {
    return (
      <CurrentTaskComponent />
    );
  }

  // Special case handling for Task_36 and Task_37

  if (currentTask === 'Task_36' || currentTask === 'Task_37') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <CurrentTaskComponent />
      </SafeAreaView>
    );
  }
  // Default case for other tasks
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <CurrentTaskComponent />
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
