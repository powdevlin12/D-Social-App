import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../../../theme/styles/colors';
import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withSpring,
	withTiming,
} from 'react-native-reanimated';

// ** Tạo ra array 12 dấu chấm chiều cao 12, tỉ lệ 1, bg màu trắng.  độ mờ
// ** tạo component square . mỗi square là 1 dấu chấm. positition absoulute translate -indẽx * size
// ** tạo biển offsetAngle

const N = 12;
const SIZE_SQUARE = 12;

interface SquareComponentProps {
	index: number;
	progress: Animated.SharedValue<number>;
}

const SquareComponent = ({ index, progress }: SquareComponentProps) => {
	// ** index = 1
	const offsetAngle = (Math.PI * 2) / N; // ** 30
	const finalAngle = offsetAngle * (N - 1 - index); // ** 300
	const rStyle = useAnimatedStyle(() => {
		const rotate = Math.min(finalAngle, progress.value); // ** min (300, 0 -> 360)
		const translateY = withSpring(
			rotate === finalAngle ? -N * SIZE_SQUARE : -index * SIZE_SQUARE, // ** -12 * 12 || -12
		);
		return {
			transform: [{ rotate: `${rotate}rad` }, { translateY }],
		};
	});

	return (
		<Animated.View style={[styles.square, rStyle]} key={index}>
			{/* <Text>{index}</Text> */}
		</Animated.View>
	);
};

const ClockLoader = () => {
	const progress = useSharedValue(0);

	useEffect(() => {
		progress.value = withRepeat(
			withTiming(2 * Math.PI, {
				duration: 2500,
				easing: Easing.linear,
			}),
			-1,
			true,
		);
	}, []);

	return (
		<View style={styles.container}>
			{new Array(N).fill(0).map((_, index) => {
				return (
					<SquareComponent index={index} progress={progress} key={`${index}`} />
				);
			})}
		</View>
	);
};

export default ClockLoader;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.dark.bg.first,
		alignItems: 'center',
		justifyContent: 'center',
	},
	square: {
		height: SIZE_SQUARE,
		aspectRatio: 1,
		backgroundColor: colors.dark.text.primary,
		position: 'absolute',
	},
});
