import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { Dimensions } from "react-native";


const SwitchTodo = ( {updateChecked, id, text, checked }) => {
    return ( 
            <View style={{ flexDirection: 'row', 
                            alignItems: 'center', 
                            justifyContent: 'space-between', 
                            width: Dimensions.get('window').width,
                            marginTop: 20 }}>
            <View style={{ paddingLeft: 23, maxWidth: 250 }}>
                                
                <Text style={{ fontSize: 30, flex: 0.99 }}> {text} </Text>
                            </View>
                <Switch style={{ marginRight: 23 }}
                    onValueChange={() => updateChecked(id)}
                    value={checked}
                />
            </View>
     );
};
 
export default SwitchTodo;