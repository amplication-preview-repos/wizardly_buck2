import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FunctionalRequirementService } from "./functionalRequirement.service";
import { FunctionalRequirementControllerBase } from "./base/functionalRequirement.controller.base";

@swagger.ApiTags("functionalRequirements")
@common.Controller("functionalRequirements")
export class FunctionalRequirementController extends FunctionalRequirementControllerBase {
  constructor(protected readonly service: FunctionalRequirementService) {
    super(service);
  }
}
