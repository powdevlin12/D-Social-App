import { ImageRequireSource, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "../../../assets";
import ItemOAuth from "./ItemOAuth.component";

type AuthType = [
  {
    img: ImageRequireSource;
    type: "google" | "facebook" | "apple";
  }
];
const LoginOAuth = () => {
  const authType = [
    {
      img: images.auth.login.google,
      type: "google",
    },
    {
      img: images.auth.login.facebook,
      type: "facebook",
    },
    {
      img: images.auth.login.apple,
      type: "apple",
    },
  ];
  return (
    <View style={styles.container}>
      {authType.map((item) => (
        <ItemOAuth img={item.img} key={item.type} />
      ))}
    </View>
  );
};

export default LoginOAuth;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
