import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/auth/LoginScreen";
import ForgotPassword from "../../screens/auth/ForgotPassword";
import RegisterScreen from "../../screens/auth/RegisterScreen";

export type AuthParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

const AuthStack = createStackNavigator<AuthParamList>();

export default function AuthNavigation() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        key={"Login"}
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        key={"ForgotPassword"}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthStack.Screen
        key={"Register"}
        name="Register"
        component={RegisterScreen}
      />
    </AuthStack.Navigator>
  );
}
