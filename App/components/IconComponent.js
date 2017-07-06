import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

/*
<ListItem button>
  <Left>
    <Icon
      name={props.iconName}
      style={{fontSize: 25}}
    />
  </Left>
  <Body>
    <Text>{props.inputText}</Text>
  </Body>
</ListItem>
*/

const IconComponent = (props) => {
  return (
    <Row>
      <Col>
        <Icon
          name={props.iconName}
          style={{fontSize: 25}}
        />
      </Col>
      <Col>
        <Text>{props.inputText}</Text>
      </Col>
    </Row>
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

export default IconComponent;
