import React from 'react';
import { Header } from '../../components/Header';
import * as S from './styles'
import { BookData } from '../../utils/booksData';
import Banner from '../../assets/capa.png'
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <S.Container>
      <Header />

      <S.Content showsVerticalScrollIndicator={false}>
          <S.Banner source={Banner} />

        <S.Title>Mais vendidos</S.Title>

        <S.BooksList
          data={BookData}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return(
              <S.BookBox>
                <S.BookImage source={item.image}/>
                <S.BookTitle>{item.livro}</S.BookTitle>
                <S.BookAuthor>{item.autor}</S.BookAuthor>
                <S.BookPrice>R$ {item.preco}</S.BookPrice>
              </S.BookBox>
            )
          }}
        />

        <S.Title>Lançamentos</S.Title>

        <S.BooksList
          data={BookData}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return(
              <S.BookBox>
                <S.BookImage source={item.image}/>
                <S.BookTitle>{item.livro}</S.BookTitle>
                <S.BookAuthor>{item.autor}</S.BookAuthor>
                <S.BookPrice>R$ {item.preco}</S.BookPrice>
              </S.BookBox>
            )
          }}
        />

        <S.Title>Livros</S.Title>

        <S.BooksList
          data={BookData}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return(
              <S.BookBox>
                <S.BookImage source={item.image}/>
                <S.BookTitle>{item.livro}</S.BookTitle>
                <S.BookAuthor>{item.autor}</S.BookAuthor>
                <S.BookPrice>R$ {item.preco}</S.BookPrice>
              </S.BookBox>
            )
          }}
        />

        <S.Title>Decorações</S.Title>

        <S.BooksList
          data={BookData}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return(
              <S.BookBox>
                <S.BookImage source={item.image}/>
                <S.BookTitle>{item.livro}</S.BookTitle>
                <S.BookAuthor>{item.autor}</S.BookAuthor>
                <S.BookPrice>R$ {item.preco}</S.BookPrice>
              </S.BookBox>
            )
          }}
        />

        <S.Title>Educativo</S.Title>

        <S.BooksList
          data={BookData}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return(
              <S.BookBox>
                <S.BookImage source={item.image}/>
                <S.BookTitle>{item.livro}</S.BookTitle>
                <S.BookAuthor>{item.autor}</S.BookAuthor>
                <S.BookPrice>R$ {item.preco}</S.BookPrice>
              </S.BookBox>
            )
          }}
        />

        <Footer/>
      </S.Content>
    </S.Container>
  );
}
