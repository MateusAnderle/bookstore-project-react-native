import { Link } from '@react-navigation/native';
import * as S from './styles'
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import LoginImage from '../../assets/login.png'

import { Image } from 'react-native';

export function Login(){
    return (
        <S.Container>
            <Header />
            <BackButton />

            <S.ScrollRegister showsVerticalScrollIndicator={false}>
                <S.Content>
                    <Image source={LoginImage} style={{width: '100%', height: 80, borderRadius: 10, marginBottom: 20}}/>

                    <S.Input placeholder="Digite seu login ou e-mail" placeholderTextColor="#AAA"/>
                    <S.Input placeholder="Digite sua senha" placeholderTextColor="#AAA"/>

                    <S.LoginButton>
                        <S.LoginButtonText>Login</S.LoginButtonText>
                    </S.LoginButton>

                    <S.LoginRegister>
                        Ainda não tem cadastro? {' '}
                        <Link to={{ screen: 'Register' }} style={{fontWeight: 'bold', color: '#005eff'}}>
                            Clique aqui!
                        </Link>
                    </S.LoginRegister>
                </S.Content>   

                <Footer />
            </S.ScrollRegister>
        </S.Container>
    )
}