import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "../../../../assets";
import { dimension } from "../../../../utils/dimension";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const DoubleTapIg = () => {
  const scale = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd((event) => {
      console.log(
        "🚀 ~ DOUBLE TAP file: DoubleTapIg.tsx:9 ~ tap ~ event:",
        event
      );
      scale.value = withTiming(
        1,
        {
          duration: 500,
        },
        (isFinish) => {
          if (isFinish) {
            scale.value = withDelay(500, withTiming(0));
          }
        }
      );
    });

  const singleTap = Gesture.Tap()
    .numberOfTaps(1)
    .onEnd((event) => {
      console.log(
        "🚀 ~ SINGLE TAP file: DoubleTapIg.tsx:9 ~ tap ~ event:",
        event
      );
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={Gesture.Exclusive(doubleTap, singleTap)}>
        <Animated.View>
          <ImageBackground source={images.animated.women} style={styles.image}>
            <Animated.Image
              source={images.animated.heart}
              style={[styles.heart, rStyle]}
              resizeMode="center"
            />
          </ImageBackground>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default DoubleTapIg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: dimension.width,
    height: dimension.width,
    alignItems: "center",
    justifyContent: "center",
  },
  heart: {
    width: dimension.width / 3,
    height: dimension.width / 3,
  },
});
