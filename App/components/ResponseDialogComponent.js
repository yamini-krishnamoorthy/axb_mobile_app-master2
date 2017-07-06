import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Badge } from 'native-base';

const ResponseDialogComponent = (props) => {
  return (
    <View style={styles.response}>
      <Text>
        {props.inputText}
      </Text>
    </View>
  )
}

// inputText.propTypes = { PropTypes.string }

const styles = StyleSheet.create({
  response: {
    width: 100,
    height: 20,
    borderRadius: 10/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lime'
  },
});

export default ResponseDialogComponent;
