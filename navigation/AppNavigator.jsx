import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../pages/HomeScreen";
import Characters from "../pages/Character";
import CharacterCreation from "../pages/Character/createCharacter";
import LoginScreen from "../pages/Auth/LoginScreen";
import SignUpScreen from "../pages/Auth/SignUpScreen";

const AppStack = createStackNavigator(
  { Home: { screen: Home }, Characters: Characters, Create: CharacterCreation },
  {
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);
const AuthStack = createStackNavigator(
  {Login: LoginScreen, SignUp: SignUpScreen},
  {
    initialRouteName: 'Login'
}
)

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName:'Auth',
      defaultNavigationOptions: {
        headerShown: false
      }
    }
  )
);
