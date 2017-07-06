import React, { Component } from 'react';
import { StyleSheet, AlertIOS } from 'react-native';
import { Container, Content, Header, Title, List, ListItem, InputGroup, Input, Icon, Button, Text } from 'native-base';
import styles from '../styles/loginStyle';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            username: '',
            password: '',
            errorMsg: ''
        };
    }

    onSignUp = () => {
        this.props.navigation.navigate("Signup");
    };

    onSignIn = () => {
        if (this.state.username.toLowerCase() === 'antero-test' && this.state.password === 'testpassword')
            this.props.navigation.navigate("Main");
        else
            AlertIOS.alert("Login", "Username/Password is Wrong, Please Try again.");
    };


    render() {
        const { isLoggedIn } = this.state;
        return (
            <Container style={styles.container}>

                <Content>

                    <Text style={styles.axbHeader}> AXB Login </Text>
                    <List style={styles.loginList}>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-person" />
                                <Input keyboardType='email-address' autoComplete={false} autoCorrect={false} spellCheck={false} placeholder="Username" onChangeText={(text) => this.setState({ username: text })} />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" />
                                <Input placeholder="Password" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} />
                            </InputGroup>
                        </ListItem>

                    </List>

                    <Text> {this.state.errorMsg} </Text>

                    <Button block style={styles.button} onPress={() => this.onSignIn()} >
                        <Text>Login</Text>
                    </Button>
                    <Button onPress={() => this.onSignUp()} block>
                        <Text>Signup</Text>
                    </Button>

                </Content>
            </Container >
        );
    }
}


