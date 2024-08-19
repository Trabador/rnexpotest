import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { MainStackType } from "../types/rootStackTypes";
import { MainRoutes } from "../navigators/routes";
import { Product } from "../types/ProductTypes";

interface ProductProps {
  product: Product;
}

const ProductCard: FC<ProductProps> = ({ product }) => {
  const { title, price, image, id } = product;
  const navigation =
    useNavigation<NavigationProp<MainStackType, MainRoutes.Details>>();

  const handleOnProductPress = () => {
    navigation.navigate(MainRoutes.Details, { id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnProductPress}>
      <Text>{title}</Text>
      <Text>{price}</Text>
      <Image source={{ uri: image }} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a2a9b3",
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
  image: {
    width: 200,
    height: 80,
  },
});

export default ProductCard;
