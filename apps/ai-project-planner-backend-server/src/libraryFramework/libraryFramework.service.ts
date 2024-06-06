import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LibraryFrameworkServiceBase } from "./base/libraryFramework.service.base";

@Injectable()
export class LibraryFrameworkService extends LibraryFrameworkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
