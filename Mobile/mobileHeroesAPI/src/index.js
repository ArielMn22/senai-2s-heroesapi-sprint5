import Heroes from "./pages/heroes";
import Developer from "./pages/developer";

import { createAppContainer, createBottomTabNavigator } from "react-navigation";

const MainTabNavigator = createBottomTabNavigator(
  {
    Heroes: {
      screen: Heroes
    },
    Developer: {
      screen: Developer
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
    //   showIcon: true,
      inactiveBackgroundColor: "#1D0097",
      activeBackgroundColor: "#2400BE"
    },
    initialRouteName: "Heroes"
  }
);

export default createAppContainer(MainTabNavigator);
