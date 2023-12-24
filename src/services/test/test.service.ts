import axios from "axios";
import { TGetPost, TGetTodos } from "../../types/responses/test/test.response";

class TestService {
  getUsers = async () =>
    await axios.get("https://jsonplaceholder.typicode.com/users");

  getPost = async (url: string) => {
    const response = await axios.get<TGetPost>(url);
    return response.data;
  };

  getTodos = async (url: string) => {
    const response = await axios.get<TGetTodos>(url);
    return response.data;
  };

  add = async (name: string) => {
    return axios.post(`${process.env.EXPO_PUBLIC_API_LOCAL}/todos/add`, {
      name,
    });
  };
}

const testService = new TestService();

export default testService;
