import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, BackHandler } from 'react-native';
import { Container } from './styles';

import FeedElement from "../FeedElement";

export default class Feed extends Component {

    render() {
    return (
        <Container>
            <FeedElement></FeedElement>
        </Container>
    )
    }
};