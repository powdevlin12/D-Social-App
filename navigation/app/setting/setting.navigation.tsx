import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../../../screens/app/setting/SettingScreen";
import SetThemeScreen from "../../../screens/app/setting/SetThemeScreen";
import SetLangScreen from "../../../screens/app/setting/SetLangScreen";

export type SettingParamList = {
  Setting : undefined,
  SetLang : {lang : string},
  SetTheme ?: { theme : string }
};

const SettingStack = createStackNavigator<SettingParamList>()

const routes: Array<React.ComponentProps<typeof SettingStack.Screen>> = [
  {
    name: "Setting",
    component: SettingScreen,

  },
  {
    name: "SetTheme",
    component: SetThemeScreen,
  },
  {
    name: "SetLang",
    component: SetLangScreen,
  },
];

export default function SettingNavigation() {
  return (
    <SettingStack.Navigator initialRouteName='Setting'>
      {
        routes.map(routeConfig => <SettingStack.Screen key={routeConfig.name} {...routeConfig} />)
      }
    </SettingStack.Navigator>
  );
}