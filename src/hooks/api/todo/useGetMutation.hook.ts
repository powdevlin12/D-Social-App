import useSWRMutation from "swr/mutation";
import testService from "../../../services/test/test.service";
import { TGetTodos } from "../../../types/responses/test/test.response";

const useGetMutation = () => {
  const { data, error, isMutating, reset, trigger } = useSWRMutation<TGetTodos>(
    `/todos/get-all/mutation`,
    () =>
      testService.getTodos(
        `${process.env.EXPO_PUBLIC_API_LOCAL}/todos/get-all`,
        "dasdsadsadasd"
      )
  );

  console.log(data, error);
  return {
    data,
    error,
    isMutating,
    reset,
    trigger,
  };
};

export default useGetMutation;
