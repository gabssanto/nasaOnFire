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
`;

export const ButtonLeft = styled.TouchableOpacity`
    text-align: center;
    justify-content: center;
    background-color: #333;
`;

export const ButtonRight = styled.TouchableOpacity`
    text-align: center;
    justify-content: center;
    background-color: #333;
`;

export const Logo = styled.Text`
    text-align: center;
    justify-content: center;
    color: #f4aa03;
    background-color: #eee;
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    bottom: 0;
`;