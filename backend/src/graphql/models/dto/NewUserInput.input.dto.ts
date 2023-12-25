import { Field, InputType } from "@nestjs/graphql"
import { IsOptional, Length, MaxLength } from "class-validator"

@InputType()
export class NewUserInput {
  @Field()
  @MaxLength(30)
  username: string

  @Field({ nullable: true })
  @IsOptional()
  @Length(10, 100)
  email?: string

  @Field((type) => String)
  password: string
}
