import { StyleSheet, Text, View } from "react-native";
import React from "react";
import gstyle from "../../../theme/styles/global";
import colors from "../../../theme/styles/colors";

type TextNormalProps = {
  content: string;
};

const TextNormal = ({ content }: TextNormalProps) => {
  return <Text style={styles.text}>{content}</Text>;
};

export default TextNormal;

const styles = StyleSheet.create({
  text: {
    fontSize: gstyle.fontSize.large,
    color: colors.light.text.primary,
    fontWeight: "500",
  },
});
