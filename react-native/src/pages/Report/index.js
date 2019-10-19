import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, BackHandler } from 'react-native';

import { Container, Button, View, ButtonClose } from './styles';

import SlideToConfirm from 'react-native-slide-to-confirm';

export default class Report extends Component {

    state = {
        hasSelectedPosition: false
    }

    componentWillUnmount() {
        this.props.navigation.state.params.onGoBack(this.state.hasSelectedPosition);
    }

    render() {
        return (
            <Container>
                <Button>
                    <Image source={require("../../../assets/photo.png")} />
                </Button>
                <View>
                <SlideToConfirm
                    ref={ref => this.slideRef = ref}
                    width={347}
                    onConfirm={()=>{
                        this.setState({
                            hasSelectedPosition: true,
                        });
                        this.props.navigation.state.params.onGoBack(this.state.hasSelectedPosition);
                        this.props.navigation.goBack();
                    }}
                    textColor='white'
                    pathCoverColor='#00c10f'
                    pathColor='#d02929'
                    sliderColor='white'
                    text='Deslize para confirmar'
                    />
                    <ButtonClose onPress={ () => { this.props.navigation.goBack() } }>
                        <Image source={require("../../../assets/close.png")} />
                    </ButtonClose>
                </View>
            </Container>
        )
    }
};