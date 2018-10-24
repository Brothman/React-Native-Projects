import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Colors from '../constants/Colors.js';

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{backgroundColor: Colors.babyBlue, width: '100%', minHeight: 50, justifyContent: 'center'}}>
          <Text style={{ color: 'black', textAlign: 'center', fontSize: 28 }}>  You Do </Text>
        </View>
    );
  }
}