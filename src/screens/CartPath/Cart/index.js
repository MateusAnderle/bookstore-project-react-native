import * as S from './styles'
import { BackButton } from "../../../components/BackButton";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../context/CartContext';

export function Cart(){
    const [itemsCart, setItemsCart] = useState()
    const [totalCart, setTotalCart] = useState()
    const navigation = useNavigation();
    const { 
        products: cartProducts, 
        addQuantity,
        subQuantity,
        setTotalCartCheckout, 
    } = useContext(CartContext)

    function goToCheckout() {
        setTotalCartCheckout({
          numberOfItems: itemsCart,
          totalPriceCart: totalCart,
        })
        
        navigation.navigate('Checkout')
      }

    useEffect(() => {
        function itemsQuantity() {
          const initialValue = 0
          const numberOfItems = cartProducts.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantidade,
            initialValue,
          )
          setItemsCart(numberOfItems)
        }
    
        itemsQuantity()
    }, [cartProducts])

    useEffect(() => {
        function totalPrice() {
          const initialValue = 0
          const priceOfItems = cartProducts.reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue.preco * currentValue.quantidade,
            initialValue,
          )
          setTotalCart(priceOfItems.toFixed(2))
        }
        totalPrice()
    }, [cartProducts])

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
                        {cartProducts?.map((item) => {
                            return (
                                <S.CartLineBox key={item._id}>
                                    <S.BookImage source={{uri: item.image}}/>
                                    <S.DescriptionBox>
                                        <S.Title><S.B>Título:</S.B> {item.livro}</S.Title>
                                        <S.Author><S.B>Autor:</S.B> {item.autor}</S.Author>
                                        <S.Price><S.B>Preço:</S.B> R$ {item.preco.toFixed(2)}</S.Price>
                                        <S.QuantDesc>Quantidade: {item.quantidade}</S.QuantDesc>

                                        <S.Quantity>
                                            <TouchableOpacity onPress={() => subQuantity(item._id)}>
                                                <Ionicons name="remove-circle-outline" size={30} color="black" />
                                            </TouchableOpacity>

                                            <S.QuantityTitle>Alterar Quantidade</S.QuantityTitle>

                                            <TouchableOpacity onPress={() => addQuantity(item._id)}>
                                                <Ionicons name="add-circle-outline" size={30} color="black" />
                                            </TouchableOpacity>
                                        </S.Quantity>
                                    </S.DescriptionBox>
                                </S.CartLineBox>
                            )
                        })}
                        {cartProducts.length === 0 ? (
                        <S.CartTotalBox>
                            <S.B>Carrinho Vazio...</S.B>
                            <S.EmptyMessage>Continue navegando em nosso APP!</S.EmptyMessage>
                        </S.CartTotalBox>
                        ) : (
                            <S.CartTotalBox>
                                <S.QuantityTotal>
                                    <S.TotalTitle>Quantidade total:</S.TotalTitle>
                                    <S.TotalSubtitle>{itemsCart}</S.TotalSubtitle>
                                </S.QuantityTotal>

                                <S.PriceTotal>
                                    <S.TotalTitle>Valor da compra:</S.TotalTitle>
                                    <S.TotalSubtitle>R$ {totalCart}</S.TotalSubtitle>
                                </S.PriceTotal>

                                <S.DescriptionTotal>
                                    Sua compra pode ser parcelada em até 10x sem juros
                                </S.DescriptionTotal>

                                <S.CartTotalButton onPress={goToCheckout}>
                                    <S.CartTotalButtonText>Finalizar Compra</S.CartTotalButtonText>
                                </S.CartTotalButton>
                            </S.CartTotalBox>
                        )}
                </S.Content>

                <Footer />
            </S.ScrollRegister>      
        </S.Container>
    )
}