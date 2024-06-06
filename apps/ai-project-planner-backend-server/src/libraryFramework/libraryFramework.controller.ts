import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LibraryFrameworkService } from "./libraryFramework.service";
import { LibraryFrameworkControllerBase } from "./base/libraryFramework.controller.base";

@swagger.ApiTags("libraryFrameworks")
@common.Controller("libraryFrameworks")
export class LibraryFrameworkController extends LibraryFrameworkControllerBase {
  constructor(protected readonly service: LibraryFrameworkService) {
    super(service);
  }
}
