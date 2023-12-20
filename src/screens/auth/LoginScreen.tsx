import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
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

const LoginScreen = () => {
  return (
    <SafeAreaView style={gstyle.container}>
      <Background>
        <View style={styles.decorateTop}>
          <Image
            source={images.auth.login.decorate1}
            resizeMode="contain"
            style={styles.imgDecorateTop}
          />
        </View>
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
        <View style={styles.decorateBottom}>
          <Image
            source={images.auth.login.decorate}
            resizeMode="cover"
            style={{ width: dimension.width }}
          />
        </View>
        <View style={styles.btnContainer}>
          <ButtonCustom label="Login" />
        </View>
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
      </Background>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  decorateTop: {
    alignItems: "center",
    marginTop: gstyle.space[4],
  },
  imgDecorateTop: {
    width: dimension.width - gstyle.space[3] * 2,
    height: dimension.height / 4,
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
