import * as graphql from "@nestjs/graphql";
import { FunctionalRequirementResolverBase } from "./base/functionalRequirement.resolver.base";
import { FunctionalRequirement } from "./base/FunctionalRequirement";
import { FunctionalRequirementService } from "./functionalRequirement.service";

@graphql.Resolver(() => FunctionalRequirement)
export class FunctionalRequirementResolver extends FunctionalRequirementResolverBase {
  constructor(protected readonly service: FunctionalRequirementService) {
    super(service);
  }
}
