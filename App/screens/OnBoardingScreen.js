import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

import LoginComponent from '../components/LoginComponent'

export default class OnBoardingScreen extends Component {
  // static navigationOptions = {title: 'OnBoardingScreen',};

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <Container>
        <LoginComponent
          navigation={this.props.navigation}
        />
      </Container>
    );
  }
}
