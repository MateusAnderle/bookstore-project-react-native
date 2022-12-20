import { useNavigation } from '@react-navigation/native'
import * as S from './styles'

export function BooksListCategory({title, category}){
    const navigation = useNavigation();
    return (
        <>
            <S.Title>{title}</S.Title>

            <S.BooksList
            data={category}
            horizontal
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
                return(
                <S.BookBox onPress={() => navigation.navigate('ProductDetail', {product: item})}>
                    <S.BookImage source={item.image}/>
                    <S.BookTitle>{item.livro}</S.BookTitle>
                    <S.BookAuthor>{item.autor}</S.BookAuthor>
                    <S.BookPrice>R$ {item.preco}</S.BookPrice>
                </S.BookBox>
                )
            }}
            />
        </>
    )
}