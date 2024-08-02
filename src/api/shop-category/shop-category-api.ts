import { controller } from "../api-routes";
import ApiInstances from "../axios";
import {
  ADD_SHOP_CATEGORY_TYPE,
  DELETE_SHOP_CATEGORY_TYPE,
  EDIT_SHOP_CATEGORY_TYPE,
  GET_SHOP_CATEGORY_TYPE,
} from "./type";

export const ADD_SHOP_CATEGORY_API = async ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  const { data } = await ApiInstances.post<ADD_SHOP_CATEGORY_TYPE>(
    controller.shop_category.ADD_SHOP_CATEGORY,
    {
      name,
      description,
    }
  );
  return data;
};

export const GET_SHOP_CATEGORIES_API = async () => {
  const { data } = await ApiInstances.get<GET_SHOP_CATEGORY_TYPE>(
    controller.shop_category.GET_SHOP_CATEGORY
  );
  return data;
};

export const EDIT_SHOP_CATEGORY_API = async ({
  id,
  name,
  description,
}: {
  id: string;
  name: string;
  description: string;
}) => {
  const { data } = await ApiInstances.put<EDIT_SHOP_CATEGORY_TYPE>(
    controller.shop_category.EDIT_SHOP_CATEGORY + `/${id}`,
    {
      name,
      description,
    }
  );
  return data;
};

export const DELETE_SHOP_CATEGORY_API = async (id: string) => {
  const { data } = await ApiInstances.delete<DELETE_SHOP_CATEGORY_TYPE>(
    controller.shop_category.DELETE_SHOP_CATEGORY + `/${id}`
  );
  return data;
};
