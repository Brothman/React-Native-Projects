import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { Dimensions } from "react-native";

export default class SwitchToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        checked: false,
    };
    this.checkBox = this.checkBox.bind(this);
  }

    checkBox(value) {
        this.setState({ checked: !this.state.checked }, () => console.log(this.state.checked));
    }

  render() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: Dimensions.get('window').width }}>
            <Text style={{paddingLeft: 23}}> {this.props.text} </Text>
            <Switch style ={{marginRight: 23}}
                onValueChange={(value) => this.checkBox(value)}
                value={this.state.checked}
            />
        </View>
    );
  }
}
