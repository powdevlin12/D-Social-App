import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from '../screens/app/HomeScreen';
import NotificationScreen from '../screens/app/NotificationScreen';
import ProfileScreen from '../screens/app/ProfileScreen';
import SettingScreen from '../screens/app/SettingScreen';

type AppStackParamList = {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export default function NavigationApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}