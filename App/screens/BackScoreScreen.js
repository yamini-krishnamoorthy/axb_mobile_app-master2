import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Alert, Platform} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from '../style/styles';


import RadialMenu from '../../node_modules/react-native-radial-menu';

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import PainIndexComponent from '../components/PainIndexComponent';

import backScoreDialog from '../data/backScoreDialog';

export default class BackScoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      painScores: [
        {label: "Usual Pain", score: 0},
        {label: "worstPain", score: 0},
        {label: "dessing", score: 0},
        {label: "walking", score: 0},
        {label: "sitting", score: 0},
        {label: "lifting", score: 0},
        {label: "working", score: 0},
        {label: "standing", score: 0},
        {label: "socialising", score: 0},
        {label: "sleeping", score: 0}
      ],
      currentPainEntry: 0,
    };
  }

  componentWillMount() {
    this.setState({
      messages: backScoreDialog,
    });
  }

  renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: { backgroundColor: '#f0f0f0'}
        }}
      />
    );
  }

  onSend = (messages = []) => {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    const {painScores, currentPainEntry} = this.state;

    return (
      <Container>
        <HeaderComponent navigate={navigate} displayHomeButtons={true}/>
        <Grid>
          <Row size={20}>
            <GiftedChat
              messages={this.state.messages}
              user={{_id: 2}}
              renderDay={() => null}
              renderTime={() => null}
              renderComposer={() => null}
              minInputToolbarHeight={0}
              renderAvatar={() => null}
            />
          </Row>
          <Row size={80}>
            <PainIndexComponent
              id={currentPainEntry}
              label={painScores[currentPainEntry].label}
              increment={this.increment}
              decrement={this.decrement}
              updateScore={this.updateScore}
            />
          </Row>
        </Grid>
        <FooterComponent navigate={navigate}/>
      </Container>
    );
  }

  increment = () => {
    let newCurrentPainEntry = this.state.currentPainEntry;
    if (newCurrentPainEntry >= 9) {
      newCurrentPainEntry = 0;
    } else {
      newCurrentPainEntry++;
    }
    this.setState({currentPainEntry: newCurrentPainEntry})
  }

  decrement = () => {
    let newCurrentPainEntry = this.state.currentPainEntry;
    if (newCurrentPainEntry <= 0) {
      newCurrentPainEntry = 9;
    } else {
      newCurrentPainEntry--;
    }
    this.setState({currentPainEntry: newCurrentPainEntry})
  }

  // handleChange(e) {
  //   const items = this.state.items;
  //   items[1].role = e.target.value;
  //
  //   // update state
  //   this.setState({
  //       items,
  //   });
  // },

  updateScore = (id, score) => {
    alert(id + ' score: '+score)
    let newPainScores = this.state.painScores;
    newPainScores[id].score = score;

    this.setState({painScores: newPainScores })
  }
}
