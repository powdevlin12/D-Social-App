import { createDrawerNavigator } from '@react-navigation/drawer';
import SetThemeScreen from '../../../screens/app/setting/SetThemeScreen';
import SettingStatusActivityScreen from '../../../screens/app/messages/settingMessage/SettingStatusActivityScreen';
import ListMessageScreen from '../../../screens/app/messages/listMessage/ListMessageScreen';
import ReanimatedOne from '../../../screens/app/messages/animated/ReanimatedOne';
import PanGesture from '../../../screens/app/messages/animated/PanGesture';
import InterpolateScrollView from '../../../screens/app/messages/animated/InterpolateScrollView';
import ChangeTheme from '../../../screens/app/messages/animated/ChangeTheme';
import PinchGesture from '../../../screens/app/messages/animated/PinchGesture';
import DoubleTapIg from '../../../screens/app/messages/animated/DoubleTapIg';
import CircleProgress from '../../../screens/app/messages/animated/CircleProgress';
import ClockLoader from '../../../screens/app/messages/animated/ClockLoader';

export type MessageDrawType = {
	setTheme: undefined;
	setStatusActivity: undefined;
	listMessageDraw: undefined;
	ReanimatedOne: undefined;
	PanGesture: undefined;
	InterpolateScrollView: undefined;
	changeTheme: undefined;
	PinchGesture: undefined;
	DoubleTabIg: undefined;
	CircleProgress: undefined;
	ClockLoader: undefined;
};

const Drawer = createDrawerNavigator<MessageDrawType>();

export function MessageSettingDrawer() {
	return (
		<Drawer.Navigator initialRouteName='ClockLoader'>
			<Drawer.Screen name='listMessageDraw' component={ListMessageScreen} />
			<Drawer.Screen name='setTheme' component={SetThemeScreen} />
			<Drawer.Screen
				name='setStatusActivity'
				component={SettingStatusActivityScreen}
			/>
			<Drawer.Screen name='ReanimatedOne' component={ReanimatedOne} />
			<Drawer.Screen name='PanGesture' component={PanGesture} />
			<Drawer.Screen
				name='InterpolateScrollView'
				component={InterpolateScrollView}
			/>
			<Drawer.Screen name='changeTheme' component={ChangeTheme} />
			<Drawer.Screen name='PinchGesture' component={PinchGesture} />
			<Drawer.Screen name='DoubleTabIg' component={DoubleTapIg} />
			<Drawer.Screen name='CircleProgress' component={CircleProgress} />
			<Drawer.Screen name='ClockLoader' component={ClockLoader} />
		</Drawer.Navigator>
	);
}
