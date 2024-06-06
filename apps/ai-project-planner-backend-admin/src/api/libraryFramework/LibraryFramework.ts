import { Project } from "../project/Project";

export type LibraryFramework = {
  createdAt: Date;
  id: string;
  name: string | null;
  project?: Project | null;
  updatedAt: Date;
};
