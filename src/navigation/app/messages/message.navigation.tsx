import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListMessageNavigation from "./listMessage.navigation";
import { MessageSettingDrawer } from "./settingMessage.draw";

export type MessageParamList = {
  ListMessageStack : undefined,
  SettingMessageDraw : undefined
};

const MessageStack = createNativeStackNavigator<MessageParamList>();

export default function MessageNavigation() {
  return (
    <MessageStack.Navigator initialRouteName="ListMessageStack">
      <MessageStack.Screen
        key={"ListMessageStack"}
        name="ListMessageStack"
        component={ListMessageNavigation}
        options={{
          headerShown : false,
        }}
      />
      <MessageStack.Screen
        key={"SettingMessageDraw"}
        name="SettingMessageDraw"
        component={MessageSettingDrawer}
      />
    </MessageStack.Navigator>
  );
}
