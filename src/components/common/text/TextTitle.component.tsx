import { StyleSheet, Text, TextProps, View } from "react-native";
import React from "react";
import gstyle from "../../../theme/styles/global";
import colors from "../../../theme/styles/colors";

interface TextTitleProps extends TextProps {
  content: string;
}

const TextTitle = ({ content, ...rest }: TextTitleProps) => {
  return (
    <Text style={styles.text} {...rest}>
      {content}
    </Text>
  );
};

export default TextTitle;

const styles = StyleSheet.create({
  text: {
    fontSize: gstyle.fontSize.title,
    fontWeight: "500",
    color: colors.light.text.primary,
  },
});
