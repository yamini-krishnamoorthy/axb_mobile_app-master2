import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, InputGroup, Input, Body, Icon, Thumbnail } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import ProfileFieldComponent from '../components/ProfileFieldComponent';

export default class EditProfileScreen extends Component {
  static navigationOptions = {
  };


  //four gender states
  // ["None", "Female", "Male", "Non-Binary"]

  constructor(props) {
    super(props);
    this.state = {
      title: 'Profile',
      subtitle: 'Review & edit your details',
      username: '',
      password: '',
      email: 'isla.muro@ed.ac.uk',
      age: 38,
      gender: 'Female',
      height: '6ft',
      weight: '50kg'
    }
  }
  componentWillMount() {
    fetch('https://activexbacks.com/api/user/token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         'name': this.state.username,
         'pass': this.state.password
      })
    }).then( (userToken) => {
      this.state.token = JSON.parse(userToken._bodyText).token
      fetch('https://activexbacks.com/api/user/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-Token': this.state.token
        },
        body: JSON.stringify({
          'name': this.state.username,
          'pass': this.state.password,
          'token': this.state.token
        })
      }).then( (userData) => {
        if(userData.status === 406){
         fetch('https://activexbacks.com/api/user/logout', {
                 method: 'POST',
                 headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
                   'X-CSRF-Token': this.state.token
                 },
                 body: JSON.stringify({
                   'name': this.state.username,
                   'pass': this.state.password,
                   'token': this.state.token
                 })
               }).then( (data) => {
                    fetch('https://activexbacks.com/api/user/login', {
                            method: 'POST',
                            headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                              'X-CSRF-Token': this.state.token
                            },
                            body: JSON.stringify({
                              'name': this.state.username,
                              'pass': this.state.password,
                              'token': this.state.token
                            })
                          }).then( (userData) => {
                            alert('Login Successfull. Please click dashboard');
                            this.state.userData = JSON.parse(userData._bodyText);
                          }).catch((error) => {
                           alert('Login Failed. Please try again'+error);
                         });
                    }).catch((error) => {
                             alert('Logout Failed. Please try again'+error);
                    });
         }
        else if(userData.status === 200){
	  alert(name);
          this.state.userData = JSON.parse(userData._bodyText);
        }
      }).catch((error) => {
        alert('Login Failed. Please try again'+error);
      });
    }).catch((error) => {
      alert('User authentication failed for reason: '+error);
   });
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
            >
              <Icon name='ios-menu' />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.title}</Title>
            <Text>{this.state.subtitle}</Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => navigate('NavigationMain')}
            >
              <Icon name='arrow-back' />
            </Button>
          </Right>
        </Header>

        <Content>
          <Grid>
            <Row>
              <Col />
              <Thumbnail
                source={require('../res/img/img.png')}
              />
              <Col />
            </Row>
            <ProfileFieldComponent
              fieldName='name'
              fieldInput={this.state.username}
            />

            <ProfileFieldComponent
              fieldName='email'
              fieldInput={this.state.email}
            />
            <ProfileFieldComponent
              fieldName='age'
              fieldInput={this.state.age}
            />
            <ProfileFieldComponent
              fieldName='gender'
              fieldInput={this.state.gender}
            />
            <ProfileFieldComponent
              fieldName='height'
              fieldInput={this.state.height}
            />
            <ProfileFieldComponent
              fieldName='weight'
              fieldInput={this.state.weight}
            />
          </Grid>
        </Content>

      </Container>
    );
  }
}
