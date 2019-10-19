import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import { Container, Logo, ButtonLeft, ButtonRight } from './styles';

export default class ButtonArea extends Component {
    constructor() {
        super();
        this.state = {
            count: null,
            mapProps: null,
            visible: true
        };
    }

    componentWillMount() {
        this.setState({ mapProps: this.props.subprops })
    }

    Report = () => {
        this.props.toggleReport();
    }

    Feed = () => {
        const { navigation } = this.props.subprops;
        navigation.navigate('Feed', {
            onGoBack: this.changeVisibility()
        });
        this.setState({
            visible: false
        });
    }

    _hasSelectedPosition(){
        this.changeVisibility();
    }

    changeVisibility(){
        this.setState({
            visible: true
        })
    }

    render() {
        if(this.state.visible) {
            return (
                <Container>
                    <ButtonLeft onPress={() => this.Feed()} >
                        <Image source={require('../../../assets/News.png')}/>
                    </ButtonLeft>
                    <Logo><Image source={require('../../../assets/firewatch.png')}/> </Logo>
                    <ButtonRight onPress={() => this.Report()} >
                        <Image source={require('../../../assets/fireReport.png')}/>
                    </ButtonRight>
                </Container>
            )
        } else {
            return null;
        }
    }
};