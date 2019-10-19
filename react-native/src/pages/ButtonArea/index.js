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

    componentWillUnmount() {
        return this.props.hasToInsertFire();
    }

    Report = () => {
        const { navigation } = this.props.subprops;
        navigation.navigate('Report', {
            //onGoBack: hasSelectedPosition => { hasSelectedPosition ? _hasSelectedPosition : this.changeVisibility }
            onGoBack: hasSelectedPosition => {
                if(hasSelectedPosition) {
                    this._hasSelectedPosition();
                } else {
                    this.changeVisibility();
                }
            }
        });        
        this.setState({
            visible: false
        });
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
        /*this.setState({
            mapState: {
                hasToInsertFire: true
            }
        });*/
        this.props.hasToInsertFire()
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