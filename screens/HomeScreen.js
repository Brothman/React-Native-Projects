import React, { Component } from 'react';
import { ScrollView, View,Text } from 'react-native';

import Footer from '../components/Footer.js';
import Title from '../components/Title.js';
import Input from '../components/Input.js';
import ToDoList from '../components/ToDoList.js';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
               { id: 0, text: "Extreme" },
               { id: 1, text: 'Text' },
               { id: 2, text: 'Image' },
      ],
    };
    this.updateToDos = this.updateToDos.bind(this);
  }

  updateToDos(text) {
    const id = this.state.todos.length;
    const todos = Array.from(this.state.todos)
    todos.push({ id, text });
    this.setState({ todos });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'space-between', flex: 1, alignItems: 'center'}}>
        <Title />
        <Input updateToDos={this.updateToDos}/>
        <ToDoList todos={this.state.todos}/>
        <Text> textInComponent </Text>
        <Footer />
      </ScrollView>
    );
  }
}
