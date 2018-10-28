import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { Dimensions } from "react-native";

export default class SwitchToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        checked: false,
        deleted: false,
    };
    this.checkBox = this.checkBox.bind(this);
  }

    checkBox(value) {
        this.setState({ checked: !this.state.checked }, () => console.log(this.state.checked));
    }


  render() {
      const deleted = this.state.deleted;
    return (
        <View>
            { deleted ? null : 
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: Dimensions.get('window').width }}>
                        <Text style={{paddingLeft: 23}}> {this.props.text} </Text>
                        <Switch style ={{marginRight: 23}}
                            onValueChange={() => this.props.updateChecked(this.props.id)}
                            value={this.props.checked}
                        />
                    </View>
            }
        </View>
    );
  }
}
