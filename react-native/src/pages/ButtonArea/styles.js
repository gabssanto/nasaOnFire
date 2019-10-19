import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    max-height: 100px;
    background-color: white;
    margin-bottom: 30px;
    border-radius: 69px;
    min-width: 95%;
    padding-left: 10px;
    padding-right: 10px;
`;

export const ButtonLeft = styled.TouchableOpacity`
    text-align: center;
    justify-content: center;
    margin-right: auto;
`;

export const ButtonRight = styled.TouchableOpacity`
    text-align: center;
    justify-content: center;
    margin-left: auto;
`;

export const Logo = styled.Text`
    text-align: center;
    justify-content: center;
    color: #f4aa03;
    margin-top: 5%;
    
`;