import { StyleSheet } from "react-native";
import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const imgUri =
  "https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80";

const PinchGesture = () => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const rFocalStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: focalX.value }, { translateY: focalY.value }],
    };
  });

  const pinch = Gesture.Pinch()
    .onChange((event) => {
      scale.value = event.scale;
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    })
    .onEnd((event) => {
      scale.value = withTiming(1);
    });

  return (
    // <PinchGestureHandler onGestureEvent={pinchHandler}>
    //   <Animated.View style={{ flex: 1 }}>
    //     <Animated.Image
    //       style={[{ flex: 1 }, rStyle]}
    //       source={{ uri: imgUri }}
    //     />
    //     <Animated.View style={[styles.focalPoint, rFocalStyle]}></Animated.View>
    //   </Animated.View>
    // </PinchGestureHandler>

    <GestureDetector gesture={pinch}>
      <Animated.View style={{ flex: 1 }}>
        <Animated.Image
          style={[{ flex: 1 }, rStyle]}
          source={{ uri: imgUri }}
        />
        <Animated.View style={[styles.focalPoint, rFocalStyle]}></Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

export default PinchGesture;

const styles = StyleSheet.create({
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    backgroundColor: "blue",
    borderRadius: 10,
  },
});
