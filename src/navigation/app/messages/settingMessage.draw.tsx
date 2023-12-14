import { createDrawerNavigator } from '@react-navigation/drawer';
import SetThemeScreen from '../../../screens/app/setting/SetThemeScreen';
import SettingStatusActivityScreen from '../../../screens/app/messages/settingMessage/SettingStatusActivityScreen';
import ListMessageScreen from '../../../screens/app/messages/listMessage/ListMessageScreen';

export type MessageDrawType = {
  setTheme : undefined,
  setStatusActivity : undefined,
  ListMessageDraw : undefined
}

const Drawer = createDrawerNavigator<MessageDrawType>();

export function MessageSettingDrawer() {
  return (
    <Drawer.Navigator initialRouteName='ListMessageDraw'>
      <Drawer.Screen name="ListMessageDraw" component={ListMessageScreen} />
      <Drawer.Screen name="setTheme" component={SetThemeScreen} />
      <Drawer.Screen name="setStatusActivity" component={SettingStatusActivityScreen} />
    </Drawer.Navigator>
  );
}