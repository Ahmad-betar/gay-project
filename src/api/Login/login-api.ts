import { controller } from "../api-routes";
import ApiInstances from "../axios";
import { LOGIN_TYPE } from "./type";

export const LOGIN_API = async ({
  password,
  email,
}: {
  password: string;
  email: string;
}) => {
  const { data } = await ApiInstances.post<LOGIN_TYPE>(controller.login.LOGIN, {
    email,
    password,
  });
  return data;
};
