import { controller } from "../api-routes";
import ApiInstances from "../axios";
import {
  ADD_REPORT_TYPE_TYPE,
  DELETE_REPORT_TYPE_TYPE,
  EDIT_REPORT_TYPE_TYPE,
  GET_REPORT_TYPE_TYPE,
} from "./type";

export const ADD_REPORT_TYPE_API = async ({
  name,
  description,
  reportedType,
}: {
  name: string;
  description: string;
  reportedType: string;
}) => {
  const { data } = await ApiInstances.post<ADD_REPORT_TYPE_TYPE>(
    "admin/" + controller.report_type.ADD_REPORT_TYPE,
    {
      name,
      description,
      reportedType,
    }
  );
  return data;
};

export const GET_REPORT_TYPE_API = async () => {
  const { data } = await ApiInstances.get<GET_REPORT_TYPE_TYPE>(
    "admin/" + controller.report_type.GET_REPORT_TYPE
  );
  return data;
};

export const EDIT_REPORT_TYPE_API = async ({
  id,
  name,
  description,
  reportedType,
}: {
  id: string;
  name: string;
  description: string;
  reportedType: "Worker" | "Shop";
}) => {
  const { data } = await ApiInstances.put<EDIT_REPORT_TYPE_TYPE>(
    "admin/" + controller.report_type.EDIT_REPORT_TYPE + `/${id}`,
    {
      name,
      description,
      reportedType,
    }
  );
  return data;
};

export const DELETE_REPORT_TYPE_API = async (id: string) => {
  const { data } = await ApiInstances.delete<DELETE_REPORT_TYPE_TYPE>(
    "admin/" + controller.report_type.DELETE_REPORT_TYPE + `/${id}`
  );
  return data;
};
