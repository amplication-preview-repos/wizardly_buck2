import { FunctionalRequirement as TFunctionalRequirement } from "../api/functionalRequirement/FunctionalRequirement";

export const FUNCTIONALREQUIREMENT_TITLE_FIELD = "id";

export const FunctionalRequirementTitle = (
  record: TFunctionalRequirement
): string => {
  return record.id?.toString() || String(record.id);
};
