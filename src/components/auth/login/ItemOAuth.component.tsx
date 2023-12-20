import { Image, ImageRequireSource, StyleSheet, View } from "react-native";
import React from "react";

type ItemOAuthProps = {
  img: ImageRequireSource;
};

const SIZE = 52;

const ItemOAuth = ({ img }: ItemOAuthProps) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} resizeMode="contain" />
    </View>
  );
};

export default ItemOAuth;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    overflow: "hidden",
    backgroundColor: "#ECE9EC",
    borderWidth: 0.4,
    borderColor: "#F89AEE",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: SIZE * 0.5,
    height: SIZE * 0.6,
  },
});
