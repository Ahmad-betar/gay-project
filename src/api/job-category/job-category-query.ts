import { useMutation, useQuery } from "react-query";
import {
  ADD_JOB_CATEGORY_API,
  DELETE_JOB_CATEGORIES_API,
  EDIT_JOB_CATEGORY_API,
  GET_JOB_CATEGORIES_API,
} from "./job-category-api";

const ADD_JOB_CATEGORY_QUERY = () => {
  const queryResult = useMutation({
    mutationKey: ["add-job-category"],
    mutationFn: ADD_JOB_CATEGORY_API,
  });
  return queryResult;
};

const GET_JOB_CATEGORIES_QUERY = () => {
  const queryResult = useQuery({
    queryKey: ["get-job-category"],
    queryFn: async () => {
      const data = await GET_JOB_CATEGORIES_API();
      return data;
    },
  });
  return queryResult;
};

const EDIT_JOB_CATEGORY_QUERY = () => {
  const queryResult = useMutation({
    mutationKey: ["add-job-category"],
    mutationFn: EDIT_JOB_CATEGORY_API,
  });
  return queryResult;
};

const DELETE_JOB_CATEGORY_QUERY = () => {
  const queryResult = useMutation({
    mutationKey: ["add-job-category"],
    mutationFn: DELETE_JOB_CATEGORIES_API,
  });
  return queryResult;
};

export const JOB_CATEGORY_QUERIES = {
  GET_JOB_CATEGORIES_QUERY,
  ADD_JOB_CATEGORY_QUERY,
  EDIT_JOB_CATEGORY_QUERY,
  DELETE_JOB_CATEGORY_QUERY,
};
