import React, { useState } from 'react';
import { View, Image, Button, Alert, StyleSheet } from 'react-native';

const Task_27 = () => {
  const [imageIndex, setImageIndex] = useState(0);


  const images = [
    require('./resources/image1.png'),
    require('./resources/image2.png'),
    require('./resources/image3.png'),
  ];


  const chooseImage = () => {
    Alert.alert(
      'Choose Image',
      'Pick the number of one of the images',
      [
        {
          text: '1',
          onPress: () => setImageIndex(0),
        },
        {
          text: '2',
          onPress: () => setImageIndex(1),
        },
        {
          text: '3',
          onPress: () => setImageIndex(2),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={images[imageIndex]} style={styles.image} />
      <Button title="Choose Image" onPress={chooseImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default Task_27;
