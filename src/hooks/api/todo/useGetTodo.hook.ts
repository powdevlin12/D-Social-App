import useSWR from "swr";
import testService from "../../../services/test/test.service";
import { TGetTodos } from "../../../types/responses/test/test.response";

const useGetTodo = () => {
  const { data, error, isLoading, mutate } = useSWR<TGetTodos>(
    `${process.env.EXPO_PUBLIC_API_LOCAL}/todos/get-all`,
    testService.getTodos,
    {}
  );
  return {
    todos: data,
    error,
    isLoading,
    mutate,
  };
};

export default useGetTodo;
