import React, { Component } from 'react';
import { View, Button } from 'react-native';

import Colors from '../constants/Colors';

const Footer = ({ clearCompletedTodos }) => {
  return ( 
    <View style={{ backgroundColor: Colors.babyBlue, width: '100%', minHeight: 50, justifyContent: 'center', }}>
      <Button onPress={clearCompletedTodos}
        title="Remove Completed Items"
        color={"black"}
      />
    </View>
  );
};
 
export default Footer;
