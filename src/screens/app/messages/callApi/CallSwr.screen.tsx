import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputComponent,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import useSWR, { SWRConfiguration, mutate } from "swr";
import testService from "../../../../services/test/test.service";
import usePost from "../../../../hooks/api/usePost.hook";
import useGetTodo from "../../../../hooks/api/todo/useGetTodo.hook";
import TextInputCustom from "../../../../components/common/textInput/TextInputCustom.component";
import ButtonCustom from "../../../../components/common/button/ButtonCustom.component";
import { TGetTodos } from "../../../../types/responses/test/test.response";

const CallSwr = () => {
  // const { error, posts, isLoading } = usePost(3);
  const { error, todos, isLoading, mutate } = useGetTodo();

  const [todo, setTodo] = useState<string>("");

  const addTodoOptions = (newTodo: TGetTodos) => {
    return {
      // optimistic data displays until we populate cache
      // param is previous data
      optimisticData: (todos: TGetTodos[]) => [...todos, newTodo],
      rollbackOnError: true,
      populateCache: (added: TGetTodos, todos: TGetTodos[]) => [
        ...todos,
        added,
      ],
      revalidate: false,
    };
  };

  const addTodo = async () => {
    try {
      await mutate(
        testService.add,
        addTodoOptions({ _id: Math.random(), name: todo })
      );
    } catch (error) {
      console.log("🚀 ~ file: CallSwr.screen.tsx:18 ~ addTodo ~ error:", error);
    }
  };

  const deteteTodoOptions = async (id: string) => {
    console.log(
      "🚀 ~ file: CallSwr.screen.tsx:36 ~ deteteTodoOptions ~ id:",
      id
    );
    return {
      // optimistic data displays until we populate cache
      // param is previous data
      optimisticData: (todos: TGetTodos[]) => {
        return todos.filter((todo) => {
          return todo._id !== id;
        });
      },
      rollbackOnError: true,
      // response from API request is 1st param
      // previous data is 2nd param
      populateCache: true,
      revalidate: false,
    };
  };

  const deleteTodo = async (id: string) => {
    try {
      await mutate(testService.delete(id), deteteTodoOptions(id));
    } catch (error) {
      console.log(
        "🚀 ~ file: CallSwr.screen.tsx:39 ~ deleteTodo ~ error:",
        error
      );
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
    <View>
      <TextInputCustom
        placeholder="Type todo"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <ButtonCustom label="Add" onPress={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ marginBottom: 3, padding: 8, backgroundColor: "red" }}
            onPress={() => deleteTodo(item._id)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CallSwr;

const styles = StyleSheet.create({});
