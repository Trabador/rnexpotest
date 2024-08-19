import { useEffect } from "react";
import useHandleLogin from "./hooks/useHandleLogin";
import MainNavigator from "./navigators/MainNavigator";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginStack from "./navigators/LoginStack";
import MainStack from "./navigators/MainNavigator";
import Splash from "./screens/Splash";
import RootStack from "./navigators/RootStack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootStack />
    </QueryClientProvider>
  );
}
