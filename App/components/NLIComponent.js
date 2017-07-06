import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { Container } from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";
import { NavigationActions } from 'react-navigation';
import styles from '../style/styles';

import OnBoardingDialog from '../data/onBoardingDialog';
import OpenerDialogComponent from './OpenerDialogComponent';
import ResponseDialogComponent from './ResponseDialogComponent';

export default class NLIComponent extends React.Component {

  /* Initialising component*/
  constructor(props) {
    super(props);
    this.state = {
      data: OnBoardingDialog,
      currentOpener: 0,
      displayedOpeners: [0],
      displayAltEmailInput: false,
      userEmailAddress: '',
    }
  }
  getInitialState() {
    this.setState({data: OnBoardingDialog});
  }

  componentWillMount() {}

  render() {
    return (
      <Container>
        <Row size={3}>
          <ScrollView>
            {this.state.displayedOpeners.map(this.renderOpeners)}
          </ScrollView>
        </Row>
        <Row size={1}>
          {this.renderOptions()}
        </Row>
        {this.renderInputs()}
      </Container>
    );
  }

  componentDidMount() { //only called for initial render
    this.incrementOpener();
  }

  componentDidUpdate() { //run everytime (except the fist time)
    this.incrementOpener();
  }



  renderOpeners = (opener, i) => {
    return(
      <View key={i}>
        <OpenerDialogComponent
          inputText={this.state.data[opener].message}
        />
      </View>
    );
  }

  renderOptions = () => {
    const {data, currentOpener} = this.state;
    const options = data[currentOpener].options;

    //check to see if options are avaliable
    if (null != options) { //yes return options
      const optionList = options.map((option) =>
        <TouchableOpacity key={option.value} onPress={() => this.incrementOpener(undefined, option.trigger)}>
          <ResponseDialogComponent
            inputText={option.label}
          />
        </TouchableOpacity>
      );

      return <Col>{optionList}</Col>;
    } else { //no, options Return nothing
      return;
    }
  }

  incrementOpener = (currentOpener = this.state.currentOpener, triggeredOpener = undefined) => {

    if (null != this.state.data[this.state.currentOpener].end) { //check to see if at end of conversation
      alert ('Reached end of conversation')
      return;
    } else { // if not continue

      if (null != this.state.data[this.state.currentOpener].trigger) {
        let newDisplayedOpeners = this.state.displayedOpeners;

        let newOpener = currentOpener;
        newOpener++;
        newDisplayedOpeners.push(newOpener)

        this.setState({
          currentOpener: this.state.data[this.state.currentOpener].trigger,
          displayedOpeners: newDisplayedOpeners
        })
      }

      if (null != this.state.data[this.state.currentOpener].function) { //see what functions to call
        switch (this.state.data[this.state.currentOpener].function) {
        	case "navigateToPrivacy": this.navigateToPrivacy(); break;
          case "initNotificationPermissions": this.initNotificationPermissions(); break;
          case "altEmailInput": this.altEmailInput(); break;
        }
      }

      if (undefined != triggeredOpener) { //if user selects an option
        let newDisplayedOpeners = this.state.displayedOpeners;
        newDisplayedOpeners.push(triggeredOpener); //add selected option to display openers list

        this.setState({
          currentOpener: triggeredOpener,
        })
      }
    }
  }

  renderInputs = () => {
    return (
      <TextInput
        style={{height: 40}}
        placeholder={'email address'}
        keyboardType={'email-address'}
        onChangeText={(text) => this.setState({userEmailAddress: text})}
        onSubmitEditing={this.onEmailSubmit}
      />
    );
  }

  onEmailSubmit = () => {
    alert('submitted')
  }

  /*NLI Functions*/
  navigateToPrivacy = () => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Privacy'})]
    })
    this.props.navigate.dispatch(actionToDispatch)
  }
  altEmailInput = () => {
    this.renderInputs()
    // this.setState({displayAltEmailInput: true})
  }
  initNotificationPermissions = () => {
    alert('Allow this app to use Notifications')
  }
  /**/
}
