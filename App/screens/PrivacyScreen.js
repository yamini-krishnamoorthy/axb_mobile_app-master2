import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

import HeaderComponent from '../components/HeaderComponent';

export default class PrivacyScreen extends Component {
  static navigationOptions = {
  };

  constructor(props) {
    super(props);
    this.state = {
      title: 'Privacy Policy'
    }
  }

  render() {
    const {navigate, goBack} = this.props.navigation;

    return (
      <Container>
        <HeaderComponent
          navigate = {navigate}
          title = {this.state.title}
        />
        <Content>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, metus non dictum consectetur, urna nisl euismod massa, in finibus purus ipsum eget elit. Proin varius mi in commodo elementum. Nullam mauris diam, facilisis eu semper vitae, mollis eget diam. Aliquam convallis fringilla quam. Pellentesque mattis interdum nulla, sed feugiat metus tincidunt at. Integer ipsum tellus, suscipit id mi at, eleifend condimentum libero. Nam nec tincidunt nulla, in iaculis risus. Sed a ante sit amet sem volutpat vulputate eu rutrum velit. Nulla rhoncus sem dui. Aliquam sit amet tempor enim, hendrerit aliquet dolor. Curabitur feugiat tincidunt fermentum. Nam non dui nunc. Fusce quis ipsum vehicula, ullamcorper ante ac, accumsan metus. Aenean sed est bibendum, pretium neque sed, consequat mi. Fusce sed efficitur velit, et vestibulum nibh. Etiam vulputate nibh id nisi posuere commodo eget vitae neque.
            Phasellus porta eget dui quis blandit. Duis vehicula nisi non cursus accumsan. Donec fringilla ex dolor, lacinia lacinia est fermentum at. Aenean feugiat lacus libero. Nullam tincidunt a ligula sed dapibus. Aliquam condimentum arcu at sagittis congue. Ut sit amet ultricies orci. Ut tincidunt egestas auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi hendrerit nunc nisi. Nunc dapibus congue sem, ac volutpat metus sollicitudin ac. Curabitur hendrerit varius leo sed dapibus. Vivamus maximus, erat ut rhoncus semper, tortor ante consectetur urna, vitae feugiat ipsum turpis sed velit. Integer eget consectetur metus. Vivamus gravida erat blandit lectus tempor finibus. Suspendisse pharetra in orci ac ornare.
          </Text>
        </Content>
      </Container>
    );
  }
}
