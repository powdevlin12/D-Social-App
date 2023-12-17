import { createDrawerNavigator } from "@react-navigation/drawer";
import SetThemeScreen from "../../../screens/app/setting/SetThemeScreen";
import SettingStatusActivityScreen from "../../../screens/app/messages/settingMessage/SettingStatusActivityScreen";
import ListMessageScreen from "../../../screens/app/messages/listMessage/ListMessageScreen";
import ReanimatedOne from "../../../screens/app/messages/animated/ReanimatedOne";
import PanGesture from "../../../screens/app/messages/animated/PanGesture";
import InterpolateScrollView from "../../../screens/app/messages/animated/InterpolateScrollView";
import ChangeTheme from "../../../screens/app/messages/animated/ChangeTheme";
import PinchGesture from "../../../screens/app/messages/animated/PinchGesture";

export type MessageDrawType = {
  setTheme: undefined;
  setStatusActivity: undefined;
  listMessageDraw: undefined;
  ReanimatedOne: undefined;
  PanGesture: undefined;
  InterpolateScrollView: undefined;
  changeTheme: undefined;
  PinchGesture: undefined;
};

const Drawer = createDrawerNavigator<MessageDrawType>();

export function MessageSettingDrawer() {
  return (
    <Drawer.Navigator initialRouteName="PinchGesture">
      <Drawer.Screen name="listMessageDraw" component={ListMessageScreen} />
      <Drawer.Screen name="setTheme" component={SetThemeScreen} />
      <Drawer.Screen
        name="setStatusActivity"
        component={SettingStatusActivityScreen}
      />
      <Drawer.Screen name="ReanimatedOne" component={ReanimatedOne} />
      <Drawer.Screen name="PanGesture" component={PanGesture} />
      <Drawer.Screen
        name="InterpolateScrollView"
        component={InterpolateScrollView}
      />
      <Drawer.Screen name="changeTheme" component={ChangeTheme} />
      <Drawer.Screen name="PinchGesture" component={PinchGesture} />
    </Drawer.Navigator>
  );
}
