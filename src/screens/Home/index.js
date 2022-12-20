import React from 'react';
import { Header } from '../../components/Header';
import * as S from './styles'
import { BookData } from '../../utils/booksData';
import Banner from '../../assets/capa.png'
import { Footer } from '../../components/Footer';
import { BooksListCategory } from '../../components/BooksListCategory';

export function Home() {
  return (
    <S.Container>
      <Header />

      <S.Content showsVerticalScrollIndicator={false}>
        <S.Banner source={Banner} />

        <BooksListCategory title="Mais vendidos" category={BookData}/>
        <BooksListCategory title="Lançamentos" category={BookData}/>
        <BooksListCategory title="Livros" category={BookData}/>
        <BooksListCategory title="Decorações" category={BookData}/>
        <BooksListCategory title="Educativos" category={BookData}/>
        
        <Footer/>
      </S.Content>
    </S.Container>
  );
}
