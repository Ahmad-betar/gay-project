import { controller } from "../api-routes";
import ApiInstances from "../axios";
import {
  ADD_JOB_CATEGORY_TYPE,
  DELETE_JOB_CATEGORY_TYPE,
  EDIT_JOB_CATEGORY_TYPE,
  GET_JOB_CATEGORY_TYPE,
} from "./type";

export const ADD_JOB_CATEGORY_API = async ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  const { data } = await ApiInstances.post<ADD_JOB_CATEGORY_TYPE>(
    controller.job_categor.ADD_JOB_CATEGORY,
    {
      name,
      description,
    }
  );
  return data;
};

export const GET_JOB_CATEGORIES_API = async () => {
  const { data } = await ApiInstances.get<GET_JOB_CATEGORY_TYPE>(
    controller.job_categor.GET_JOB_CATEGORY
  );
  return data;
};

export const EDIT_JOB_CATEGORY_API = async ({
  id,
  name,
  description,
}: {
  id: string;
  name: string;
  description: string;
}) => {
  const { data } = await ApiInstances.put<EDIT_JOB_CATEGORY_TYPE>(
    controller.job_categor.EDIT_JOB_CATEGORY + `/${id}`,
    {
      name,
      description,
    }
  );
  return data;
};

export const DELETE_JOB_CATEGORIES_API = async (id: string) => {
  const { data } = await ApiInstances.delete<DELETE_JOB_CATEGORY_TYPE>(
    controller.job_categor.DELETE_JOB_CATEGORY + `/${id}`
  );
  return data;
};
