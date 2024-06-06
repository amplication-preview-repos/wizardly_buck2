import * as graphql from "@nestjs/graphql";
import { LibraryFrameworkResolverBase } from "./base/libraryFramework.resolver.base";
import { LibraryFramework } from "./base/LibraryFramework";
import { LibraryFrameworkService } from "./libraryFramework.service";

@graphql.Resolver(() => LibraryFramework)
export class LibraryFrameworkResolver extends LibraryFrameworkResolverBase {
  constructor(protected readonly service: LibraryFrameworkService) {
    super(service);
  }
}
