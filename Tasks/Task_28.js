import React from 'react';
import { View, FlatList, Image, Alert, Pressable, StyleSheet } from 'react-native';

const Task_28 = () => {

  const images = [
    require('./resources/image4.png'),
    require('./resources/image5.png'),
    require('./resources/image6.png'),
    require('./resources/image7.png'),
    require('./resources/image8.png'),
    require('./resources/image9.png'),
    require('./resources/image10.png'),
    require('./resources/image11.png'),
    require('./resources/image12.png'),
    require('./resources/image13.png'),
  ];

  
  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  
  const renderItem = ({ item, index }) => (
    <Pressable onPress={() => handleImagePress(index)}>
      <Image source={item} style={styles.image} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
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
  flatListContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
});

export default Task_28;
