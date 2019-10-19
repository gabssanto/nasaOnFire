import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, BackHandler } from 'react-native';

export default class Feed extends Component {

    componentWillUnmount() {
        this.props.navigation.state.params.onGoBack()
    }
    
    render() {
    return (
        <>
        <Text>Pagina de Feed</Text>
        </>
    )
    }
};