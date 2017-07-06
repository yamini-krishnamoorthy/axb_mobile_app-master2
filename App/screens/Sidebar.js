import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, AlertIOS } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Thumbnail, List, ListItem } from 'native-base';

export default class Drawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'Antero',
      painDiagnoses: 'Your back pain indicated Accute, Unilateral, Scaitica',
      backPainCategory: 'You are Extension Intolerant and your worst activity is lifting'
    };
  }

  onSignOut = () => {
    AlertIOS.alert("You've been signed out.");
    this.props.navigation.navigate("Index");
  };


  onEditProfilePress = () => {
    AlertIOS.alert("You've been signed out.");
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.onSignOut()}
            >
              <Text>Signout</Text>
            </Button>
          </Left>
        
          <Right>
            <Button
              transparent
              onPress={() => navigate('EditProfile')}
            >
              <Text>Pofile</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Grid>
            <Row>
              <Col />
              <Col>
                <Thumbnail
                  source={require('../res/img/img.png')}
                />
              </Col>
              <Col />
            </Row>
            <Row>
              <Text>{this.state.userName}</Text>
            </Row>
            <Row>
              <Text>{this.state.painDiagnoses}</Text>
            </Row>
            <Row>
              <Text>{this.state.backPainCategory}</Text>
            </Row>
            <List>

              <ListItem onPress={() => navigate('NavigationMain')}>
                <Left>
                  <Icon name='ios-menu' />
                </Left>
                <Body>
                  <Text>Home</Text>
                </Body>
              </ListItem>

              <ListItem onPress={() => navigate('Help')}>
                <Left>
                  <Icon name='ios-menu' />
                </Left>
                <Body>
                  <Text>Help</Text>
                </Body>
              </ListItem>

              <ListItem onPress={() => navigate('Account')}>
                <Left>
                  <Icon name='ios-menu' />
                </Left>
                <Body>
                  <Text>Account</Text>
                </Body>
              </ListItem>

              <ListItem onPress={() => navigate('Notifications')}>
                <Left>
                  <Icon name='ios-menu' />
                </Left>
                <Body>
                  <Text>Notifications</Text>
                </Body>
              </ListItem>

              <ListItem onPress={() => navigate('Sound')}>
                <Left>
                  <Icon name='ios-menu' />
                </Left>
                <Body>
                  <Text>Sound</Text>
                </Body>
              </ListItem>

              <ListItem onPress={() => navigate('Privacy')}>
                <Left>
                  <Icon name='ios-menu' />
                </Left>
                <Body>
                  <Text>Privacy Policy</Text>
                </Body>
              </ListItem>

              <ListItem onPress={() => navigate('TC')}>
                <Left>
                  <Icon name='ios-menu' />
                </Left>
                <Body>
                  <Text>Terms & Conditions</Text>
                </Body>
              </ListItem>

              <ListItem onPress={() => navigate('ContactUs')}>
                <Left>
                  <Icon name='ios-menu' />
                </Left>
                <Body>
                  <Text>Contact Us</Text>
                </Body>
              </ListItem>
            </List>
          </Grid>
        </Content>
      </Container>
    );
  }
}
