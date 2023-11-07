import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common"
import { UserService } from "./user.service"
import { User } from "@prisma/client"

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userData: Omit<User, "id">) {
    return this.userService.create(userData)
  }

  // @Get()
  // findAll() {
  //   return this.userService.findAll()
  // }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id)
  }

  @Patch(":id")
  update(@Param("id") id: number, @Body() userData: User) {
    return this.userService.update(+id, userData)
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.userService.remove(+id)
  }
}
