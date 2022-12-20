import * as S from './styles'
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import RegisterImage from '../../assets/register.png'
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function Register(){
    const navigation = useNavigation();
    
    return (
        <S.Container>
            <Header />
            <BackButton />

            <S.ScrollRegister showsVerticalScrollIndicator={false}>
                <S.Content>
                    <Image source={RegisterImage} style={{width: '100%', height: 80, borderRadius: 10, marginBottom: 20}}/>

                    <S.Input placeholder="Digite seu nome completo"/>
                    <S.Input placeholder="Digite aqui seu CEP"/>
                    <S.Input placeholder="Digite aqui seu telefone"/>
                    <S.Input placeholder="Digite aqui seu endereço"/>
                    <S.Input placeholder="Digite aqui seu bairro"/>
                    <S.Input placeholder="Digite aqui sua cidade"/>
                    <S.Input placeholder="Digite aqui seu CPF"/>
                    <S.Input placeholder="Digite aqui seu e-mail"/>
                    <S.Input placeholder="Crie uma senha"/>
                    <S.Input placeholder="Repita a senha"/>

                    <S.LoginButton onPress={() => navigation.navigate('SuccessRegister')}>
                        <S.LoginButtonText>Cadastrar</S.LoginButtonText>
                    </S.LoginButton>
                </S.Content>  

                <Footer />
            </S.ScrollRegister> 


        </S.Container>
    )
}