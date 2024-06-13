import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';
import { store } from './redux/store';
import { setText } from './redux/textSlice';

class ComponentOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: props.text,
    };
  }

  handleChangeText = (text) => {
    this.setState({ inputText: text });
    this.props.setText(text);
  };

  render() {
    return (
      <TextInput
        style={styles.input}
        value={this.state.inputText}
        onChangeText={this.handleChangeText}
        placeholder="Enter text"
      />
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.text.value,
});

const mapDispatchToProps = {
  setText,
};

const ConnectedComponentOne = connect(mapStateToProps, mapDispatchToProps)(ComponentOne);

class Task_40 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
    };
  }

  toggleComponent = () => {
    this.setState((prevState) => ({
      showComponent: !prevState.showComponent,
    }));
  };

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Button title="Toggle Component" onPress={this.toggleComponent} />
          {this.state.showComponent && <ConnectedComponentOne />}
        </View>
      </Provider>
    );
  }
}

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

export default Task_40;
