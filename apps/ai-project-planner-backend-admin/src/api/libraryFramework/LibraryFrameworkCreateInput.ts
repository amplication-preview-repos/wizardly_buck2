import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type LibraryFrameworkCreateInput = {
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
};
