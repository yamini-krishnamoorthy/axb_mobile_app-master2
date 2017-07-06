import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

export default class BodyMapScreen extends Component {
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <Container>
        <HeaderComponent navigate={navigate} displayHomeButtons={true} />
        <Content>
          <Text>Bodymap</Text>
        </Content>
        <FooterComponent navigate={navigate} />
      </Container>
    );
  }
}
