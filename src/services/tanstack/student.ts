import { TStudent } from "../../types/responses/tanstack/student.type";
import http from "../../utils/http";

export const getStudents = (page: number | string, limit: number | string) => {
  return http.get<TStudent[]>("students", {
    params: {
      _page: page,
      __limit: limit,
    },
  });
};
