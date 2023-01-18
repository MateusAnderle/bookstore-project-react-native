import { Header } from "../../components/Header";
import * as S from './styles';
import { BackButton } from "../../components/BackButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { api } from '../../utils/api'
import { Footer } from "../../components/Footer";
import { ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";


export function Categories (){
    const navigation = useNavigation();
    const route = useRoute();
    const { category } = route.params;
    const [data, setData] = useState()
    const [isLoading, seIsLoading] = useState(true)
  
    async function fetchCategory() {
      const response = await api.get(`/products/filter/${category}`)
      setData(response?.data)
      seIsLoading(false)
    }
  
    useEffect(() => {
      fetchCategory()
    }, [category])

    return (
        <S.Container>
            <Header />
            <BackButton />

                <S.Content>
                    <S.Title>{category}</S.Title>

                    {isLoading ? 
                    <ActivityIndicator 
                        color='#F00'
                        size='large'
                        style={{marginTop: 100, marginBottom: 100}}
                    /> : 
                        <S.BooksList 
                            columnWrapperStyle={{
                                justifyContent: "space-between",
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 15,
                            }}
                            data={data} 
                            horizontal={false}
                            keyExtractor={item => item._id}
                            showsVerticalScrollIndicator={false}
                            ListFooterComponent={<Footer />}
                            numColumns={2}
                            renderItem={({item}) => {
                            return(
                                <S.BookBox onPress={() => navigation.navigate('ProductDetail', {product: item})}>
                                    <S.BookImage source={{uri: item.image}}/>
                                    <S.BookTitle>{item.livro}</S.BookTitle>
                                    <S.BookAuthor>{item.autor}</S.BookAuthor>
                                    <S.BookPrice>R$ {item.preco.toFixed(2)}</S.BookPrice>
                                </S.BookBox>
                            )
                            }}
                        /> 
                    }
                </S.Content>       
        </S.Container>
    )
}