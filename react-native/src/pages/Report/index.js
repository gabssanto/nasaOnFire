import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, BackHandler } from 'react-native';


export default class Report extends Component {
    
    componentWillUnmount() {
        this.props.navigation.state.params.onGoBack()
    }

    render() {
    return (
        <Text>Pagina de Reports</Text>
    )
    }
};