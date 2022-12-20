import { useRoute } from "@react-navigation/native";
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import * as S from './styles'

export function ProductDetail(){
    const route = useRoute();
    const { product } = route.params

    return (
        <S.Container>
            <Header />
            <BackButton />

            <S.ScrollList>
                <S.Content>
                    <S.ProductBox>
                        <S.BookImage source={product.image}/>
                        <S.BookTitle>{product.livro}</S.BookTitle>
                        <S.BookAuthor>{product.autor}</S.BookAuthor>
                        <S.Price>R$ {product.preco}0</S.Price>
                        <S.SuggestedPrice>Preço sugerido na editora: R$ {product.precoSugerido}0</S.SuggestedPrice>

                        <S.BuyButton>
                            <S.TextBuyButton>COMPRAR</S.TextBuyButton>
                        </S.BuyButton>
                        <S.PaymentConditions>Em 1x no cartão de crédito sem juros</S.PaymentConditions>
                        <S.BuyDescription>Este porduto é vendido e entregue por Sebus</S.BuyDescription>
                    </S.ProductBox>

                    <S.ProductBox>
                        <S.SynopsisTitle>Sinopse</S.SynopsisTitle>
                        <S.Synopsis>{product.sinopse}</S.Synopsis>
                    </S.ProductBox>

                    <S.ProductBox>
                        <S.ProductDatasheetTitle>Ficha técnica</S.ProductDatasheetTitle>
                        
                        {product?.fichaTecnica?.map((item) => {
                            return (
                                <S.DataSheetLine>
                                    <S.DataKey>
                                        <S.DataTextTitle>{item.chave}</S.DataTextTitle>
                                    </S.DataKey>

                                    <S.DataValue>
                                        <S.DataTextDescription>{item.valor}</S.DataTextDescription>
                                    </S.DataValue>
                                </S.DataSheetLine>
                            )
                        })}
                    </S.ProductBox>
                </S.Content>
                
                <Footer />
            </S.ScrollList>
        </S.Container>
    )
}