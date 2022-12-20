import { BackButton } from '../../../components/BackButton';
import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

export function Checkout(){
    const navigation = useNavigation();
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
                    <S.Input placeholder="Digite seu CEP" />
                    <S.Input placeholder="Digite o número" />
                    <S.Input placeholder="Ponto de referência" />

                    <S.PaymentTitle>Pagamento</S.PaymentTitle>

                    <S.PaymentButtonWrapper>
                        <S.PaymentButton>
                            <S.PaymentButtonText>Cartão de crédito</S.PaymentButtonText>
                        </S.PaymentButton>

                        <S.PaymentButton>
                            <S.PaymentButtonText>Boleto</S.PaymentButtonText>
                        </S.PaymentButton>

                        <S.PaymentButton>
                            <S.PaymentButtonText>PIX</S.PaymentButtonText>
                        </S.PaymentButton>
                    </S.PaymentButtonWrapper>

                    <S.ConfirmForm>
                        <S.ConfirmButtonText>Confirmar dados</S.ConfirmButtonText>
                    </S.ConfirmForm>
                </S.Content>

                <S.Content style={{marginTop: 10}}>
                    <S.OrderTitle>Resumo do pedido</S.OrderTitle>

                    <S.SubtitleOrder>Produtos</S.SubtitleOrder>
                    <S.DescriptionOrder>Quantidade de itens: 1</S.DescriptionOrder>
                    <S.DescriptionOrder>Valor total dos produtor: R$ 192,00</S.DescriptionOrder>

                    <S.SubtitleOrder>Entrega</S.SubtitleOrder>
                    <S.DescriptionOrder>Logradouro: Avenida Marechal Deodoro da Fonseca, 199</S.DescriptionOrder>
                    <S.DescriptionOrder>Bairro: Centro - Jaraguá do Sul, SC</S.DescriptionOrder>
                    <S.DescriptionOrder>Referência: 1asdad</S.DescriptionOrder>
                    <S.DescriptionOrder>Prazo de entrega estimado: 10 dias</S.DescriptionOrder>
                    <S.DescriptionOrder>Valor do frete: R$ 15.00</S.DescriptionOrder>

                    <S.SubtitleOrder>Pagamento</S.SubtitleOrder>
                    <S.DescriptionOrder>Método de pagamento: Boleto Bancário</S.DescriptionOrder>

                    <S.OrderTitle style={{marginTop: 20}}>
                        Total do pedido: R$ 320,90
                    </S.OrderTitle>

                    <S.CheckouButton onPress={() => navigation.navigate('CheckoutSuccess')}>
                        <S.CheckouButtonText>Finalizar Compra</S.CheckouButtonText>
                    </S.CheckouButton>
                </S.Content>
                <Footer />
            </S.ScrollRegister>      

            
        </S.Container>
    )
}