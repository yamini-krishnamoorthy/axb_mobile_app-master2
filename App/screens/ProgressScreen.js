import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Segment, Button, Left, Right, Body, Icon, List, ListItem } from 'native-base';

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

import Chart from 'react-native-chart';


const data = [[
  [0, 1]
]];

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
      <Container >
        <HeaderComponent navigate={navigate} displayHomeButtons={true} />
        <Content>
          <Segment>
            <Button first active><Text>Day</Text></Button>
            <Button second><Text>Week</Text></Button>
            <Button third><Text>Month</Text></Button>
            <Button fourth><Text>Year</Text></Button>
          </Segment>

          <Text>Back Score</Text>

          <Chart
            style={styles.chart}
            data={[
              [1, 79],
              [2, 76],
              [3, 47],
              [4, 56],
              [5, 42],
              [6, 36],
              [7, 43],
            ]}
            verticalGridStep={5}
            type="line"
            showDataPoint={true}

          />

          <Text>Dressing Pain</Text>

          <Chart
            style={styles.chart}
            data={[
              [1, 79],
              [2, 76],
              [3, 47],
              [4, 57],
              [5, 32],
              [6, 36],
              [7, 83],
            ]}
            verticalGridStep={5}
            type="line"
            showDataPoint={true}
          />


          <Text>Socialising pain</Text>

          <Chart
            style={styles.chart}
            data={[
              [1, 40],
              [2, 76],
              [3, 57],
              [4, 58],
              [5, 52],
              [6, 36],
              [7, 43],
            ]}
            verticalGridStep={5}
            type="line"
            showDataPoint={true}

          />

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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chart: {
    width: 350,
    height: 200,
  }
});
