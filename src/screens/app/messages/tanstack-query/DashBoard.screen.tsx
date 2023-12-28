import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getStudents } from "../../../../services/tanstack/student";
import { TStudent } from "../../../../types/responses/tanstack/student.type";
import gstyle from "../../../../theme/styles/global";
import ItemStudent from "./components/ItemStudent.component";
import { useQuery } from "@tanstack/react-query";
import ButtonCustom from "../../../../components/common/button/ButtonCustom.component";

const LIMIT = 10;

const DashBoard = () => {
  const [page, setPage] = useState<number>(1);
  console.log("🚀 ~ file: AddStudent.screen.tsx:28 ~ AddStudent ~ page:", page);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["students", page],
    queryFn: () => getStudents(page, LIMIT),
    staleTime: 60 * 1000,
  });
  console.log(
    "🚀 ~ file: AddStudent.screen.tsx:20 ~ AddStudent ~ isLoading, isFetching:",
    isLoading,
    isFetching,
    page
  );

  const totalStudentCount = Number(data?.headers["x-total-count"] || 0);
  const totalPage = Math.ceil(totalStudentCount / LIMIT);

  const handleEndReach = () => {
    if (page < totalPage) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <View style={gstyle.container}>
      {isLoading ? (
        <Text>Loading ...</Text>
      ) : (
        <View style={gstyle.container}>
          <ButtonCustom
            label="Prev page"
            onPress={() => setPage((prev) => prev - 1)}
          />
          <FlatList
            data={data?.data}
            renderItem={({ item }) => (
              <ItemStudent student={item} index={item.id + 1} />
            )}
            keyExtractor={(item) => item.id.toString()}
            onEndReachedThreshold={0}
            onEndReached={handleEndReach}
          />
        </View>
      )}
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({});
