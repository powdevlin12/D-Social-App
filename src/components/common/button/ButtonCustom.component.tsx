import {
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import colors from '../../../theme/styles/colors';
import gstyle from '../../../theme/styles/global';
import TextTitle from '../text/TextTitle.component';

interface ButtonCustomProps extends TouchableOpacityProps {
	activeOpacity?: number;
	label: string;
}

const ButtonCustom = ({ label, activeOpacity, ...rest }: ButtonCustomProps) => {
	return (
		<TouchableOpacity
			activeOpacity={activeOpacity}
			style={styles.btn}
			{...rest}
		>
			<TextTitle content={label} style={styles.text} />
		</TouchableOpacity>
	);
};

ButtonCustom.defaultProps = {
	activeOpacity: 0.8,
};

export default ButtonCustom;

const styles = StyleSheet.create({
	btn: {
		backgroundColor: colors.light.button,
		height: 48,
		borderRadius: gstyle.borderRadius.normal,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: colors.dark.text.primary,
		fontSize: gstyle.fontSize.button,
		fontWeight: 'bold',
	},
});
