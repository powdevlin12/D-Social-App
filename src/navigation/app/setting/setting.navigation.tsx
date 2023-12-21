import SettingScreen from "../../../screens/app/setting/SettingScreen";
import SetThemeScreen from "../../../screens/app/setting/SetThemeScreen";
import SetLangScreen from "../../../screens/app/setting/SetLangScreen";
import { createStackNavigator } from "@react-navigation/stack";

export type SettingParamList = {
  Setting : undefined,
  SetLang ?: {lang : string},
  SetTheme ?: { theme : string }
};

const SettingStack = createStackNavigator<SettingParamList>()

export default function SettingNavigation() {
  return (
    <SettingStack.Navigator initialRouteName='Setting'>
      <SettingStack.Screen key={"Setting"} name="Setting" component={SettingScreen} />
      <SettingStack.Screen key={"SetTheme"} name="SetTheme" component={SetThemeScreen} />
      <SettingStack.Screen key={"SetLang"} name="SetLang" component={SetLangScreen} />
    </SettingStack.Navigator>
  );
}