import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Splash from "../screens/Splash";
import LoginStack from "./LoginStack";
import MainStack from "./MainNavigator";
import { RootStackType } from "../types/rootStackTypes";
import { RootRoutes } from "./routes";

const Stack = createNativeStackNavigator<RootStackType>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Splash} name={RootRoutes.Splash} />
        <Stack.Screen component={LoginStack} name={RootRoutes.Login} />
        <Stack.Screen component={MainStack} name={RootRoutes.Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
