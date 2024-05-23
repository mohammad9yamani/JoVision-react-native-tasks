import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import Task_20 from './Tasks/Task_20';


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollView}>
        <StatusBar />
        <View>
          
          <Task_20 />
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
