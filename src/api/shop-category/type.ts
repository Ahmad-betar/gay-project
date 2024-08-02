export type ADD_SHOP_CATEGORY_TYPE = {
  message: string;
};

export type GET_SHOP_CATEGORY_TYPE = {
  message: string;
  shopCategories: {
    _id: string;
    name: string;
    description: string;
  }[];
};

export type EDIT_SHOP_CATEGORY_TYPE = {
  message: string;
};

export type DELETE_SHOP_CATEGORY_TYPE = {
  message: string;
};
