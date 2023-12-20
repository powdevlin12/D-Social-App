import { StyleSheet, View } from "react-native";
import React from "react";
import gstyle from "../../../theme/styles/global";
import colors from "../../../theme/styles/colors";

type BackgroundProps = {
  children: React.ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
  return <View style={[gstyle.container, styles.container]}>{children}</View>;
};

export default Background;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.bg.first,
  },
});
