import { LoginRoutes, MainRoutes, RootRoutes } from "../navigators/routes";

export type MainStackType = {
  [MainRoutes.Home]: undefined;
  [MainRoutes.Details]: { id: number };
};

export type RootStackType = {
  [RootRoutes.Splash]: undefined;
  [RootRoutes.Login]: undefined;
  [RootRoutes.Main]: undefined;
};

export type LoginStackType = {
  [LoginRoutes.Login]: undefined;
};
