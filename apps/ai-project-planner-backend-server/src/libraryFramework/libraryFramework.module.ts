import { Module } from "@nestjs/common";
import { LibraryFrameworkModuleBase } from "./base/libraryFramework.module.base";
import { LibraryFrameworkService } from "./libraryFramework.service";
import { LibraryFrameworkController } from "./libraryFramework.controller";
import { LibraryFrameworkResolver } from "./libraryFramework.resolver";

@Module({
  imports: [LibraryFrameworkModuleBase],
  controllers: [LibraryFrameworkController],
  providers: [LibraryFrameworkService, LibraryFrameworkResolver],
  exports: [LibraryFrameworkService],
})
export class LibraryFrameworkModule {}
