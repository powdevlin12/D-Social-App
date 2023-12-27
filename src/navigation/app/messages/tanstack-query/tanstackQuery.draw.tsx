import { createDrawerNavigator } from "@react-navigation/drawer";
import AddStudent from "../../../../screens/app/messages/tanstack-query/AddStudent.screen";
import DashBoard from "../../../../screens/app/messages/tanstack-query/DashBoard.screen";

export type TanstackQueryDrawType = {
  AddStudent: undefined;
  DashBoard: undefined;
};

const DrawTanstack = createDrawerNavigator<TanstackQueryDrawType>();

export function TanstackQueryDraw() {
  return (
    <DrawTanstack.Navigator initialRouteName="AddStudent">
      <DrawTanstack.Screen name="AddStudent" component={AddStudent} />
      <DrawTanstack.Screen name="DashBoard" component={DashBoard} />
    </DrawTanstack.Navigator>
  );
}
