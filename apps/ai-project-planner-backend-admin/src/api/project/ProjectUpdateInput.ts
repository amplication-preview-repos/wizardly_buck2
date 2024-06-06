import { FunctionalRequirementUpdateManyWithoutProjectsInput } from "./FunctionalRequirementUpdateManyWithoutProjectsInput";
import { LibraryFrameworkUpdateManyWithoutProjectsInput } from "./LibraryFrameworkUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  functionalRequirements?: FunctionalRequirementUpdateManyWithoutProjectsInput;
  libraryFrameworks?: LibraryFrameworkUpdateManyWithoutProjectsInput;
  name?: string | null;
  tools?: string | null;
  typeField?: "Option1" | null;
};
