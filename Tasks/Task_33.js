import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

const Task_33 = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const posterSource = Image.resolveAssetSource(require('./resources/TheCover.jpg')).uri;

  const handlePlayPause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.videoContainer} onPress={handlePlayPause}>
        <Video
          ref={videoRef}
          source={require('./resources/TheVideo.mp4')}
          style={styles.video}
          poster={posterSource}
          posterResizeMode="cover"
          resizeMode="contain"
          paused={isPaused}
          controls={false}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.5625, // 16:9 aspect ratio
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default Task_33;
