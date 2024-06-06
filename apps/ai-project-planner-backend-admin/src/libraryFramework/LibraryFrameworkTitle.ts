import { LibraryFramework as TLibraryFramework } from "../api/libraryFramework/LibraryFramework";

export const LIBRARYFRAMEWORK_TITLE_FIELD = "name";

export const LibraryFrameworkTitle = (record: TLibraryFramework): string => {
  return record.name?.toString() || String(record.id);
};
