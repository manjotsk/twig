import React from "react";
import { createSwitchNavigator } from "react-navigation";
import AuthLoading from "../screens/AuthLoading";
import MainTabNavigator from "./MainTabNavigator";

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading: AuthLoading,
  Main: MainTabNavigator
});
