import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, BackHandler } from 'react-native';
import { Container, FeedElement, FeedElementDetails, FeedElementImage, FeedElementTitle } from './style';


export default class Report extends Component {
    
    componentWillUnmount() {
        this.props.navigation.state.params.onGoBack()
    }

    render() {
    return (
        
            <FeedElement>
                <Image source={require('../../../assets/fireReport.png')}/>

            </FeedElement>
    )
    }
};