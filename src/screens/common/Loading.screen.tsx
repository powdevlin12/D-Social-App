import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { dimension } from "../../utils/dimension";
import colors from "../../theme/styles/colors";

const SIZE = dimension.width / 4;
const Loading = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        {
          scale: scale.value,
        },
        {
          rotate: `${Math.PI * progress.value * 2} rad`,
        },
      ],
      borderRadius: (SIZE * progress.value) / 2,
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(0.2, {
        duration: 1000,
      }),
      -1,
      true
    );
    scale.value = withRepeat(withSpring(2), -1, true);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { height: SIZE, width: SIZE, backgroundColor: "#0B6EFE" },
          reanimatedStyle,
        ]}
      ></Animated.View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light.bg.first,
  },
});
