import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Button from "../components/Button";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MainStackType } from "../types/rootStackTypes";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../services/utils";
import { MainRoutes } from "../navigators/routes";

const Details = () => {
  const route = useRoute<RouteProp<MainStackType, MainRoutes.Details>>();
  const navigation = useNavigation();

  const id = route.params?.id;
  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => fetchProduct(id),
  });

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="auto" />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Image source={{ uri: data.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.price}>${data.price}</Text>
          </View>

          <View style={styles.margin}>
            <Button
              title="Go Back"
              onPressHandler={() => navigation.goBack()}
              style={styles.backButton}
            />
          </View>
        </>
      )}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbdbdb",
    alignItems: "center",
  },
  backButton: {
    borderRadius: 5,
    backgroundColor: "#1971ff",
    color: "#f2f7ff",
    padding: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    fontSize: 20,
  },
  margin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default Details;
