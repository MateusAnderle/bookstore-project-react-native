import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import * as S from "./styles";
import Banner from "../../assets/capa.png";
import { Footer } from "../../components/Footer";
import { BooksListCategory } from "../../components/BooksListCategory";
import { api } from "../../utils/api";
import { ActivityIndicator } from "react-native";

export interface BookObjectProps {
  ano: number;
  autor: string;
  created_at: string;
  dimensoes: string;
  fabricante: string;
  genero: string;
  id: string;
  idioma: string;
  image: string;
  isbn: string;
  livro: string;
  preco: number;
  precoSugerido: number;
  quantidade: number;
  sinopse: string;
}

export function Home() {
  const [bestSellers, setBestSellers] = useState<BookObjectProps[]>([]);
  const [newBooks, setNewBooks] = useState<BookObjectProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const take = 10;

  const fetchBooks = async () => {
    try {
      const response = await api.get(`/products?skip=${skip}&take=${take}`);
      setBestSellers(response.data.products);
      setNewBooks(response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchBooks();
  }, []);

  return (
    <S.Container>
      <Header />

      <S.Content showsVerticalScrollIndicator={false}>
        <S.Banner source={Banner} />

        {isLoading ? (
          <ActivityIndicator
            color="#F00"
            size="large"
            style={{ marginTop: 100, marginBottom: 100 }}
          />
        ) : (
          <>
            {bestSellers?.length > 0 && (
              <BooksListCategory title="Mais vendidos" category={bestSellers} />
            )}
            {newBooks?.length > 0 && (
              <BooksListCategory title="Lançamentos" category={newBooks} />
            )}
          </>
        )}
        <Footer />
      </S.Content>
    </S.Container>
  );
}
