import React, { Component } from 'react';
import { StyleSheet, View, AlertIOS } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { Root } from './router';


//place logic in return https://medium.com/walmartlabs/make-your-react-components-pretty-a1ae4ec0f56eStarcit
export default class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'test@email.com',
      password: '123456'
    };
  }

  handleUserInput = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onSignInPress = () => {
    AlertIOS.alert(this.state.email, this.state.password);
    //do validation
    //is the email registered?

    //send user to main nav
    this.props.navigation.navigate('NavigationMain');
  }

  render() {
    const { navigate } = this.props.navigation;
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
            </Form>
          </Col>
        </Row>
        <Row>
          <Button info
            onPress={this.onSignInPress}
            onChange={this.handleUserInput}
          >
            <Text>login </Text>
          </Button>
          <Button
            dark
            onPress={() => navigate('Register')}
          >
            <Text>sign up </Text>
          </Button>
        </Row>
        <Row>
          <Col>
            <Text onPress={() => navigate('ForgottenPassword')}>forgot password</Text>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  color1: {
    backgroundColor: 'red'
  },
  color2: {
    backgroundColor: 'pink'
  },
});
