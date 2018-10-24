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
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'space-between', flex: 1, alignItems: 'center'}}>
        <Title />
        <Input />
        <ToDoList />
        <Text> textInComponent </Text>
        <Footer />
      </ScrollView>
    );
  }
}
