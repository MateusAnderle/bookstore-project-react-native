import * as S from './styles'
import { BackButton } from "../../../components/BackButton";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Ionicons } from '@expo/vector-icons';
import { BookData } from '../../../utils/booksData';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Cart(){
    const navigation = useNavigation();
    
    return (
        <S.Container>
            <Header />
            <BackButton />

            <S.ScrollRegister showsVerticalScrollIndicator={false}>

                <S.HeaderTitle>
                    <Ionicons name="cart-outline" size={30} color="#000" style={{marginRight: 10}}/>
                    <S.PageTitle>Carrinho de compras</S.PageTitle>
                </S.HeaderTitle>
                
                <S.Content>
                    {BookData?.map((item) => {
                        return (
                            <S.CartLineBox key={item.id}>
                                <S.BookImage source={item.image}/>
                                <S.DescriptionBox>
                                    <S.Title><S.B>Título:</S.B> {item.livro}</S.Title>
                                    <S.Author><S.B>Autor:</S.B> {item.autor}</S.Author>
                                    <S.Price><S.B>Preço:</S.B> R$ {item.preco}</S.Price>
                                    <S.QuantDesc>Quantidade: {item.quantidade}</S.QuantDesc>

                                    <S.Quantity>
                                        <TouchableOpacity >
                                            <Ionicons name="remove-circle-outline" size={30} color="black" />
                                        </TouchableOpacity>

                                        <S.QuantityTitle>Alterar Quantidade</S.QuantityTitle>

                                        <TouchableOpacity>
                                            <Ionicons name="add-circle-outline" size={30} color="black" />
                                        </TouchableOpacity>
                                    </S.Quantity>
                                </S.DescriptionBox>
                            </S.CartLineBox>
                        )
                    })}

                    <S.CartTotalBox>
                        <S.QuantityTotal>
                            <S.TotalTitle>Quantidade total:</S.TotalTitle>
                            <S.TotalSubtitle>25</S.TotalSubtitle>
                        </S.QuantityTotal>

                        <S.PriceTotal>
                            <S.TotalTitle>Valor da compra:</S.TotalTitle>
                            <S.TotalSubtitle>R$ 17,90</S.TotalSubtitle>
                        </S.PriceTotal>

                        <S.DescriptionTotal>
                            Sua compra pode ser parcelada em até 10x sem juros
                        </S.DescriptionTotal>

                        <S.CartTotalButton onPress={() => navigation.navigate('Checkout')}>
                            <S.CartTotalButtonText>Finalizar Compra</S.CartTotalButtonText>
                        </S.CartTotalButton>
                    </S.CartTotalBox>
                </S.Content>

                <Footer />
            </S.ScrollRegister>      
        </S.Container>
    )
}