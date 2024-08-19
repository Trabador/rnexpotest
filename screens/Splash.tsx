import { View, Image } from "react-native";
import React from "react";
import useIsloged from "../hooks/useIsLoged";

const Splash = () => {
  useIsloged();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{
          uri: "https://cdn.store-assets.com/s/143854/f/7337603.png",
        }}
        width={300}
        height={300}
      />
    </View>
  );
};

export default Splash;
