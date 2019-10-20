import React, { Component } from 'react';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';


import { Container, Button, View, ButtonClose } from './styles';

export default class Feed extends Component {
    
    state = {
        i: 0
    }

    render() {
        return (
            <Container>
                <SafeAreaView>
                    <ScrollView>
                        <Card title="Ola mundo">
                            <Text>Teste</Text>
                        </Card>
                        <Card title="Teste mundo">
                            <Text>Teste2</Text>
                        </Card>
                    </ScrollView>
                </SafeAreaView>
            </Container>
        )
    }
};