import { Header } from "../../components/Header";
import * as S from './styles';
import { BackButton } from "../../components/BackButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BookData } from "../../utils/booksData";
import { Footer } from "../../components/Footer";


export function Categories (){
    const navigation = useNavigation();
    const route = useRoute();
    const { category } = route.params;

    return (
        <S.Container>
            <Header />
            <BackButton />

                <S.Content>
                    <S.Title>{category}</S.Title>

                    <S.BooksList 
                        columnWrapperStyle={{
                            justifyContent: "space-between",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 15,
                        }}
                        data={BookData} 
                        horizontal={false}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={<Footer />}
                        numColumns={2}
                        renderItem={({item}) => {
                        return(
                            <S.BookBox onPress={() => navigation.navigate('ProductDetail', {product: item})}>
                                <S.BookImage source={item.image}/>
                                <S.BookTitle>{item.livro}</S.BookTitle>
                                <S.BookAuthor>{item.autor}</S.BookAuthor>
                                <S.BookPrice>R$ {item.preco.toFixed(2)}</S.BookPrice>
                            </S.BookBox>
                        )
                        }}
                    /> 
                </S.Content>       
        </S.Container>
    )
}