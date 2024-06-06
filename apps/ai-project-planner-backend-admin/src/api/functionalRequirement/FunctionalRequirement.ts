import { Project } from "../project/Project";

export type FunctionalRequirement = {
  createdAt: Date;
  description: string | null;
  id: string;
  project?: Project | null;
  updatedAt: Date;
};
