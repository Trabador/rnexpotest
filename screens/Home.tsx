import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import List from "../components/List";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/utils";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="auto" />
      {isLoading ? <ActivityIndicator /> : <List products={data} />}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
