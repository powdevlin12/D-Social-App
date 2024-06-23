import { StyleSheet, View } from 'react-native';
import React from 'react';
import TextInputCustom from '../../common/textInput/TextInputCustom.component';
import gstyle from '../../../theme/styles/global';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { InputsLogin } from '../../../screens/auth/login-screen/LoginScreen';
import TextError from '../../common/text/TextError.component';
import TextPasswordCustom from '../../common/textInput/TextPasswordCustom.component';

type InputContainerProps = {
	control: Control<InputsLogin, any>;
	errors: FieldErrors<InputsLogin>;
};

const InputContainer = ({ control, errors }: InputContainerProps) => {
	console.log(errors);
	return (
		<View style={styles.container}>
			<View style={styles.field}>
				<Controller
					control={control}
					rules={{
						required: {
							message: "Username isn't blank",
							value: true,
						},
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInputCustom
							placeholder='Username , email & phone number'
							onChangeText={onChange}
							onBlur={onBlur}
							value={value}
						/>
					)}
					name='username'
				/>
				{errors.username?.type === 'required' && (
					<View style={{ marginTop: gstyle.space[1] }}>
						<TextError content={errors.username?.message} />
					</View>
				)}
			</View>
			<View style={styles.field}>
				<Controller
					control={control}
					rules={{
						required: {
							message: "Password isn't blank",
							value: true,
						},
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextPasswordCustom
							placeholder='Password'
							onChangeText={onChange}
							onBlur={onBlur}
							value={value}
						/>
					)}
					name='password'
				/>
				{errors.password?.type === 'required' && (
					<View style={{ marginTop: gstyle.space[1] }}>
						<TextError content={errors.password?.message} />
					</View>
				)}
			</View>
		</View>
	);
};

export default InputContainer;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	field: {
		marginBottom: gstyle.space[3],
	},
});
