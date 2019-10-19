import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, BackHandler } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';

import { Container, Button, View, ButtonClose } from './styles';

export default class Feed extends Component {
    
    render() {
        return (
            <Container>
                <Card title="Teste">
                    <Text>ola</Text>
                </Card>
            </Container>
        )
    }
};