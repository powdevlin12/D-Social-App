import { View, Text, StyleSheet } from "react-native";
import React from "react";
import useGetMutation from "../../../../hooks/api/todo/useGetMutation.hook";

const CallSwrMutation = () => {
  const { data, error, isMutating, reset, trigger } = useGetMutation();
  console.log(
    "🚀 ~ file: CallSwrMutation.screen.tsx:7 ~ CallSwrMutation ~ data, error, isMutating:",
    data,
    error,
    isMutating
  );

  if (isMutating) {
    return (
      <View style={styles.container}>
        <Text>Loading ...</Text>
      </View>
    );
  }

  if (error) {
    <View style={styles.container}>
      <Text>{JSON.stringify(error)}</Text>
    </View>;
  }

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
export default CallSwrMutation;
