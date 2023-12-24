import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationApp from "./app";
import AuthNavigation from "./auth/auth.navigation";

const ContainerNavigation = () => {
  const isSignedIn = true;
  return (
    <NavigationContainer>
      {isSignedIn ? <NavigationApp /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default ContainerNavigation;
