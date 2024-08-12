import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  ADD_REPORT_TYPE_API,
  DELETE_REPORT_TYPE_API,
  EDIT_REPORT_TYPE_API,
  GET_REPORT_TYPE_API,
} from "./report-types-api";

const ADD_REPORTED_TYPE_QUERY = () => {
  const queryClient = useQueryClient();

  const queryResult = useMutation({
    mutationKey: ["add-reported-type"],
    mutationFn: ADD_REPORT_TYPE_API,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-reported-type"]);
    },
  });
  return queryResult;
};

const GET_REPORTED_TYPE_QUERY = () => {
  const queryResult = useQuery({
    queryKey: ["get-reported-type"],
    queryFn: async () => {
      const data = await GET_REPORT_TYPE_API();
      return data;
    },
  });
  return queryResult;
};

const EDIT_REPORTED_TYPE_QUERY = () => {
  const queryClient = useQueryClient();

  const queryResult = useMutation({
    mutationKey: ["edit-reported-type"],
    mutationFn: EDIT_REPORT_TYPE_API,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-reported-type"]);
    },
  });
  return queryResult;
};

const DELETE_REPORTED_TYPE_QUERY = () => {
  const queryClient = useQueryClient();

  const queryResult = useMutation({
    mutationKey: ["delete-reported-type"],
    mutationFn: DELETE_REPORT_TYPE_API,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-reported-type"]);
    },
  });
  return queryResult;
};

export const REPORTED_TYPE_QUERIES = {
  ADD_REPORTED_TYPE_QUERY,
  GET_REPORTED_TYPE_QUERY,
  EDIT_REPORTED_TYPE_QUERY,
  DELETE_REPORTED_TYPE_QUERY,
};
