/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LibraryFrameworkWhereInput } from "./LibraryFrameworkWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LibraryFrameworkOrderByInput } from "./LibraryFrameworkOrderByInput";

@ArgsType()
class LibraryFrameworkFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LibraryFrameworkWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LibraryFrameworkWhereInput, { nullable: true })
  @Type(() => LibraryFrameworkWhereInput)
  where?: LibraryFrameworkWhereInput;

  @ApiProperty({
    required: false,
    type: [LibraryFrameworkOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LibraryFrameworkOrderByInput], { nullable: true })
  @Type(() => LibraryFrameworkOrderByInput)
  orderBy?: Array<LibraryFrameworkOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LibraryFrameworkFindManyArgs as LibraryFrameworkFindManyArgs };
