import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import * as S from './styles'
import Banner from '../../assets/capa.png'
import { Footer } from '../../components/Footer';
import { BooksListCategory } from '../../components/BooksListCategory';
import { api } from '../../utils/api'
import { ActivityIndicator } from 'react-native';

export function Home() {
  const [bestSellers, setBestSellers] = useState()
  const [newBooks, setNewBooks] = useState()
  const [books, setBooks] = useState()
  const [isLoading, seIsLoading] = useState(false)

  async function fetchBooks() {
    try {
      const response = await api.get('/products')
      const bestSellerBooks = response?.data
      setBestSellers(bestSellerBooks)
      const newBooks = response?.data?.filter((item) => item.genero === "Lançamentos")
      setNewBooks(newBooks)
      const books = response?.data?.filter((item) => item.genero === "Livros")
      setBooks(books)
    } catch (error) {
      console.log(error)
    } finally {
      seIsLoading(false)
    }
  }

  useEffect(() => {
    seIsLoading(true)
    fetchBooks()
  }, [])

  return (
    <S.Container>
      <Header />

      <S.Content showsVerticalScrollIndicator={false}>
        <S.Banner source={Banner} />

        {isLoading 
          ? 
          <ActivityIndicator 
            color='#F00'
            size='large'
            style={{marginTop: 100, marginBottom: 100}}
          /> 
          : 
          <>
            {bestSellers?.length > 0 && <BooksListCategory title="Mais vendidos" category={bestSellers}/>}
            {newBooks?.length > 0 && <BooksListCategory title="Lançamentos" category={newBooks}/>}
            {books?.length > 0 && <BooksListCategory title="Livros" category={books}/>}
          </>
        }
        <Footer/>
      </S.Content>
    </S.Container>
  );
}
