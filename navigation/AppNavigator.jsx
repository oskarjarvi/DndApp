import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SignUpScreen from "../pages/Auth/SignUpScreen";
import AuthLoadingScreen from "../pages/Auth/AuthLoadingScreen";
import Home from "../pages/HomeScreen";
import Characters from "../pages/Character";
import CharacterCreation from "../pages/Character/createCharacter";

const AppStack = createStackNavigator(
  { Home: { screen: Home }, Characters: Characters, Create: CharacterCreation },
  {
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: SignUpScreen
    },
    {
      initialRouteName: "AuthLoading",
      defaultNavigationOptions: {
        headerShown: false
      }
    }
  )
);
