import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

      const rows = [
          { id: 0, text: "View"},
          { id: 1, text: 'Text' },
          { id: 2, text: 'Image' },
      ];

      const extractKey = ({ id }) => id;

      const renderItem = ({ item }) => {
          return (
              <Text> {item.text} </Text>
          );
      };

    return (
      <FlatList
        data={rows}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />

     
    );
  }
}
