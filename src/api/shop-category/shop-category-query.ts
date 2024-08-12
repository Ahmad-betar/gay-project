import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  ADD_SHOP_CATEGORY_API,
  DELETE_SHOP_CATEGORY_API,
  EDIT_SHOP_CATEGORY_API,
  GET_SHOP_CATEGORIES_API,
} from "./shop-category-api";

const ADD_SHOP_CATEGORY_QUERY = () => {
  const queryClient = useQueryClient();

  const queryResult = useMutation({
    mutationKey: ["add-shop-category"],
    mutationFn: ADD_SHOP_CATEGORY_API,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-shop-category"]);
    },
  });
  return queryResult;
};

const GET_SHOP_CATEGORIES_QUERY = () => {
  const queryResult = useQuery({
    queryKey: ["get-shop-category"],
    queryFn: async () => {
      const data = await GET_SHOP_CATEGORIES_API();
      return data;
    },
  });
  return queryResult;
};

const EDIT_SHOP_CATEGORY_QUERY = () => {
  const queryClient = useQueryClient();

  const queryResult = useMutation({
    mutationKey: ["edit-shop-category"],
    mutationFn: EDIT_SHOP_CATEGORY_API,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-shop-category"]);
    },
  });
  return queryResult;
};

const DELETE_SHOP_CATEGORY_QUERY = () => {
  const queryClient = useQueryClient();

  const queryResult = useMutation({
    mutationKey: ["delete-shop-category"],
    mutationFn: DELETE_SHOP_CATEGORY_API,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-shop-category"]);
    },
  });
  return queryResult;
};

export const SHOP_CATEGORY_QUERIES = {
  GET_SHOP_CATEGORIES_QUERY,
  ADD_SHOP_CATEGORY_QUERY,
  EDIT_SHOP_CATEGORY_QUERY,
  DELETE_SHOP_CATEGORY_QUERY,
};
