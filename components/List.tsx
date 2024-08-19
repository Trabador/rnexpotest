import React, { FC } from "react";
import { FlatList, View } from "react-native";
import ProductCard from "./ProductCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Product, Products } from "../types/ProductTypes";

interface ListProps {
  products: Products;
}

const List: FC<ListProps> = ({ products }) => {
  const insets = useSafeAreaInsets();

  const renderProducts = ({ item }: { item: Product }) => {
    return <ProductCard product={item} />;
  };

  return (
    <View style={{ paddingTop: insets.top }}>
      <FlatList
        data={products}
        renderItem={renderProducts}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default List;
