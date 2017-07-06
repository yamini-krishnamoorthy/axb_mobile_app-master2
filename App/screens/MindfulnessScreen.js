import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class Mindfulness extends Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
        <Header>
          <Title>MindfulnessScreen</Title>
        </Header>
        <Content>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
