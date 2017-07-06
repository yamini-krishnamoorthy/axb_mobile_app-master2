import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, ListItem, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

import HeaderComponent from '../components/HeaderComponent';

export default class TCScreen extends Component {
  static navigationOptions = {
  };

  constructor(props) {
    super(props);
    this.state = {
      title: 'Terms & Conditions'
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
          <Title><Text>1. Information about us</Text></Title>
          <ListItem><Text>1.1 We operate the website www.activexbacks.com. We are Active X Clinics Ltd, a company registered in Scotland under company number SC246156 and with our registered office at 21B Coates Crescent, Edinburgh, EH3 7 AF, UK.</Text></ListItem>
          <ListItem><Text>1.2 To contact us, please use the following e-mail address admin@activexbacks.com.</Text></ListItem>
          <Title><Text>2. Use of our site</Text></Title>
          <ListItem><Text>Your use of our site is governed by our Terms of Use . Please take the time to read these, as they include important terms which apply to you.</Text></ListItem>
          <ListItem><Text>3. How we use your personal information.We only use your personal information in accordance with our Privacy Policy . For details, please see our Privacy Policy . Please take the time to read these, as they include important terms which apply to you.</Text></ListItem>
          <Title><Text>4. If you are a consumer</Text></Title>
          <ListItem><Text>This clause 4 only applies if you are a consumer.</Text></ListItem>
          <ListItem><Text>4.1 If you are a consumer, you may only subscribe for Services from our site if you are at least 18 years old.</Text></ListItem>
          <ListItem><Text>4.2 We intend to rely upon these Terms and any document expressly referred to in them in relation to the Contract between you and us.</Text></ListItem>
          <Title><Text>5. If you are a business customer</Text></Title>
          <ListItem><Text>This clause 5 only applies if you are a business.</Text></ListItem>
          <ListItem><Text>5.1 If you are not an individual user of our site suffering from lower back pain or sciatica, you confirm that you have authority to bind any business on whose behalf you use our site to subscribe for Services.</Text></ListItem>
        </Content>
      </Container>
    );
  }
}
