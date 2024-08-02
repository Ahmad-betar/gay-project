export type ADD_JOB_CATEGORY_TYPE = {
  message: string;
};

export type GET_JOB_CATEGORY_TYPE = {
  message: string;
  jobCategories: {
    _id: string;
    name: string;
    description: string;
  }[];
};

export type EDIT_JOB_CATEGORY_TYPE = {
  message: string;
};

export type DELETE_JOB_CATEGORY_TYPE = {
  message: string;
};
