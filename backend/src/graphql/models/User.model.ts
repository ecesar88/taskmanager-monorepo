import { Field, ID, ObjectType } from "@nestjs/graphql"

@ObjectType({ description: "user" })
export class User {
  @Field(() => ID)
  id: number

  @Field(() => String)
  username: string

  @Field({ nullable: true })
  email: string

  @Field(() => String)
  password: String

  @Field(() => String)
  screenName: string
}
