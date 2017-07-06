import React, {Component} from 'react';
import {Text, StyleSheet, View } from 'react-native';
import { ListItem, Left, Body, Right, Icon } from 'native-base';

const ProfileFieldComponent = (props) => {
  return (
    <ListItem>
      <Left>
        <Text>{props.fieldName}</Text>
      </Left>
      <Body>
        <Text>{props.fieldInput}</Text>
      </Body>
      <Right>
        <Icon name="ios-brush-outline"/>
      </Right>
    </ListItem>
  );
}

// inputText.propTypes = { PropTypes.string }
const styles = StyleSheet.create({
  circle: {
    width: 200,
    borderRadius: 10/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
});

export default ProfileFieldComponent;
