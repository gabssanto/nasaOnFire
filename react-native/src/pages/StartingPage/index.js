import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import { Container, Button, View, ButtonClose, Logo, ButtonLogin } from './styles';

export default class StartingPage extends Component {

    GoToMap = () => {
        const { navigation } = this.props;
        navigation.navigate("Mapa");
    }


    render() {
        return (
            <Container>
                <Logo source={require("../../../assets/logo.png")}>
                </Logo>
                <View>
                    <ButtonLogin onPress={ () => this.GoToMap() }>
                        <Image source={require("../../../assets/google.png")} />
                    </ButtonLogin>
                    <ButtonLogin>
                        <Image source={require("../../../assets/fireman.png")} />
                    </ButtonLogin>
                </View>
            </Container>    
        );
    }
};