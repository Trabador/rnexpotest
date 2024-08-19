import { AccessToken, LoginManager } from "react-native-fbsdk-next";
import useNavigate from "./useNavigate";

const useHandleLogin = () => {
  const { navigateTo } = useNavigate();

  const handleLogin = async () => {
    console.log("press it");
    const result = await LoginManager.logInWithPermissions([
      "public_profile",
      "email",
    ]);
    if (result.isCancelled) return;
    navigateTo("MainRoot", "Home");
  };
  const handleLogout = () => {
    LoginManager.logOut();
    navigateTo("LoginRoot", "Login");
  };

  const isLoged = async () => {
    const isLogedIn = await AccessToken.getCurrentAccessToken();
    return isLogedIn;
  };

  return { handleLogin, handleLogout, isLoged };
};

export default useHandleLogin;
