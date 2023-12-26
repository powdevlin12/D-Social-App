import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../theme/styles/colors";
import { dimension } from "../../../utils/dimension";
import gstyle from "../../../theme/styles/global";

interface TextPasswordCustomProps extends TextInput {}

const TextPasswordCustom = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={!showPassword}
        selectionColor={colors.light.text.primary}
        caretHidden={false}
        placeholderTextColor={colors.light.text.secondary}
        style={styles.textInput}
        {...props}
      />
      <TouchableOpacity
        onPress={showPasswordHandler}
        style={styles.iconShowPassword}
      >
        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color={colors.light.text.secondary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TextPasswordCustom;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: dimension.width - gstyle.space[3] * 2,
    paddingHorizontal: gstyle.space[3],
    borderWidth: 2,
    borderColor: colors.light.border,
    borderRadius: gstyle.borderRadius.normal,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    flex: 1,
    height: "100%",
    fontSize: gstyle.fontSize.large,
    fontWeight: "500",
  },
  iconShowPassword: {
    width: 30,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
