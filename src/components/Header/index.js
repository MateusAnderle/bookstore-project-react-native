import * as S from './styles';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'react-native'; 


export function Header(){
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const CategoryList = ['Mais Vendidos', 'Lançamentos', 'Livros', 'Decorações', 'Educativo']

    function closeAndSearch (){
        setIsSearchBarOpen(!isSearchBarOpen)
    }
    
    return (
        <S.Container>
            <StatusBar backgroundColor="#BF0A0D" barStyle="light-content"  />
            <S.ContentContainer>
                <S.IconsAndTitle>
                <AntDesign name="book" size={45} style={{color: '#000', backgroundColor: '#FBEFE3', borderRadius: 15, padding: 5, marginRight: 10}}/>
                    <S.TitleWrapper>
                        <S.Title>Sebus</S.Title>
                        <S.Description>Novos e usados</S.Description>
                    </S.TitleWrapper>
                </S.IconsAndTitle>

                <S.EndIcons>
                    <TouchableOpacity onPress={() => setIsSearchBarOpen(!isSearchBarOpen)}>
                        <Ionicons name="search-sharp" size={30} color="#FBEFE3" style={{marginRight: 5}}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name="cart-outline" size={30} color="#FBEFE3" style={{marginRight: 5}}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name="person-circle-outline" size={30} color="#FBEFE3" /> 
                    </TouchableOpacity>
                </S.EndIcons>
            </S.ContentContainer>

            {!!isSearchBarOpen &&
                <S.SearchContainer>
                    <S.input />
                    <S.SearchButton onPress={closeAndSearch}>
                        <S.ButtonText>Buscar</S.ButtonText>
                    </S.SearchButton>
                </S.SearchContainer>
            }

            <S.CategoryBarList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={CategoryList}
                renderItem={({item}) => {
                    return (
                        <S.CategoryButton>
                            <S.CategoryItem>{item}</S.CategoryItem>
                        </S.CategoryButton>
                    )
                }}
            >
                
            </S.CategoryBarList>
        </S.Container>
    )
}