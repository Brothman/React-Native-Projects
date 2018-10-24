import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    //   console.log(this.state.text);
    this.props.updateToDos(this.state.text);
    this.setState({text: ""});
  }

  render() {
    return (
        <TextInput
            placeholder={"Enter task"}
            style={{ height: 30, 
                    borderColor: 'gray', 
                    borderBottomWidth: 1,
                    width: '85%', 
                    textAlign: 'center', 
                    fontSize: 18 }}
            onChangeText={(text) => this.setState({ text })}
            onSubmitEditing={() => this.handleSubmit()}
            value={this.state.text}
        />
    );
  }
}
