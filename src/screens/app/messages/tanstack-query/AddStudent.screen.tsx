import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getStudents } from "../../../../services/tanstack/student";
import { TStudent } from "../../../../types/responses/tanstack/student.type";
import gstyle from "../../../../theme/styles/global";
import ItemStudent from "./components/ItemStudent.component";
import { useQuery } from "@tanstack/react-query";

const AddStudent = () => {
  // binh thuong ta van lam
  // const [students, setStudents] = useState<TStudent[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   getStudents(1, 10)
  //     .then((res) => {
  //       setStudents(res.data);
  //     })
  //     .catch((err) => console.log(JSON.stringify(err)))
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);
  const [page, setPage] = useState<number>(1);
  console.log("🚀 ~ file: AddStudent.screen.tsx:26 ~ AddStudent ~ page:", page);

  const { data, isLoading } = useQuery({
    queryKey: ["students", page],
    queryFn: () => getStudents(page, 10),
  });

  return (
    <View style={gstyle.container}>
      {isLoading ? (
        <Text>Loading ...</Text>
      ) : (
        <FlatList
          data={data?.data}
          renderItem={({ item }) => <ItemStudent student={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default AddStudent;

const styles = StyleSheet.create({});
