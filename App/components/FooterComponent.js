import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button, Text, Footer } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

const FooterComponent = (props) => {
  return (
    <Footer style={StyleSheet.flatten(styles.footer)}>
      <Grid>
        <Row>
          <Col>
            <Row>
              <Button onPress={() => props.navigate('Dashboard')} style={StyleSheet.flatten(styles.dashboardButton)}>
                <Text>Dashboard</Text>
              </Button>
            </Row>
            <Row>
              <Button onPress={() => props.navigate('Activities')} style={StyleSheet.flatten(styles.activitiesButton)}>
                <Text>Activities</Text>
              </Button>
            </Row>
          </Col>
          <Col>
            <Button onPress={() => props.navigate('BackScore')} style={StyleSheet.flatten(styles.backScoreButton)}>
              <Image style={StyleSheet.flatten(styles.button)} source={require('../res/img/backScoreButton.png')}/>
            </Button>
          </Col>
          <Col>
            <Button onPress={() => props.navigate('BodyMap')} style={StyleSheet.flatten(styles.bodyMapButton)}>
              <Image style={StyleSheet.flatten(styles.button)} source={require('../res/img/bodyMapButton.png')}/>
            </Button>
          </Col>
        </Row>
      </Grid>
    </Footer>
  );
}

export default FooterComponent;

const styles = StyleSheet.create({
  dashboardButton: {
    height: 33,
  },
  activitiesButton: {
    height: 33,
  },
  activitiesButton: {
    height: 33,
  },
  bodyMapButton: {
    height: 33,
  },
  button: {
    height: 30,
    width: 30
  },
  footer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  }
});
