import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import gstyle from "../../theme/styles/global";
import { images } from "../../assets";
import { dimension } from "../../utils/dimension";
import TextTitle from "../../components/common/text/TextTitle.component";
import Background from "../../components/common/backgound/Background.component";
import InputContainer from "../../components/auth/login/InputContainer.component";
import TextNormal from "../../components/common/text/TextNormal.component";
import ButtonCustom from "../../components/common/button/ButtonCustom.component";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../theme/styles/colors";
import LoginOAuth from "../../components/auth/login/LoginOAuth.component";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from "react-native-reanimated";

const LoginScreen = () => {
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

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      scaleDecorate.value = withTiming(0.8, { duration: 300 });
      heightDecorate.value = withSpring(dimension.height / 5);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      scaleDecorate.value = withTiming(1, { duration: 200 });
      heightDecorate.value = withSpring(dimension.height / 4);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={gstyle.container}>
      <Background>
        <ScrollView contentContainerStyle={gstyle.container}>
          <KeyboardAvoidingView behavior="position">
            <Animated.View style={[styles.decorateTop, rStyle]}>
              <Image
                source={images.auth.login.decorate1}
                resizeMode="contain"
                style={styles.imgDecorateTop}
              />
            </Animated.View>
            <View
              style={{
                marginVertical: gstyle.space[4],
                marginHorizontal: gstyle.space[3],
              }}
            >
              <TextTitle content="Login D-Social" />
            </View>

            <View style={styles.inputContainer}>
              <InputContainer />
            </View>
            <TouchableOpacity style={styles.forgotPassword}>
              <TextNormal content="Forgot password ?" />
            </TouchableOpacity>

            <View style={styles.btnContainer}>
              <ButtonCustom label="Login" />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.decorate2}>
            <LinearGradient
              // Background Linear Gradient
              colors={["#0B6EFE", "rgba(196, 196, 196, 0.00)"]}
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
              colors={["#0B6EFE", "rgba(196, 196, 196, 0.00)"]}
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
              resizeMode="cover"
              style={{ width: dimension.width }}
            />
          </View>
        </ScrollView>
      </Background>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  decorateTop: {
    alignItems: "center",
    marginTop: gstyle.space[4],
    width: dimension.width - gstyle.space[3] * 2,
  },
  imgDecorateTop: {
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    marginTop: gstyle.space[0],
  },
  forgotPassword: {
    marginHorizontal: gstyle.space[3],
    alignItems: "flex-end",
  },
  decorateBottom: {
    position: "absolute",
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: gstyle.space[3],
    color: colors.light.text.primary,
    marginVertical: gstyle.space[2],
  },
});
