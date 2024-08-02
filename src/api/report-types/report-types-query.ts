import { useMutation, useQuery } from "react-query";
import {
  ADD_REPORT_TYPE_API,
  DELETE_REPORT_TYPE_API,
  EDIT_REPORT_TYPE_API,
  GET_REPORT_TYPE_API,
} from "./report-types-api";

const ADD_SHOP_CATEGORY_QUERY = () => {
  const queryResult = useMutation({
    mutationKey: ["add-reported-type"],
    mutationFn: ADD_REPORT_TYPE_API,
  });
  return queryResult;
};

const GET_SHOP_CATEGORIES_QUERY = () => {
  const queryResult = useQuery({
    queryKey: ["get-reported-type"],
    queryFn: async () => {
      const data = await GET_REPORT_TYPE_API();
      return data;
    },
  });
  return queryResult;
};

const EDIT_SHOP_CATEGORY_QUERY = () => {
  const queryResult = useMutation({
    mutationKey: ["edit-reported-type"],
    mutationFn: EDIT_REPORT_TYPE_API,
  });
  return queryResult;
};

const DELETE_SHOP_CATEGORY_QUERY = () => {
  const queryResult = useMutation({
    mutationKey: ["delete-reported-type"],
    mutationFn: DELETE_REPORT_TYPE_API,
  });
  return queryResult;
};

export const REPORTED_TYPE_QUERIES = {
  ADD_SHOP_CATEGORY_QUERY,
  GET_SHOP_CATEGORIES_QUERY,
  EDIT_SHOP_CATEGORY_QUERY,
  DELETE_SHOP_CATEGORY_QUERY,
};
