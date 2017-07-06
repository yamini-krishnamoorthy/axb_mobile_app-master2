import React, { Component } from 'react';
import { StyleSheet, AlertIOS, TouchableOpacity } from 'react-native';
import { Header, Title, Button, Icon, Text, Left, Right, Body, Badge, ListItem} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

const StepComponent = (props) => {

  onToggle = () => {
    props.onStepToggle(props.index, !props.selected);
  }

  toggleStyle = () => {
    return props.selected ?  styles.active : styles.nonActive
  }

  return (
    <ListItem style={{borderBottomWidth: 0}}>
      <TouchableOpacity onPress={this.onToggle}>
        <Badge
          key={props.index}
          style={StyleSheet.flatten(this.toggleStyle())}
        >
          <Text
            style={StyleSheet.flatten(styles.text)}
          >
            {props.label}
          </Text>
        </Badge>
      </TouchableOpacity>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  nonActive: {
    borderColor: '#D3DBE1',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  active: {
    backgroundColor: '#FB8023'
  },
  text: {
    color: 'black'
  }
});

export default StepComponent;
