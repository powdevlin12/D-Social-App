import useSWR from "swr";
import testService from "../../../services/test/test.service";
import { TGetTodos } from "../../../types/responses/test/test.response";

const useGetTodo = () => {
  const token: string = "dsadwqd32fewfw.fwefewffasdbny.juykyikfewfewf";
  const { data, error, isLoading, mutate } = useSWR<TGetTodos[]>(
    [`${process.env.EXPO_PUBLIC_API_LOCAL}/todos/get-all`, token],
    ([url, token]: [string, string]) => testService.getTodos(url, token),
    {
      revalidateOnMount: true,
    }
  );
  return {
    todos: data,
    error,
    isLoading,
    mutate,
  };
};

export default useGetTodo;
