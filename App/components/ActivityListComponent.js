import React, { Component } from 'react';
import { StyleSheet, Dimensions} from 'react-native';
import { Header, Title, Button, Icon, Text, Body, Card, CardItem, Badge} from 'native-base';

import ActivityContentComponent from '../components/ActivityContentComponent';
import ActivityExerciseComponent from '../components/ActivityExerciseComponent';

const { width, height } = Dimensions.get('window');

export default class ActivityListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selections: [],
    };
  }

  populateListContent = (content, i) => {
    return (
      <ActivityContentComponent
        key={i}
        index={i}
        content={content}
        selected={this.state.selections[i]}
        onActivityToggle={this.onActivityToggle}
      />
    )
  }

  populateExercises = (content, i) => {
    return (
      <ActivityExerciseComponent
        key={i}
        index={i}
        header={content}
        display={this.state.selections[i]}
      />
    );
  }

  onActivityToggle = (i, selected) => {
    let selections = this.state.selections;
    selections[i] = selected;
    this.setState({
      selections: selections
    });
  }

  showSelectedActivities = (i) => {
    return (
      <Text>{this.state.selections[i]}</Text>
    )
  }

  render() {
    return (
      <Card style={{ width: width }}>
        <CardItem header>
          <Text>{this.props.header}</Text>
        </CardItem>
        <CardItem>
          <Body>
            {this.props.contents.map(this.populateListContent)}
          </Body>
        </CardItem>
        {this.props.contents.map(this.populateExercises)}
      </Card>
    );
  }
}

ActivityListComponent.defaultProps = {};

const styles = StyleSheet.create({

});
