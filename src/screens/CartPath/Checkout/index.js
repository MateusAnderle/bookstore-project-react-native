import { BackButton } from '../../../components/BackButton';
import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Alert } from 'react-native';
import { api, zipCodeApi } from '../../../utils/api'

export function Checkout(){
    const types = ['Cartão de Crédito', 'Boleto', 'PIX']
    const [finalDelivery, setFinalDelivery] = useState()
    const [fetchZipCode, setFetchZipCode] = useState()
    const [zip, setZip] = useState();
    const [number, setNumber] = useState('')
    const [referencePoint, setReferencePoint] = useState('')
    const [active, setActive] = useState(types[0])
    const navigation = useNavigation();
    const { 
        products, 
        totalCartCheckout,
    } = useContext(CartContext)
    const cartToNumber = parseFloat(totalCartCheckout.totalPriceCart)
    const frete = 15
    const totalCheckout = cartToNumber + frete

    async function fetchApiZipCode() {
        if (zip.length < 8 || zip.length > 8) {
          return
        }
        try {
            const response = await zipCodeApi.get(`/${zip}/json/`)
            setFetchZipCode(response.data)
        } catch (error) {
            console.log(error)
        }

    }

    function zipCodePrepare() {
        if(!fetchZipCode) {
            return Alert.alert('Por favor, preencha os dados acima')
        }

        const { logradouro, bairro, localidade, uf } = fetchZipCode
    
        setFinalDelivery({
          logradouro,
          bairro,
          localidade,
          uf,
          referencePoint: referencePoint,
          number: number,
          valorFrete: 15,
          prazo: 10,
          payment: active,
        })
    }

    async function sendToApi() {
        if(!finalDelivery) {
            Alert.alert('Confrime os dados primeiro')
            return
        }

        try {
            await api.post('/order', {
              produtos: products,
              resumoPedido: totalCartCheckout,
              entrega: finalDelivery,
            })
      
            navigation.navigate('CheckoutSuccess')
        } catch (error) {
            Alert.alert('Erro ao enviar o seu pedido!')
            console.log(error)
        }
    }

    return (
        <S.Container>
            <Header />
            <BackButton />

            <S.ScrollRegister showsVerticalScrollIndicator={false}>
                <S.HeaderTitle>
                    <Ionicons name="cart-outline" size={30} color="#000" style={{marginRight: 10}}/>
                    <S.PageTitle>Checkout</S.PageTitle>
                </S.HeaderTitle>

                <S.Content>
                    <S.Title>Olá, Visitante</S.Title>

                    <S.FormTitle>Complete seus dados para entrega</S.FormTitle>
                    <S.Input placeholder="Digite seu CEP" onChangeText={setZip} onBlur={fetchApiZipCode}  placeholderTextColor="#AAA" keyboardType="numeric"/>
                    <S.Input placeholder="Digite o número" onChangeText={setNumber}  placeholderTextColor="#AAA" keyboardType="numeric"/>
                    <S.Input placeholder="Ponto de referência" onChangeText={setReferencePoint}  placeholderTextColor="#AAA"/>

                    <S.PaymentTitle>Pagamento</S.PaymentTitle>

                    <S.PaymentButtonWrapper>
                        {types.map((type) => (
                            <S.PaymentButton
                            key={type}
                            active={active === type}
                            onPress={() => setActive(type)}
                            >
                            <S.PaymentButtonText>{type}</S.PaymentButtonText>
                            </S.PaymentButton>
                        ))}
                    </S.PaymentButtonWrapper>

                    <S.ConfirmForm onPress={zipCodePrepare}>
                        <S.ConfirmButtonText>Confirmar dados</S.ConfirmButtonText>
                    </S.ConfirmForm>
                </S.Content>

                <S.Content style={{marginTop: 10}}>
                    <S.OrderTitle>Resumo do pedido</S.OrderTitle>

                    <S.SubtitleOrder>Produtos</S.SubtitleOrder>
                    <S.DescriptionOrder>Quantidade de itens: {totalCartCheckout.numberOfItems}</S.DescriptionOrder>
                    <S.DescriptionOrder>Valor total dos produtos: R$ {totalCartCheckout.totalPriceCart}</S.DescriptionOrder>

                    {finalDelivery && (
                        <>
                            <S.SubtitleOrder>Entrega</S.SubtitleOrder>
                            <S.DescriptionOrder>Logradouro: {finalDelivery.logradouro}, {finalDelivery.number}</S.DescriptionOrder>
                            <S.DescriptionOrder>Bairro: {finalDelivery.bairro} - {finalDelivery.localidade}, {finalDelivery.uf}</S.DescriptionOrder>
                            <S.DescriptionOrder>Referência: {finalDelivery.referencePoint}</S.DescriptionOrder>
                            <S.DescriptionOrder>Prazo de entrega estimado: {finalDelivery.prazo} dias</S.DescriptionOrder>
                            <S.DescriptionOrder>Valor do frete: {finalDelivery.valorFrete.toFixed(2)}</S.DescriptionOrder>
                        
                            <S.SubtitleOrder>Pagamento</S.SubtitleOrder>
                            <S.DescriptionOrder>Método de pagamento: Boleto Bancário</S.DescriptionOrder>

                            <S.OrderTitle style={{marginTop: 20}}>
                                Total do pedido: R$ {totalCheckout.toFixed(2)}
                            </S.OrderTitle>
                        </>
                    )}
                    
                    <S.CheckouButton onPress={sendToApi}>
                        <S.CheckouButtonText>Finalizar Compra</S.CheckouButtonText>
                    </S.CheckouButton>
                </S.Content>
                <Footer />
            </S.ScrollRegister>      

            
        </S.Container>
    )
}