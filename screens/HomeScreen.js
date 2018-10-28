import React, { Component } from 'react';
import { ScrollView, View,Text } from 'react-native';

import Footer from '../components/Footer.js';
import Title from '../components/Title.js';
import Input from '../components/Input.js';
import ToDoList from '../components/ToDoList.js';

// import { TodoProvider } from '../components/Todo.context.js';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
               { id: 0, text: "Extreme", checked: false },
               { id: 1, text: 'Text', checked: false  },
               { id: 2, text: 'Image', checked: false  },
      ],
    };
    this.addToDos = this.addToDos.bind(this);
  }

  addToDos(text) {
    const id = this.state.todos.length;
    const todos = Array.from(this.state.todos);
    todos.push({ id, text });
    this.setState({ todos });
  }

  clearCompletedTodos = () => {
    let todos = this.state.todos.filter((todo) => todo.checked === false);
    //now we need to remap todo id's to their new position in the array
    todos = todos.map((todo, idx) => {
      todo.id = idx;
      return todo;
    });

    this.setState({ todos });
  }

  updateChecked = (id) => {
    const todos = this.state.todos;
    todos[id].checked = !todos[id].checked;
    this.setState({ todos }, () => console.log(this.state.todos));
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'space-between', flex: 1, alignItems: 'center'}}>
        <Title />

        <Input addToDos={this.addToDos}/>
        <ToDoList todos={this.state.todos} updateChecked={id => this.updateChecked(id)}/>
        <Text> textInComponent </Text>
        <Footer clearCompletedTodos={this.clearCompletedTodos} />

      </ScrollView>
    );
  }
}
