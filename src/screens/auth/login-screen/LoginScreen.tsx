import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
	Image,
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../../assets';
import InputContainer from '../../../components/auth/login/InputContainer.component';
import LoginOAuth from '../../../components/auth/login/LoginOAuth.component';
import Background from '../../../components/common/backgound/Background.component';
import ButtonCustom from '../../../components/common/button/ButtonCustom.component';
import TextNormal from '../../../components/common/text/TextNormal.component';
import TextTitle from '../../../components/common/text/TextTitle.component';
import colors from '../../../theme/styles/colors';
import gstyle from '../../../theme/styles/global';
import { dimension } from '../../../utils/dimension';
import useLoginController from './controller';

const LoginScreen = () => {
	const {
		values: { control, rStyle, orientation },
		actions: { errors, handleSubmit, onSubmit },
	} = useLoginController();

	if (orientation !== 3 && orientation !== 4) {
		return (
			<SafeAreaView style={gstyle.container}>
				<Background>
					<ScrollView contentContainerStyle={gstyle.container}>
						<KeyboardAvoidingView behavior='position'>
							<Animated.View style={[styles.decorateTop, rStyle]}>
								<Image
									source={images.auth.login.decorate1}
									resizeMode='contain'
									style={styles.imgDecorateTop}
								/>
							</Animated.View>
							<View
								style={{
									marginVertical: gstyle.space[4],
									marginHorizontal: gstyle.space[3],
								}}
							>
								<TextTitle content='Login D-Social' />
							</View>

							<View style={styles.inputContainer}>
								<InputContainer control={control} errors={errors} />
							</View>
							<TouchableOpacity style={styles.forgotPassword}>
								<TextNormal content='Forgot password ?' />
							</TouchableOpacity>

							<View style={styles.btnContainer}>
								<ButtonCustom label='Login' onPress={handleSubmit(onSubmit)} />
							</View>
						</KeyboardAvoidingView>
						<View style={styles.decorate2}>
							<LinearGradient
								// Background Linear Gradient
								colors={['#0B6EFE', 'rgba(196, 196, 196, 0.00)']}
								style={{ flex: 1, height: 4 }}
								start={{
									x: 1,
									y: 1,
								}}
								end={{
									x: 0.1,
									y: 0.1,
								}}
								locations={[0.1, 1]}
							/>
							<Text style={{ paddingHorizontal: gstyle.space[2] }}>
								Or Sign up With
							</Text>
							<LinearGradient
								// Background Linear Gradient
								colors={['#0B6EFE', 'rgba(196, 196, 196, 0.00)']}
								style={{ flex: 1, height: 4 }}
								start={{
									x: 0.1,
									y: 0.1,
								}}
								end={{
									x: 1,
									y: 1,
								}}
								locations={[0.3, 1]}
							/>
						</View>
						<View style={{ marginTop: gstyle.space[3] }}>
							<LoginOAuth />
						</View>
						<View style={styles.decorateBottom}>
							<Image
								source={images.auth.login.decorate}
								resizeMode='cover'
								style={{ width: dimension.width }}
							/>
						</View>
					</ScrollView>
				</Background>
			</SafeAreaView>
		);
	}
	return (
		<SafeAreaView style={[gstyle.container]}>
			<Background>
				<ScrollView
					contentContainerStyle={[gstyle.container, { flexDirection: 'row' }]}
				>
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<View style={stylesHorizontal.decorateTop}>
							<Image
								source={images.auth.login.decorate1}
								resizeMode='contain'
								style={stylesHorizontal.imgDecorateTop}
							/>
						</View>
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
								rowGap: 6,
							}}
						>
							<View
								style={
									{
										// marginVertical: gstyle.space[4],
										// marginHorizontal: gstyle.space[3],
									}
								}
							>
								<TextTitle content='Login D-Social' />
							</View>

							<View style={stylesHorizontal.inputContainer}>
								<InputContainer control={control} errors={errors} />
							</View>
							<TouchableOpacity style={stylesHorizontal.forgotPassword}>
								<TextNormal content='Forgot password ?' />
							</TouchableOpacity>

							<View style={stylesHorizontal.btnContainer}>
								<ButtonCustom label='Login' onPress={handleSubmit(onSubmit)} />
							</View>
						</View>
					</View>
					{/* <View>
						<View style={stylesHorizontal.decorate2}>
							<LinearGradient
								// Background Linear Gradient
								colors={['#0B6EFE', 'rgba(196, 196, 196, 0.00)']}
								style={{ flex: 1, height: 4 }}
								start={{
									x: 1,
									y: 1,
								}}
								end={{
									x: 0.1,
									y: 0.1,
								}}
								locations={[0.1, 1]}
							/>
							<Text style={{ paddingHorizontal: gstyle.space[2] }}>
								Or Sign up With
							</Text>
							<LinearGradient
								// Background Linear Gradient
								colors={['#0B6EFE', 'rgba(196, 196, 196, 0.00)']}
								style={{ flex: 1, height: 4 }}
								start={{
									x: 0.1,
									y: 0.1,
								}}
								end={{
									x: 1,
									y: 1,
								}}
								locations={[0.3, 1]}
							/>
						</View>
						<View style={{ marginTop: gstyle.space[3] }}>
							<LoginOAuth />
						</View>
						<View style={stylesHorizontal.decorateBottom}>
							<Image
								source={images.auth.login.decorate}
								resizeMode='cover'
								style={{ width: dimension.width }}
							/>
						</View>
					</View> */}
				</ScrollView>
			</Background>
		</SafeAreaView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	decorateTop: {
		alignItems: 'center',
		marginTop: gstyle.space[4],
		width: dimension.width - gstyle.space[3] * 2,
	},
	imgDecorateTop: {
		width: '100%',
		height: '100%',
	},
	inputContainer: {
		marginTop: gstyle.space[0],
	},
	forgotPassword: {
		marginHorizontal: gstyle.space[3],
		alignItems: 'flex-end',
	},
	decorateBottom: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: -1,
	},
	btnContainer: {
		marginHorizontal: gstyle.space[3],
		marginVertical: gstyle.space[3],
	},
	decorate2: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: gstyle.space[3],
		color: colors.light.text.primary,
		marginVertical: gstyle.space[2],
	},
});

const stylesHorizontal = StyleSheet.create({
	decorateTop: {
		width: dimension.width - gstyle.space[3] * 2,
	},
	imgDecorateTop: {
		width: '100%',
		height: '100%',
	},
	inputContainer: {
		marginTop: gstyle.space[0],
	},
	forgotPassword: {
		marginHorizontal: gstyle.space[3],
		alignItems: 'flex-end',
	},
	decorateBottom: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: -1,
	},
	btnContainer: {
		marginHorizontal: gstyle.space[3],
		marginVertical: gstyle.space[3],
		minWidth: 160,
	},
	decorate2: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: gstyle.space[3],
		color: colors.light.text.primary,
		marginVertical: gstyle.space[2],
	},
	layout: {
		flexDirection: 'row',
	},
});
