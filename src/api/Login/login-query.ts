import { useMutation } from "react-query";
import { LOGIN_API } from "./login-api";

export const LOGIN_QUERY = () => {
  const queryResult = useMutation({
    mutationKey: ["login"],
    mutationFn: LOGIN_API,
  });
  return queryResult;
};
