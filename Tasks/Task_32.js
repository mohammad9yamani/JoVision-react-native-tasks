// Task_32.js
import React from 'react';
import { View, StyleSheet, Dimensions ,Image } from 'react-native';
import Video from 'react-native-video';

const Task_32 = () => {

  const videoSource = require('./resources/TheVideo.mp4');
  const posterSource = Image.resolveAssetSource(require('./resources/TheCover.jpg')).uri
  

  return (
    <View style={styles.container}>
      <Video
        source={videoSource}
        style={styles.video}
        poster={posterSource}
        posterResizeMode="cover"
        resizeMode="contain"
        controls={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: Dimensions.get('window').width * 0.85 ,
    height: Dimensions.get('window').width * 0.5625,
  },
});

export default Task_32;
