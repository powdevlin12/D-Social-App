import { NavigatorScreenParams } from '@react-navigation/native';
import * as React from 'react';
import SettingNavigation, {
	SettingParamList,
} from './setting/setting.navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/app/HomeScreen';
import NotificationScreen from '../../screens/app/NotificationScreen';
import MessageNavigation from './messages/message.navigation';
import Loading from '../../screens/common/Loading.screen';

export type AppStackParamList = {
	Home: undefined;
	Notifications: undefined;
	Message: undefined;
	Settings: NavigatorScreenParams<SettingParamList>;
};

const Stack = createBottomTabNavigator<AppStackParamList>();

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
	{
		name: 'Home',
		component: Loading,
	},
	{
		name: 'Notifications',
		component: NotificationScreen,
	},
	{
		name: 'Message',
		component: MessageNavigation,
		options: {
			headerShown: false,
			freezeOnBlur: true,
			unmountOnBlur: true,
		},
	},
	{
		name: 'Settings',
		component: SettingNavigation,
		options: {
			headerShown: false,
		},
	},
];

export default function NavigationApp() {
	return (
		<Stack.Navigator initialRouteName='Home'>
			{routes.map(routeConfig => (
				<Stack.Screen key={routeConfig.name} {...routeConfig} />
			))}
		</Stack.Navigator>
	);
}
