import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container, Logo, Button } from './styles';

export default class ButtonArea extends Component {
    state = {
        count: null,
    }

    onPress = () => {
        const { count } = this.state;
        this.setState({
          count: count+1
        })
    }    

    render() {
        return (
            <Container>
                <Button onPress={this.onPress} >
                    <Text>aaaaaaa</Text>
                </Button>
                <Logo>FireWatch</Logo>
                <Button onPress={this.onPress} >
                    <Text>aaaaaaa</Text>
                </Button>
            </Container>
        )
    }
};