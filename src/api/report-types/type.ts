export type ADD_REPORT_TYPE_TYPE = {
  message: string;
};

export type GET_REPORT_TYPE_TYPE = {
  message: string;
  reportTypes: {
    _id: string;
    name: string;
    description: string;
    reportedType: "Worker" | "Shop";
    createdAt: string;
    updatedAt: string;
  }[];
};

export type EDIT_REPORT_TYPE_TYPE = {
  message: string;
};

export type DELETE_REPORT_TYPE_TYPE = {
  message: string;
};
