import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type FunctionalRequirementCreateInput = {
  description?: string | null;
  project?: ProjectWhereUniqueInput | null;
};
