import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Switch, ListItem} from 'native-base';

import HeaderComponent from '../components/HeaderComponent';

export default class NotificationsScreen extends Component {
  static navigationOptions = {
  };

  constructor(props) {
    super(props);
    this.state = {
      title: 'Notifications',
      subtitle: 'Customise your experience'
    }
  }

  render() {
    const {navigate, goBack} = this.props.navigation;

    return (
      <Container>

        <HeaderComponent
          navigate = {navigate}
          title = {this.state.title}
        />

        <Content>
          <ListItem>
            <Body>
              <Text>10 Minute Gym</Text>
            </Body>
            <Right>
                <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem>
            <Body>
              <Text>Time of Day</Text>
            </Body>
            <Right>
                <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem>
            <Body>
              <Text>Life Gym Reminders</Text>
            </Body>
            <Right>
                <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem>
            <Body>
              <Text>Meditation Reminders</Text>
            </Body>
            <Right>
                <Switch value={false} />
            </Right>
          </ListItem>

        </Content>
      </Container>
    );
  }
}
