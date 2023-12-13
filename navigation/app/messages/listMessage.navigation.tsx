import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListMessageScreen from "../../../screens/app/messages/listMessage/ListMessageScreen";
import DetailMessageScreen from "../../../screens/app/messages/listMessage/DetailMessageScreen";
import SettingMessageScreen from "../../../screens/app/messages/listMessage/SettingMessageScreen";
import { MessageDrawType, MessageSettingDrawer } from "./settingMessage.draw";
import { NavigatorScreenParams } from "@react-navigation/native";

export type ListMessageParamList = {
  ListMessage : undefined,
  DetailMessage : undefined,
  SettingMessage : NavigatorScreenParams<MessageDrawType>
};

const ListMessageStack = createNativeStackNavigator<ListMessageParamList>()

export default function ListMessageNavigation() {
  return (
    <ListMessageStack.Navigator initialRouteName='ListMessage'>
      <ListMessageStack.Screen key={"ListMessage"} name="ListMessage" component={MessageSettingDrawer} />
      <ListMessageStack.Screen key={"DetailMessage"} name="DetailMessage" component={DetailMessageScreen} />
      <ListMessageStack.Screen key={"SettingMessage"} name="SettingMessage" component={SettingMessageScreen} />
    </ListMessageStack.Navigator>
  );
}