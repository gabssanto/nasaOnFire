import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import { Container, Logo, ButtonLeft, ButtonRight } from './styles';

export default class ButtonArea extends Component {
    state = {
        count: null,
        mapProps: null
    }

    componentWillMount() {
        this.setState({ mapProps: this.props.subprops })
    }

    Report = () => {
        const { navigation } = this.props.subprops;
        console.log(this.props.subprops)
        navigation.navigate('Report');
    }    

    render() {
        return (
            <Container>
                <ButtonLeft onPress={this.onPress} >
                    <Image source={require('../../../assets/News.png')}/>
                </ButtonLeft>
                <Logo><Image source={require('../../../assets/firewatch.png')}/> </Logo>
                <ButtonRight onPress={() => this.Report()} >
                    <Image source={require('../../../assets/fireReport.png')}/>
                </ButtonRight>
            </Container>
        )
    }
};