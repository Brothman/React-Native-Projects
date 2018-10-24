import React, { Component } from 'react';
import { View, Button } from 'react-native';

import Colors from '../constants/Colors';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.removeCompletedItems = this.removeCompletedItems.bind(this);
  }

  removeCompletedItems(){

  }

  render() {
    return (
        <View style={{ backgroundColor: Colors.babyBlue, width: '100%', minHeight: 50, justifyContent: 'center', }}>
            <Button onPress={this.removeCompletedItems}
                title="Remove Completed Items"
                color={"black"}
            /> 
      </View>
    );
  }
}
