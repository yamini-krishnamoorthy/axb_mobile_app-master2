import React, { Component } from 'react';
import { Text, StyleSheet, AlertIOS } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Switch, ListItem } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import HeaderComponent from '../components/HeaderComponent';

export default class AccountScreen extends Component {
  static navigationOptions = {
  };

  constructor(props) {
    super(props);
    this.state = {
      title: 'Account',
      subtitle: 'Review & edit your details',
      displayPremium: false,
      displayLinktoServices: false,
      accountType: 'free trial'
    }
  }

  onSavePress = () => {
    AlertIOS.alert('Saving your details');
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

          <ListItem>
            <Body>
              <Text>Account type</Text>
            </Body>
            <Right>
              <Text>{this.state.accountType}</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Body>
              <Text>Go premium!</Text>
            </Body>
            <Right>
              <Icon name="ios-arrow-round-down" />
            </Right>
          </ListItem>

          <ListItem>
            <Body>
              <Text>Use Coupon</Text>
            </Body>
            <Right>
              <Text>coupon code</Text>
            </Right>
          </ListItem>


          <ListItem>
            <Body>
              <Text>Link to services</Text>
            </Body>
            <Right>
              <Icon name="ios-arrow-round-down" />
            </Right>
          </ListItem>

          <ListItem>
            <Body>
              <Text>Access Motion Data</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem>
            <Body>
              <Text>FitBit Syncing</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem>
            <Body>
              <Text>Use Health Data</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

        </Content>
        <Footer>
          <FooterTab>
            <Button
              full
              onPress={this.onSavePress}
            >
              <Text>save</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
