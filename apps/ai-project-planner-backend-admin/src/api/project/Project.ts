import { FunctionalRequirement } from "../functionalRequirement/FunctionalRequirement";
import { LibraryFramework } from "../libraryFramework/LibraryFramework";

export type Project = {
  createdAt: Date;
  description: string | null;
  functionalRequirements?: Array<FunctionalRequirement>;
  id: string;
  libraryFrameworks?: Array<LibraryFramework>;
  name: string | null;
  tools: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
