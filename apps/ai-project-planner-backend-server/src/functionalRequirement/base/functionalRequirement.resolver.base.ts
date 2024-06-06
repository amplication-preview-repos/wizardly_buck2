/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FunctionalRequirement } from "./FunctionalRequirement";
import { FunctionalRequirementCountArgs } from "./FunctionalRequirementCountArgs";
import { FunctionalRequirementFindManyArgs } from "./FunctionalRequirementFindManyArgs";
import { FunctionalRequirementFindUniqueArgs } from "./FunctionalRequirementFindUniqueArgs";
import { CreateFunctionalRequirementArgs } from "./CreateFunctionalRequirementArgs";
import { UpdateFunctionalRequirementArgs } from "./UpdateFunctionalRequirementArgs";
import { DeleteFunctionalRequirementArgs } from "./DeleteFunctionalRequirementArgs";
import { Project } from "../../project/base/Project";
import { FunctionalRequirementService } from "../functionalRequirement.service";
@graphql.Resolver(() => FunctionalRequirement)
export class FunctionalRequirementResolverBase {
  constructor(protected readonly service: FunctionalRequirementService) {}

  async _functionalRequirementsMeta(
    @graphql.Args() args: FunctionalRequirementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FunctionalRequirement])
  async functionalRequirements(
    @graphql.Args() args: FunctionalRequirementFindManyArgs
  ): Promise<FunctionalRequirement[]> {
    return this.service.functionalRequirements(args);
  }

  @graphql.Query(() => FunctionalRequirement, { nullable: true })
  async functionalRequirement(
    @graphql.Args() args: FunctionalRequirementFindUniqueArgs
  ): Promise<FunctionalRequirement | null> {
    const result = await this.service.functionalRequirement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FunctionalRequirement)
  async createFunctionalRequirement(
    @graphql.Args() args: CreateFunctionalRequirementArgs
  ): Promise<FunctionalRequirement> {
    return await this.service.createFunctionalRequirement({
      ...args,
      data: {
        ...args.data,

        project: args.data.project
          ? {
              connect: args.data.project,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => FunctionalRequirement)
  async updateFunctionalRequirement(
    @graphql.Args() args: UpdateFunctionalRequirementArgs
  ): Promise<FunctionalRequirement | null> {
    try {
      return await this.service.updateFunctionalRequirement({
        ...args,
        data: {
          ...args.data,

          project: args.data.project
            ? {
                connect: args.data.project,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FunctionalRequirement)
  async deleteFunctionalRequirement(
    @graphql.Args() args: DeleteFunctionalRequirementArgs
  ): Promise<FunctionalRequirement | null> {
    try {
      return await this.service.deleteFunctionalRequirement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Project, {
    nullable: true,
    name: "project",
  })
  async getProject(
    @graphql.Parent() parent: FunctionalRequirement
  ): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
