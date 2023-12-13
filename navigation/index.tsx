import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from '../screens/app/HomeScreen';
import NotificationScreen from '../screens/app/NotificationScreen';
import ProfileScreen from '../screens/app/ProfileScreen';
import SettingScreen from '../screens/app/setting/SettingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileParams } from '../types/params/Profile';
import SettingNavigation, { SettingParamList } from './app/setting/setting.navigation';
import { NavigatorScreenParams } from '@react-navigation/native';
import MessageScreen from '../screens/app/messages';
import MessageNavigation from './app/messages/message.navigation';

export type AppStackParamList = {
  Home: undefined;
  Notifications: undefined;
  Message: undefined
  Settings: NavigatorScreenParams<SettingParamList>;
};


const Stack = createBottomTabNavigator<AppStackParamList>();

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
  {
    name: "Home",
    component: HomeScreen,
  },
  {
    name: "Notifications",
    component: NotificationScreen,
  },
  {
    name: "Message",
    component: MessageNavigation,
  },
  {
    name: "Settings",
    component: SettingNavigation,
    options : {
      headerShown : false
    }
  },
];

export default function NavigationApp() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      {
        routes.map(routeConfig => <Stack.Screen key={routeConfig.name} {...routeConfig} />)
      }
    </Stack.Navigator>
  );
}