import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class DailyGymScreen extends Component {

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
        <Header>
          <Title>DailyGymScreen</Title>
        </Header>
        <Content>
        </Content>
      </Container>
    );
  }
}
