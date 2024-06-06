import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FunctionalRequirementServiceBase } from "./base/functionalRequirement.service.base";

@Injectable()
export class FunctionalRequirementService extends FunctionalRequirementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
