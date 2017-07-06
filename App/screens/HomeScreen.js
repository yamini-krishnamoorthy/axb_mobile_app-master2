import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon } from 'native-base';

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import NLIComponent from '../components/NLIComponent';
import PainIndexComponent from '../components/PainIndexComponent';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: '',
      username: 'antero.duarte',
      password: 'testpassword',
    };
  }

  componentWillMount() {
    //   fetch('https://activexbacks.com/api/user/token', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //        'user': this.state.username,
    //        'pass': this.state.password
    //     })
    //   }).then( (userToken) => {
    //     fetch('https://activexbacks.com/api/user/login', {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         'name': this.state.username,
    //         'pass': this.state.password,
    //         'token': JSON.parse(userToken._bodyText).token
    //       })
    //     }).then( (userData) => {
    //       if(userData.status === 200){
    //         this.setState({userData: userData});
    //       }
    //       else{
    //         alert('Login Failed. Please try again');
    //       }
    //     }).catch((error) => {
    //       alert('Login Failed. Please try again'+error);
    //     });
    //   }).catch((error) => {
    //     alert('User authentication failed for reason: '+error);
    //  });
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <Container>
        <HeaderComponent navigate={navigate} displayHomeButtons={true} />
        <Content>
          <NLIComponent
            firstTime={this.state.firstTimeWelcome}
            navigate={this.props.navigation}
          />
        </Content>
        <FooterComponent navigate={navigate} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
