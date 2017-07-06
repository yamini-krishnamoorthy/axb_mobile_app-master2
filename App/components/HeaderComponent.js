import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Header, Title, Button, Icon, Text, Left, Right, Body } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

const HeaderComponent = (props) => {
  return (
    <Header style={StyleSheet.flatten(styles.header)} noShadow={true}>
      <Left>
        <Button
          transparent
        >
          <Icon
            name='md-menu'
            style={{ fontSize: 25 }}
            onPress={() => props.navigate('DrawerOpen')}
          />
        </Button>
      </Left>
      <Text>{props.title}</Text>
      {props.displayDashboardButtons ? (
        <Body>
          <Button small onPress={() => props.navigate('BackScore')} style={StyleSheet.flatten(styles.backScoreButton)}>
            <Image style={StyleSheet.flatten(styles.button)} source={require('../res/img/backScoreButton.png')} />
          </Button>
          <Button small onPress={() => props.navigate('BodyMap')} style={StyleSheet.flatten(styles.bodyMapButton)}>
            <Image style={StyleSheet.flatten(styles.button)} source={require('../res/img/bodyMapButton.png')} />
          </Button>
        </Body>
      ) : (null)}
      <Right>

        {props.displayHomeButtons ? (
          <View>
            <Button small transparent onPress={() => props.navigate('Community')}>
              <Icon
                name='md-chatbubbles'
                style={{ fontSize: 25 }}
              />
            </Button>
            <Button small transparent>
              <Icon
                name='md-help'
                style={{ fontSize: 25 }}
              />
            </Button>
          </View>
        ) : (
            <Button
              transparent
              onPress={() => props.navigate('NavigationMain')}
            >
              <Icon name='md-arrow-back' />
            </Button>
          )}
      </Right>
    </Header>
  );
}

HeaderComponent.defaultProps = {
  displayHomeButtons: false,
  displayDashboardButtons: false
};


const styles = StyleSheet.create({
  header: {
    backgroundColor: null,
    borderBottomWidth: null,
  },
  button: {
    height: 30,
    width: 30
  },
});

export default HeaderComponent;
