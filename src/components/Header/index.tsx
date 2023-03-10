import * as S from "./styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../context/CartContext";
import { useForm, Controller } from "react-hook-form";

interface SearchFormProps {
  search: string;
}

export function Header() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const { navigate } = useNavigation<any>();
  const { products } = useContext(CartContext);
  const CategoryList = [
    "Mais Vendidos",
    "Lançamentos",
    "Livros",
    "Decorações",
    "Educativo",
  ];

  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<SearchFormProps>();

  const onSubmit = async (data: SearchFormProps) => {
    setIsSearchBarOpen(!isSearchBarOpen);
    navigate("SearchList", { search: data.search });
    resetField("search");
  };

  return (
    <S.Container>
      <StatusBar backgroundColor="#BF0A0D" barStyle="light-content" />
      <S.ContentContainer>
        <S.IconsAndTitle onPress={() => navigate("Home")}>
          <S.IconBox>
            <AntDesign name="book" size={45} color="#000" />
          </S.IconBox>

          <S.TitleWrapper>
            <S.Title>Sebus</S.Title>
            <S.Description>Novos e usados</S.Description>
          </S.TitleWrapper>
        </S.IconsAndTitle>

        <S.EndIcons>
          <TouchableOpacity
            onPress={() => setIsSearchBarOpen(!isSearchBarOpen)}
          >
            <Ionicons
              name="search-sharp"
              size={30}
              color="#FBEFE3"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate("Cart")}>
            <Ionicons
              name="cart-outline"
              size={30}
              color="#FBEFE3"
              style={{ marginRight: 15 }}
            />
            {products.length === 0 ? null : (
              <S.Notification>
                <S.Text>{products.length}</S.Text>
              </S.Notification>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate("Login")}>
            <Ionicons name="person-circle-outline" size={30} color="#FBEFE3" />
          </TouchableOpacity>
        </S.EndIcons>
      </S.ContentContainer>

      {!!isSearchBarOpen && (
        <S.SearchContainer>
          <Controller
            name="search"
            control={control}
            rules={{ required: "Campo obrigatório" }}
            render={({ field: { onChange, value } }) => (
              <S.input
                placeholder="Pesquise por algum livro"
                placeholderTextColor="#AAA"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <S.SearchButton onPress={handleSubmit(onSubmit)}>
            <S.ButtonText>Buscar</S.ButtonText>
          </S.SearchButton>
        </S.SearchContainer>
      )}

      <S.CategoryBarList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={CategoryList}
        renderItem={({ item }: any) => {
          return (
            <S.CategoryButton
              key={String(item)}
              onPress={() =>
                navigate("Categories", {
                  category: item,
                })
              }
            >
              <S.CategoryItem>{item}</S.CategoryItem>
            </S.CategoryButton>
          );
        }}
      ></S.CategoryBarList>
    </S.Container>
  );
}
