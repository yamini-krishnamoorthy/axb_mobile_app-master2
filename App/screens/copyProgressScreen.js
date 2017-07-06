import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, List, ListItem } from 'native-base';

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

import Chart from 'react-native-chart';

export default class ProgressScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedViews: []
    };
  }

  componentWillMount() { }

  expandAll = () => {
    this.setState({

    });
  }
  expandView = (value) => {
    let i = this.state.expandedViews.indexOf(value);
    if (i > -1) {
      alert(i)
    } else {
      let newExpandedViews = this.state.expandedViews;
      newExpandedViews.push(value);
      this.setState({ expandedViews: newExpandedViews });
    }
  }

  renderCollapsedViews = () => {
    const isActive = false;
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <Container>
        <HeaderComponent navigate={navigate} displayHomeButtons={true} />
        <Content>
          <List>

            <ListItem>
              <Left>
                <Button small iconLeft transparent onPress={() => navigate('Dashboard')}>
                  <Icon name="md-arrow-back" />
                  <Text>Progress</Text>
                </Button>
              </Left>
              <Right>
                <Button small iconLeft transparent onPress={this.expandAll}>
                  <Text>All</Text>
                  <Icon name="md-arrow-back" />
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Select a timespan:</Text>
              </Left>
              <Body>
                <Text>Pass Year</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Backscore</Text>
              </Left>
              <Right>
                <Icon name="md-arrow-back" onPress={() => this.expandView(0)} />
              </Right>
            </ListItem>
            <ListItem>
              <View><Text>Backscore historical</Text></View>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Daily Gym</Text>
              </Left>
              <Body>
                <Text>Preventors</Text>
              </Body>
              <Right>
                <Icon name="md-arrow-back" />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Life Gym</Text>
              </Left>
              <Body>
                <Text>Relievers</Text>
              </Body>
              <Right>
                <Icon name="md-arrow-back" />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Clinic</Text>
              </Left>
              <Body>
                <Text>Foundation</Text>
              </Body>
              <Right>
                <Icon name="md-arrow-back" />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Mindfulness</Text>
              </Left>
              <Body>
                <Text>Meditations</Text>
              </Body>
              <Right>
                <Icon name="md-arrow-back" />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Fitbit</Text>
              </Left>
              <Body>
                <Text>Steps</Text>
              </Body>
              <Right>
                <Icon name="md-arrow-back" />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Journal</Text>
              </Left>
              <Body>
                <Text>Pain & Triggers</Text>
              </Body>
              <Right>
                <Icon name="md-arrow-back" />
              </Right>
            </ListItem>

          </List>
        </Content>
        <FooterComponent navigate={navigate} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  isActive: {
    backgroundColor: 'black'
  },
  isInActive: {
    height: 0
  }
});
