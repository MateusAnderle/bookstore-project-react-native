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

                    <S.Input placeholder="Digite seu nome completo" placeholderTextColor="#AAA"/>
                    <S.Input placeholder="Digite aqui seu CEP" placeholderTextColor="#AAA"/>
                    <S.Input placeholder="Digite aqui seu telefone" placeholderTextColor="#AAA"/>
                    <S.Input placeholder="Digite aqui seu endereço" placeholderTextColor="#AAA"/>
                    <S.Input placeholder="Digite aqui seu bairro" placeholderTextColor="#AAA"/>
                    <S.Input placeholder="Digite aqui sua cidade" placeholderTextColor="#AAA"/>
                    <S.Input placeholder="Digite aqui seu CPF" placeholderTextColor="#AAA"/>
                    <S.Input placeholder="Digite aqui seu e-mail" placeholderTextColor="#AAA"/>
                    <S.Input placeholder="Crie uma senha" placeholderTextColor="#AAA"/>
                    <S.Input placeholder="Repita a senha" placeholderTextColor="#AAA"/>

                    <S.LoginButton onPress={() => navigation.navigate('SuccessRegister')}>
                        <S.LoginButtonText>Cadastrar</S.LoginButtonText>
                    </S.LoginButton>
                </S.Content>  

                <Footer />
            </S.ScrollRegister> 


        </S.Container>
    )
}