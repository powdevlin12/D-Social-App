import DetailMessageScreen from "../../../screens/app/messages/listMessage/DetailMessageScreen";
import SettingMessageScreen from "../../../screens/app/messages/listMessage/SettingMessageScreen";
import { MessageDrawType, MessageSettingDrawer } from "./settingMessage.draw";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export type ListMessageParamList = {
  ListMessage : undefined,
  DetailMessage : undefined,
  SettingMessage : NavigatorScreenParams<MessageDrawType>
};

const ListMessageStack = createStackNavigator<ListMessageParamList>()

export default function ListMessageNavigation() {
  return (
    <ListMessageStack.Navigator initialRouteName='ListMessage'>
      <ListMessageStack.Screen key={"ListMessage"} name="ListMessage" component={MessageSettingDrawer} />
      <ListMessageStack.Screen key={"DetailMessage"} name="DetailMessage" component={DetailMessageScreen} />
      <ListMessageStack.Screen key={"SettingMessage"} name="SettingMessage" component={SettingMessageScreen} />
    </ListMessageStack.Navigator>
  );
}