import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const OpenerDialogComponent = ({inputText}) => {
  if (!inputText) {
    return null;
  } else {
    return (
      <View style={styles.opener}>
        <Text>
          {inputText}
        </Text>
      </View>
    );
  }
}

// inputText.propTypes = { PropTypes.string }
const styles = StyleSheet.create({
  opener: {
    width: 200,
    borderRadius: 10/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginBottom: 10
  },
});

export default OpenerDialogComponent;
