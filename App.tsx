import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

import Task_41 from './Tasks/Task_41';

enableScreens();

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
   
        <StatusBar />
        <View style={styles.content}>
          
          <Task_41 />
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
