import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TStudent } from "../../../../../types/responses/tanstack/student.type";

type ItemStudentProps = {
  student: TStudent;
  index: number;
};

const ItemStudent = ({ student, index }: ItemStudentProps) => {
  const { avatar, email, id, last_name } = student;
  return (
    <View style={styles.container}>
      <Text>{index}</Text>
      <Text>{last_name}</Text>
      <Text>{email}</Text>
    </View>
  );
};

export default ItemStudent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffa",
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 6,
    marginTop: 10,
  },
});
