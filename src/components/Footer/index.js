import * as S from './styles'
import { FontAwesome5 } from '@expo/vector-icons'; 

export function Footer(){
    return(
        <S.Container>

            <S.Title>Informações</S.Title>
            <S.DB><S.Description>FAQ</S.Description></S.DB>
            <S.DB><S.Description>Sobre nós</S.Description></S.DB>
            <S.DB><S.Description>Onde estamos</S.Description></S.DB>
            <S.DB><S.Description>Entregas e devoluções</S.Description></S.DB>
            <S.DB><S.Description>Termos e condições</S.Description></S.DB>
            <S.DB><S.Description>Política de Cookies</S.Description></S.DB>


            <S.Spacer />

            <S.Title>Contato</S.Title>

            <S.Phone>(47) 3370-9999</S.Phone>

            <S.Description>Av. Marechal Deodoro da Fonseca</S.Description>
            <S.Description>Centro, Jaraguá do Sul</S.Description>
            <S.Description>CNPJ: 08.999.999/0001-50</S.Description>

            <S.IconsBox>
                <FontAwesome5 name="facebook-square" size={30} color={'#FFF'}/>
                <FontAwesome5 name="instagram" size={30} color={'#FFF'}/>
                <FontAwesome5 name="twitter-square" size={30} color={'#FFF'}/>
                <FontAwesome5 name="youtube" size={30} color={'#FFF'}/>
            </S.IconsBox>

            <S.Description>Feito por @matsanderle - 2022.</S.Description>
        </S.Container>
    )
}