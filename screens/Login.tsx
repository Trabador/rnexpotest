import { View } from "react-native";
import React from "react";
import LoginHandler from "../components/LoginHandler";
import useHandleLogin from "../hooks/useHandleLogin";

const Login = () => {
  const { handleLogin } = useHandleLogin();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LoginHandler handleOnPress={handleLogin} title="Login" />
    </View>
  );
};

export default Login;
