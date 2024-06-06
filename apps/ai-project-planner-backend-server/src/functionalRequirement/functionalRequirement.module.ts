import { Module } from "@nestjs/common";
import { FunctionalRequirementModuleBase } from "./base/functionalRequirement.module.base";
import { FunctionalRequirementService } from "./functionalRequirement.service";
import { FunctionalRequirementController } from "./functionalRequirement.controller";
import { FunctionalRequirementResolver } from "./functionalRequirement.resolver";

@Module({
  imports: [FunctionalRequirementModuleBase],
  controllers: [FunctionalRequirementController],
  providers: [FunctionalRequirementService, FunctionalRequirementResolver],
  exports: [FunctionalRequirementService],
})
export class FunctionalRequirementModule {}
