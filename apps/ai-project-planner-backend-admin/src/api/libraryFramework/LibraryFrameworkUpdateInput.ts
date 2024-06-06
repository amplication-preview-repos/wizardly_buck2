import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type LibraryFrameworkUpdateInput = {
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
};
