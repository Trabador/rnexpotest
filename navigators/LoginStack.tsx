import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { LoginRoutes } from "./routes";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Login} name={LoginRoutes.Login} />
    </Stack.Navigator>
  );
};

export default LoginStack;
