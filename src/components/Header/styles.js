import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    width: 100%;
    background-color: #BF0A0D;
`;

export const ContentContainer = styled.View`
    width: 100%;
    padding: 20px;
    background-color: #BF0A0D;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const IconsAndTitle = styled.View`
    flex-direction: row;
`;

export const TitleWrapper = styled.View``;

export const Title = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: #FBEFE3;
`;

export const Description = styled.Text`
    color: #FBEFE3;
`;

export const EndIcons = styled.View`
    flex-direction: row;
`;  

export const SearchContainer = styled.View`
    background-color: #BF0A0D;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px 20px;
`;

export const input = styled.TextInput`
    background-color: #FBEFE3;
    flex: 1;
    height: 30px;
    padding: 0 15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 100px;
    height: 30px;
    background-color: #f6dbc1;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const ButtonText = styled.Text`
    font-weight: bold;
    font-size: 14px;
`;

export const CategoryBarList = styled.FlatList`
    background-color: #FBEFE3;
`;

export const CategoryButton = styled.TouchableOpacity`
    margin: 10px 20px;
`;

export const CategoryItem = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;