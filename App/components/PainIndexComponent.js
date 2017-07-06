import React, { Component } from 'react';
import { StyleSheet, Text, View, PanResponder, TouchableOpacity, Dimensions, Button } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import styles from '../style/styles';

const { width, height } = Dimensions.get('window');

export default class PainIndexComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _onOpen = () => {
    // this.setState({
    //   output: 'on menu open'
    // })
  }

  _onClose = () => {
    //when they've selected go to next one
    this.renderRoot
  }

  // renderItems = (count) =>{
  //   return [...Array(count)].map((_, i) => {
  //     return (
  //       <View style={styles.item} key={i}
  //         onSelect={ () => this.setState({usualPain: i}) } >
  //         <Text>{i}</Text>
  //       </View>
  //     );
  //   });
  // }

  renderItems = (count) =>{
    return [...Array(count)].map((_, i) => {
      return (
        <ActionButton.Item buttonColor='#9b59b6' onPress={() => this.props.updateScore(this.props.id,i)} key={i}>
          <Text>{i}</Text>
        </ActionButton.Item>
      );
    });
  }

  renderRoot = () => {
    return (
      <View style={[styles.item, styles.root]}>
        <Text>{this.props.id}</Text>
      </View>
    )
  }

  test = () => {
    return(
      <Text>test</Text>
    )
  }

  renderNew = () => {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          degrees={45}
          position="center"
          buttonText="test"
          radiua={50}
        >
          {this.renderItems(11)}
        </ActionButton>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text>{this.props.label}</Text>
        </View>

        {this.renderNew()}

        {/*
        <RadialMenu
          onOpen={ this._onOpen }
          onClose={ this._onClose }
          onSelect={alert('test')}
        >
          { this.renderRoot() }
          { this.renderItems(11) }
        </RadialMenu>
        */}

        <View style={styles.left}>
          <Button
            title={'<'}
            onPress={this.props.decrement}
          />
        </View>
        <View style={styles.right}>
          <Button
            title={'>'}
            onPress={this.props.increment}
          />
        </View>
      </View>
    );
  }
}

const test = (props) => {
  return (
    <Text>test</Text>
  );
}
