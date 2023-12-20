import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
} from "react-native";
import React from "react";
import { dimension } from "../../../utils/dimension";
import gstyle from "../../../theme/styles/global";
import colors from "../../../theme/styles/colors";

interface TextInputCustomProps extends TextInputProps {
  placeholder: string;
}

const TextInputCustom: React.FC<TextInputCustomProps> = ({
  placeholder,
  ...rest
}) => {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      selectionColor={colors.light.text.primary}
      caretHidden={false}
      placeholderTextColor={colors.light.text.secondary}
    />
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: dimension.width - gstyle.space[3] * 2,
    paddingHorizontal: gstyle.space[3],
    fontSize: gstyle.fontSize.large,
    fontWeight: "500",
    borderWidth: 2,
    borderColor: colors.light.border,
    borderRadius: gstyle.borderRadius.normal,
  },
});
