import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { BookObjectProps } from "../../screens/Home";

interface BooksListCategoryProps {
  title: string;
  category: BookObjectProps[];
}

interface BooksItemProps {
  item: {
    id: string;
    image: string;
    livro: string;
    autor: string;
    preco: number;
  };
}

export function BooksListCategory({ title, category }: BooksListCategoryProps) {
  const { navigate } = useNavigation<any>();
  return (
    <>
      <S.Title>{title}</S.Title>

      <S.BooksList
        data={category}
        horizontal
        keyExtractor={(_, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: any) => {
          return (
            <S.BookBox
              key={item.id}
              onPress={() => navigate("ProductDetail", { product: item })}
            >
              <S.BookImage source={{ uri: item.image }} />
              <S.BookTitle>{item.livro}</S.BookTitle>
              <S.BookAuthor>{item.autor}</S.BookAuthor>
              <S.BookPrice>R$ {item.preco.toFixed(2)}</S.BookPrice>
            </S.BookBox>
          );
        }}
      />
    </>
  );
}
