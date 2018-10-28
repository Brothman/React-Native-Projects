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
              <SwitchToDo id={item.id} text={item.text} checked={item.checked} updateChecked={this.props.updateChecked}/>
          );
      };

    return (
      <FlatList
        data={this.props.todos}
        extraData={this.props}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />

     
    );
  }
}
