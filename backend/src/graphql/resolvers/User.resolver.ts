import { Args, Mutation, Query, Resolver } from "@nestjs/graphql"
import { User } from "../models/User.model"
import { UserService } from "src/user/user.service"
import { NewUserInput } from "../models/dto/NewUserInput.input.dto"

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async user(@Args("id") id: number): Promise<User> {
    return this.userService.findOne(id)
  }

  // users(@Args() userArgs: UserArgs): Promise<User[]> {
  @Query((returns) => [User])
  async users(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Mutation((returns) => User)
  async addUser(@Args("newUserData") newUserData: NewUserInput): Promise<User> {
    return this.userService.create(newUserData)
  }

  @Mutation((returns) => Boolean)
  async removeUser(@Args("id") id: number) {
    return this.userService.remove(id)
  }
}
