import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import { MainStackType } from "../types/rootStackTypes";
import useHandleLogin from "../hooks/useHandleLogin";
import LoginHandler from "../components/LoginHandler";
import { MainRoutes } from "./routes";

const Stack = createNativeStackNavigator<MainStackType>();

const MainStack = () => {
  const { handleLogout } = useHandleLogin();

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <LoginHandler handleOnPress={handleLogout} title="Logout" />
        ),
      }}
    >
      <Stack.Screen component={Home} name={MainRoutes.Home} />
      <Stack.Screen component={Details} name={MainRoutes.Details} />
    </Stack.Navigator>
  );
};

export default MainStack;
