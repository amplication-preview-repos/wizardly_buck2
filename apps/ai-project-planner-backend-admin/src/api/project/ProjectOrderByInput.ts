import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  tools?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
