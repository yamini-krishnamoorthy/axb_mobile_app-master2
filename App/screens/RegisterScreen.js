import React, { Component } from 'react';
import { StyleSheet, View, AlertIOS } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export default class RegisterScreen extends Component {
  static navigationOptions = { title: 'RegisterScreen', };

  constructor(props) {
    super(props);
    this.state = {
      email: 'test@email.com',
      password: '123456',
      passwordConfirm: '123456'
    };
  }

  onSignUpPress = () => {
    AlertIOS.alert(this.state.email, this.state.password);
    //do validation
    //is the email registered?
    //yes?
    //notify and sign in
    //no?
    //add user to db

    //send user to main nav
    this.props.navigation.navigate('NavigationMain');
  }

  render() {
    return (
      <Grid >
        <Row>
          <Text>logo</Text>
        </Row>
        <Row>
          <Col>
            <Form>
              <Item>
                <Input
                  placeholder='email'
                  keyboardType="email-address"
                  onChangeText={(email) => this.setState({ email })}
                />
              </Item>
              <Item>
                <Input
                  placeholder='password'
                  onChangeText={(password) => this.setState({ password })}
                />
              </Item>
              <Item>
                <Input
                  placeholder='re-enter password'
                  onChangeText={(passwordConfirm) => this.setState({ passwordConfirm })}
                />
              </Item>
            </Form>
          </Col>
        </Row>
        <Row>
          <Button dark onPress={this.onSignUpPress}>
            <Text>sign up</Text>
          </Button>
        </Row>
      </Grid>
    );
  }
}
