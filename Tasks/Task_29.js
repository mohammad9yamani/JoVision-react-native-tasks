import React, { useRef, useState } from 'react';
import { View, FlatList, Image, Alert, Pressable, Button, TextInput, Modal, StyleSheet } from 'react-native';

const Task_29 = () => {
  // Array of image sources
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

  const flatListRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputIndex, setInputIndex] = useState('');


  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const handleScrollToIndex = () => {
    setModalVisible(true);
  };

  const handleSubmitIndex = () => {
    const numIndex = parseInt(inputIndex, 10) - 1;
    if (numIndex >= 0 && numIndex < images.length) {
      flatListRef.current.scrollToIndex({ animated: true, index: numIndex });
      setModalVisible(false);
      setInputIndex('');
    } else {
      Alert.alert('Invalid Index', 'Please enter a valid index between 1 and 10.');
    }
  };

  const renderItem = ({ item, index }) => (
    <Pressable onPress={() => handleImagePress(index)}>
      <Image source={item} style={styles.image} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />

      <View style={styles.buttonContainer}>
      <Button title="Scroll to Image" onPress={handleScrollToIndex} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              onChangeText={setInputIndex}
              value={inputIndex}
              placeholder="Enter image index"
              keyboardType="numeric"
            />

            <View style={styles.buttonRow}>

            <View style={styles.buttonWrapper}>
            <Button title="Submit" onPress={handleSubmitIndex} />
            </View>    
            

            <View style={styles.buttonWrapper}>
            <Button title="Cancel" onPress={() => setModalVisible(false)} />    
            </View>
            
            </View>

          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  buttonContainer: {
    marginBottom: 100,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default Task_29;
