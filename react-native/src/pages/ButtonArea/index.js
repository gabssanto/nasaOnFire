import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container, Logo, ButtonLeft, ButtonRight } from './styles';

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
                <ButtonLeft onPress={this.onPress} >
                    <Text>aaaaaaa</Text>
                </ButtonLeft>
                <Logo>FireWatch</Logo>
                <ButtonRight onPress={this.onPress} >
                    <Text>aaaaaaa</Text>
                </ButtonRight>
            </Container>
        )
    }
};