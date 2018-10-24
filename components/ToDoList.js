import React, { Component } from 'react';
import { View, Text, FlatList, Switch } from 'react-native';
import SwitchToDo from './SwitchToDo';

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

      const extractKey = ({ id }) => id.toString();

      const renderItem = ({ item }) => {
          return (
              <SwitchToDo text={item.text} />
          );
      };

    return (
      <FlatList
        data={this.props.todos}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />

     
    );
  }
}
