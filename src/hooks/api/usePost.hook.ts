import useSWR from "swr";
import { TGetPost } from "../../types/responses/test/test.response";
import testService from "../../services/test/test.service";

function usePost(id: number) {
  const { data, error, isLoading } = useSWR<TGetPost>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    testService.getPost,
    {}
  );

  return {
    posts: data,
    isLoading,
    error,
  };
}

export default usePost;
