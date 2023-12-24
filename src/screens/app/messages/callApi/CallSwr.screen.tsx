import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputComponent,
  View,
} from "react-native";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import testService from "../../../../services/test/test.service";
import usePost from "../../../../hooks/api/usePost.hook";
import useGetTodo from "../../../../hooks/api/todo/useGetTodo.hook";
import TextInputCustom from "../../../../components/common/textInput/TextInputCustom.component";
import ButtonCustom from "../../../../components/common/button/ButtonCustom.component";

const CallSwr = () => {
  // const { error, posts, isLoading } = usePost(3);
  const { error, todos, isLoading, mutate } = useGetTodo();
  const [todo, setTodo] = useState<string>("");

  const addTodo = async () => {
    try {
      await testService.add(todo);
      mutate();
    } catch (error) {
      console.log("🚀 ~ file: CallSwr.screen.tsx:18 ~ addTodo ~ error:", error);
    }
  };

  if (isLoading) {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  }
  if (error) {
    return (
      <ScrollView>
        <Text>{JSON.stringify(error)}</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      <TextInputCustom
        placeholder="Type todo"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <ButtonCustom label="Add" onPress={addTodo} />
      <Text>{JSON.stringify(todos)}</Text>
    </ScrollView>
  );
};

export default CallSwr;

const styles = StyleSheet.create({});
