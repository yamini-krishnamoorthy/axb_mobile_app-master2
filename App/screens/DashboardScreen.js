import React, { Component } from 'react';
import { StyleSheet, Text, View, AlertIOS, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge, List } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Modal from 'react-native-modalbox';
import Dimensions from 'Dimensions';
import styles from '../style/styles';

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

import StepComponent from '../components/StepComponent';

const height = Dimensions.get('window').height;

export default class DashboardScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enableGestureDismiss: false,
      backScore: 27,
      selections: [],
      steps: [
        { label: "Camel" },
        { label: "Wall Lean" },
        { label: "Cold" },
        { label: "Glut Stretch" },
        { label: "Hip Flexor Stretch" },
        { label: "Wagging Tail" },
      ],
    }
  }



  onTodayPress = () => {
    //                  fetch('https://activexbacks.com/api/history/backscore', {
//                          method: 'POST',
//                          headers: {
//                            'Accept': 'application/json',
//                            'Content-Type': 'application/json',
//                            'X-CSRF-Token': this.state.token
//                          },
//                          body: JSON.stringify({
//                            'cookie': this.state.cookie,
//                            'uuid': this.state.uuid,
//                            'token': this.state.token
//                          })
//                        }).then( (userData) => {
//                          alert('Login Successfull. Please click dashboard');
//                          this.state.userData = JSON.parse(userData._bodyText);
//                        }).catch((error) => {
//                         alert('Login Failed. Please try again'+error);
//                       });
//                  }).catch((error) => {
//                           alert('Logout Failed. Please try again'+error);
  //                });
    AlertIOS.alert("Back Score:36","Socialising pain: 45");

  }

  onYesterdayPress = () => {
    AlertIOS.alert("Yesterday Pressed");
  }

  onProgressPress = () => {
    //                  fetch('https://activexbacks.com/api/history/backscore', {
//                          method: 'POST',
//                          headers: {
//                            'Accept': 'application/json',
//                            'Content-Type': 'application/json',
//                            'X-CSRF-Token': this.state.token
//                          },
//                          body: JSON.stringify({
//                            'cookie': this.state.cookie,
//                            'uuid': this.state.uuid,
//                            'token': this.state.token
//                          })
//                        }).then( (userData) => {
//                          alert('Login Successfull. Please click dashboard');
//                          this.state.userData = JSON.parse(userData._bodyText);
//                        }).catch((error) => {
//                         alert('Login Failed. Please try again'+error);
//                       });
//                  }).catch((error) => {
//                           alert('Logout Failed. Please try again'+error);
  //                });
    AlertIOS.alert("Back Score:38","Socialising pain: 47");
  }

  onGetStepsPress = () => {
    AlertIOS.alert("Getting Steps!");
  }

  buildSteps = (step, i) => {
    return (
      //                  fetch('https://activexbacks.com/api/history/backscore', {
  //                          method: 'POST',
  //                          headers: {
  //                            'Accept': 'application/json',
  //                            'Content-Type': 'application/json',
  //                            'X-CSRF-Token': this.state.token
  //                          },
  //                          body: JSON.stringify({
  //                            'cookie': this.state.cookie,
  //                            'uuid': this.state.uuid,
  //                            'token': this.state.token
  //                          })
  //                        }).then( (userData) => {
  //                          alert('Login Successfull. Please click dashboard');
  //                          this.state.userData = JSON.parse(userData._bodyText);
  //                        }).catch((error) => {
  //                         alert('Login Failed. Please try again'+error);
  //                       });
  //                  }).catch((error) => {
  //                           alert('Logout Failed. Please try again'+error);
    //                });
      <StepComponent
        key={i}
        index={i}
        label={step.label}
        selected={this.state.selections[i]}
        onStepToggle={this.onStepToggle}
      />
    );
  }

  onStepToggle = (i, selected) => {
    let selections = this.state.selections;
    selections[i] = selected;
    this.setState({
      selections: selections
    });
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <Container>
        <HeaderComponent
          navigate={navigate}
          title="Dashboard"
          displayHomeButtons={true}
        />
        <Grid>
          <Row size={75}>
            <List>
              {this.state.steps.map(this.buildSteps)}
            </List>
          </Row>
          <Row
            size={25}
            style={StyleSheet.flatten(styles.bottomContainer)}
          >
            <Col>
              <Row>
                <TouchableOpacity onPress={this.onBackScorePress}>
                  <View style={styles.bottomBadge}>
                    <Text>{this.state.backScore}/100</Text>
                  </View>
                </TouchableOpacity>
              </Row>
            </Col>
            <Col>
              <Row>
                <TouchableOpacity onPress={this.onTodayPress}>
                  <View
                    style={{ backgroundColor: '#E7EBEE' }}
                  >
                    <Text>Today</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row>
                <TouchableOpacity onPress={() => navigate('Progress')}>
                  <View
                    style={{ backgroundColor: '#E7EBEE' }}
                  >
                    <Text>Progress</Text>
                  </View>
                </TouchableOpacity>
              </Row>
            </Col>
            <Col>
              <Row>
                <TouchableOpacity onPress={this.onProgressPress}>
                  <View style={{ backgroundColor: '#E7EBEE' }}>
                    <Text>Yesterday</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row>
                <TouchableOpacity onPress={this.onGetStepsPress}>
                  <View
                    style={{ backgroundColor: '#E7EBEE' }}>
                    <Icon name="ios-refresh" />
                    <Text>Steps</Text>
                  </View>
                </TouchableOpacity>
              </Row>
            </Col>
          </Row>
        </Grid>
        <FooterComponent navigate={navigate} />
      </Container>
    );
  }
}
