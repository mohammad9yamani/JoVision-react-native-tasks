import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import Task_16 from './Tasks/Task_16';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollView}>
        <StatusBar />
        <View>
          
          <Task_16 />
        </View>
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
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
});

export default App;