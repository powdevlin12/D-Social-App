import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
	useAnimatedProps,
	useDerivedValue,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { Circle, Svg } from 'react-native-svg';
import { dimension } from '../../../../utils/dimension';
import { ReText } from 'react-native-redash';
import colors from '../../../../theme/styles/colors';
import gstyle from '../../../../theme/styles/global';
import ButtonCustom from '../../../../components/common/button/ButtonCustom.component';

const BG_COLOR = '#444B6F';
const BG_STROKE_COLOR = '#303858';
const STROKE_COLOR = '#A6E1FA';

const { height, width } = dimension;

const CIRCLE_PERIMETER = 1000;
const R = CIRCLE_PERIMETER / (2 * Math.PI);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircleProgress = () => {
	const progress = useSharedValue(0);

	useEffect(() => {
		progress.value = withTiming(1 - progress.value, { duration: 2000 });
	}, []);

	const animatedProps = useAnimatedProps(() => ({
		// ** xác định khoảng cách từ điểm bắt đầu của đường viền đến điểm bắt đầu của đoạn thực sự được vẽ
		strokeDashoffset: CIRCLE_PERIMETER * progress.value,
	}));

	const progressText = useDerivedValue(() => {
		return `${Math.floor(100 - progress.value * 100)}`;
	});

	const handlePressRun = () => {
		progress.value = withTiming(progress.value === 1 ? 0 : 1, {
			duration: 2000,
		});
	};

	return (
		<View style={styles.container}>
			<ButtonCustom label='Run' onPress={handlePressRun} />
			<Svg>
				{/* dùng để render text thay đổi */}
				<ReText text={progressText} style={styles.textProgress} />
				<Circle
					// ** vị trí tâm theo chiều ngang của màn hình
					cx={width / 2}
					// ** vị trí tâm theo chiều dọc của màn hình
					cy={height / 3}
					// ** bán kính
					r={R}
					// ** màu đường viền
					stroke={BG_STROKE_COLOR}
					// ** độ rộng đường viền
					strokeWidth={30}
					// ** màu phía trong đường tròn
					fill={BG_COLOR}
				/>
				<AnimatedCircle
					cx={width / 2}
					cy={height / 3}
					r={R}
					stroke={STROKE_COLOR}
					strokeWidth={15}
					fill={BG_COLOR}
					// ** chiều dài cho mỗi vạch dash trên đường tròn
					strokeDasharray={CIRCLE_PERIMETER}
					animatedProps={animatedProps}
					strokeLinecap={'round'}
				/>
			</Svg>
		</View>
	);
};

export default CircleProgress;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: BG_COLOR,
	},
	textProgress: {
		color: colors.dark.text.primary,
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
