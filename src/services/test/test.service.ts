import axios from "axios";
import { TGetPost, TGetTodos } from "../../types/responses/test/test.response";

class TestService {
  getUsers = async () =>
    await axios.get("https://jsonplaceholder.typicode.com/users");

  getPost = async (url: string) => {
    const response = await axios.get<TGetPost>(url);
    return response.data;
  };

  getTodos = async (url: string, token: string) => {
    const response = await axios.get<TGetTodos[]>(url);
    return response.data;
  };

  add = async (name: string) => {
    if (Math.random() < 0.5) throw new Error("Failed to delete item!");
    return axios.post(`${process.env.EXPO_PUBLIC_API_LOCAL}/todos/add`, {
      name,
    });
  };

  delete = async (id: string) => {
    if (Math.random() < 0.5) throw new Error("Failed to delete item!");
    return axios.delete(
      `${process.env.EXPO_PUBLIC_API_LOCAL}/todos/delete/${id}`
    );
  };
}

const testService = new TestService();

export default testService;
