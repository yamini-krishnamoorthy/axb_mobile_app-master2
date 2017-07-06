import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

import HeaderComponent from '../components/HeaderComponent';

export default class HelpScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Help'
    }
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <Container>
        <HeaderComponent
          navigate={navigate}
          title={this.state.title}
        />
        <Content>
        </Content>
      </Container>
    );
  }
}
