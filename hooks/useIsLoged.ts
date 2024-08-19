import useHandleLogin from "./useHandleLogin";
import { useEffect } from "react";
import { LoginRoutes, MainRoutes, RootRoutes } from "../navigators/routes";
import useNavigate from "./useNavigate";

const useIsloged = () => {
  const { isLoged } = useHandleLogin();
  const { navigateTo } = useNavigate();

  useEffect(() => {
    const check = () => {
      isLoged()
        .then((res) => {
          if (res) {
            navigateTo(RootRoutes.Main, MainRoutes.Home);
          } else {
            navigateTo(RootRoutes.Login, LoginRoutes.Login);
          }
        })
        .catch((err) => console.log(err));
    };
    check();
  }, []);
};

export default useIsloged;
