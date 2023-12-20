import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextInputCustom from "../../common/textInput/TextInputCustom.component";
import gstyle from "../../../theme/styles/global";

const InputContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <TextInputCustom placeholder="Username , email & phone number" />
      </View>
      <View style={styles.field}>
        <TextInputCustom placeholder="Password" />
      </View>
    </View>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  field: {
    marginBottom: gstyle.space[3],
  },
});
