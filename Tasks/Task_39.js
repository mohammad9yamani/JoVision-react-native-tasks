import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import { setText } from './redux/textSlice';

const ComponentOne = () => {
  const text = useSelector((state) => state.text.value);
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState(text);

  const handleChangeText = (text) => {
    setInputText(text);
    dispatch(setText(text));
  };

  return (
    <TextInput
      style={styles.input}
      value={inputText}
      onChangeText={handleChangeText}
      placeholder="Enter text"
    />
  );
};

const Task_39 = () => {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent((prevShowComponent) => !prevShowComponent);
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Button title="Toggle Component" onPress={toggleComponent} />
        {showComponent && <ComponentOne />}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    width: 200,
  },
});

export default Task_39;
