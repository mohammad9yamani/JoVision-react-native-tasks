import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import Task_37 from './Tasks/Task_37';


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
   
        <StatusBar />
        <View style={styles.content}>
          
          <Task_37 />
        </View>

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
  content: {
    flexGrow: 1,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',  // Center horizontally
  },
});

export default App;
