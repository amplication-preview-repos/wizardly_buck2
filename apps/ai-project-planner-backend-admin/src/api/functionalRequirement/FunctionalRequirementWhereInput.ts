import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type FunctionalRequirementWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
};
