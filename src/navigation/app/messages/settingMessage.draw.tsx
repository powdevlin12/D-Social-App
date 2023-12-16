import { createDrawerNavigator } from '@react-navigation/drawer';
import SetThemeScreen from '../../../screens/app/setting/SetThemeScreen';
import SettingStatusActivityScreen from '../../../screens/app/messages/settingMessage/SettingStatusActivityScreen';
import ListMessageScreen from '../../../screens/app/messages/listMessage/ListMessageScreen';
import ReanimatedOne from '../../../screens/app/messages/animated/ReanimatedOne';

export type MessageDrawType = {
  setTheme : undefined,
  setStatusActivity : undefined,
  ListMessageDraw : undefined,
  ReanimatedOne : undefined,
}

const Drawer = createDrawerNavigator<MessageDrawType>();

export function MessageSettingDrawer() {
  return (
    <Drawer.Navigator initialRouteName='ReanimatedOne'>
      <Drawer.Screen name="ListMessageDraw" component={ListMessageScreen} />
      <Drawer.Screen name="setTheme" component={SetThemeScreen} />
      <Drawer.Screen name="setStatusActivity" component={SettingStatusActivityScreen} />
      <Drawer.Screen name="ReanimatedOne" component={ReanimatedOne} />
    </Drawer.Navigator>
  );
}