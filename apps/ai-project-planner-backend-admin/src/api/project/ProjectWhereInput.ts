import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FunctionalRequirementListRelationFilter } from "../functionalRequirement/FunctionalRequirementListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LibraryFrameworkListRelationFilter } from "../libraryFramework/LibraryFrameworkListRelationFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  functionalRequirements?: FunctionalRequirementListRelationFilter;
  id?: StringFilter;
  libraryFrameworks?: LibraryFrameworkListRelationFilter;
  name?: StringNullableFilter;
  tools?: StringNullableFilter;
  typeField?: "Option1";
};
