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
            keyExtractor={item => item._id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
                return(
                <S.BookBox key={item._id} onPress={() => navigation.navigate('ProductDetail', {product: item})}>
                    <S.BookImage source={{uri: item.image}}/>
                    <S.BookTitle>{item.livro}</S.BookTitle>
                    <S.BookAuthor>{item.autor}</S.BookAuthor>
                    <S.BookPrice>R$ {item.preco.toFixed(2)}</S.BookPrice>
                </S.BookBox>
                )
            }}
            />
        </>
    )
}