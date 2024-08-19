import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React, { FC } from "react";

interface LoginHandlerProps {
  title: string;
  handleOnPress: () => void;
}

const LoginHandler: FC<LoginHandlerProps> = ({ title, handleOnPress }) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#19222B" : "#000a14" },
        ]}
        onPress={handleOnPress}
      >
        <Text style={{ color: "white", marginRight: 3, fontSize: 15 }}>
          {title}
        </Text>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png",
          }}
          width={20}
          height={20}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});

export default LoginHandler;
