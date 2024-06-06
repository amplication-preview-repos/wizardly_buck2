import { FunctionalRequirementCreateNestedManyWithoutProjectsInput } from "./FunctionalRequirementCreateNestedManyWithoutProjectsInput";
import { LibraryFrameworkCreateNestedManyWithoutProjectsInput } from "./LibraryFrameworkCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  functionalRequirements?: FunctionalRequirementCreateNestedManyWithoutProjectsInput;
  libraryFrameworks?: LibraryFrameworkCreateNestedManyWithoutProjectsInput;
  name?: string | null;
  tools?: string | null;
  typeField?: "Option1" | null;
};
