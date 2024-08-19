import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackType } from "../types/rootStackTypes";

const useNavigate = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackType>>();

  const navigateTo = (newStack: any, screen: any) => {
    navigation.replace(newStack, { screen });
  };

  return { navigateTo };
};

export default useNavigate;
