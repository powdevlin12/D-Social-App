import { SubmitHandler, useForm } from 'react-hook-form';
import {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from 'react-native-reanimated';
import { InputsLogin } from './type';
import { useEffect } from 'react';
import { dimension } from '../../../utils/dimension';
import { Keyboard } from 'react-native';
import { useGetOrientationHook } from '../../../../hooks';

const useLoginController = () => {
	const scaleDecorate = useSharedValue(1);
	const heightDecorate = useSharedValue(dimension.height / 4);
	const rStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					scale: scaleDecorate.value,
				},
			],
			height: heightDecorate.value,
		};
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<InputsLogin>({
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<InputsLogin> = data => {
		console.log('🚀 ~ file: LoginScreen.tsx:63 ~ LoginScreen ~ data:', data);
	};

	useEffect(() => {
		const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
			scaleDecorate.value = withTiming(0.8, { duration: 500 });
			heightDecorate.value = withSpring(dimension.height / 5);
		});
		const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
			scaleDecorate.value = withTiming(1, { duration: 300 });
			heightDecorate.value = withSpring(dimension.height / 4);
		});

		return () => {
			showSubscription.remove();
			hideSubscription.remove();
		};
	}, []);

	const { orientation } = useGetOrientationHook();
	console.log('orientation ', orientation);
	return {
		values: { control, rStyle, orientation },
		actions: { handleSubmit, onSubmit, errors },
		refs: {},
	};
};

export default useLoginController;
