import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #EFEFEF;
    align-items: center;
`;

export const ScrollRegister = styled.ScrollView`
    flex: 1;
    width: 100%;
`;

export const Content = styled.View`
    margin: 0 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #FFF;
    align-items: center;
`;

export const Input = styled.TextInput`
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 100%;
    height: 45px;
    margin-bottom: 20px;
    padding: 0 15px;
`;

export const LoginButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 100%;
    background-color: #DDD;
    border-radius: 10px;
    margin-bottom: 20px;
`;

export const LoginButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const LoginRegister = styled.Text``;
