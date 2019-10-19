import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, BackHandler } from 'react-native';

import { Container, Button, View, ButtonClose } from './styles';

export default class Feed extends Component {

    componentWillUnmount() {
        this.props.navigation.state.params.onGoBack()
    }
    
    render() {
        return (
            <View>
            <Text>Pagina de Feed</Text>
            </View>
        )
    }
};