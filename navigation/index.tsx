import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from '../screens/app/HomeScreen';
import NotificationScreen from '../screens/app/NotificationScreen';
import ProfileScreen from '../screens/app/ProfileScreen';
import SettingScreen from '../screens/app/SettingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileParams } from '../types/params/Profile';

export type AppStackParamList = {
  Home: undefined;
  Notifications: undefined;
  Profile: ProfileParams
  Settings: undefined;
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
    name: "Profile",
    component: ProfileScreen,
  },
  {
    name: "Settings",
    component: SettingScreen,
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