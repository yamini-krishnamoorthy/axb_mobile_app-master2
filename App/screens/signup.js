import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Header, Title, List, ListItem, InputGroup, Input, Icon, Button, Text } from 'native-base';
import styles from '../styles/signupStyle';


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    onCancel = () => {
        this.props.navigation.navigate('Login');
    };

    render() {
        const { isLoggedIn } = this.state;
        return (
            <Container>
                <Header style={styles.Header}>
                    <Title style={styles.HeaderTitle}> Sign Up </Title>
                </Header>
                <Content style={styles.Content}>
                    <List>
                        <ListItem>
                            <InputGroup>

                                <Input placeholder="First Name" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Input placeholder="Last Name" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Input keyboardType='email-address' placeholder="Email" />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>

                                <Input placeholder="Password" secureTextEntry={true} />
                            </InputGroup>
                        </ListItem>

                    </List>
                    <Button style={styles.button} block>
                        <Text>Signup</Text>
                    </Button>
                    <Button onPress={() => this.onCancel()} block>
                        <Text>Cancel</Text>
                    </Button>

                </Content>
            </Container >
        );
    }
}


