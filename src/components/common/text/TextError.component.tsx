import { StyleSheet, Text, TextProps, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../../theme/styles/colors";
import gstyle from "../../../theme/styles/global";

interface TextErrorProps extends TextProps {
  content?: string;
}

const TextError = ({ content, ...props }: TextErrorProps) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="error" size={20} color={colors.light.dangerours} />
      <Text style={styles.text} {...props}>
        {content}
      </Text>
    </View>
  );
};

export default TextError;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  text: {
    color: colors.light.dangerours,
    marginLeft: gstyle.space[1],
  },
});
