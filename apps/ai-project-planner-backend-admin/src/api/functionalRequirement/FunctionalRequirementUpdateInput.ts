import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type FunctionalRequirementUpdateInput = {
  description?: string | null;
  project?: ProjectWhereUniqueInput | null;
};
