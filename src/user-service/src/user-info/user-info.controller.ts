import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { UserInfo } from "src/models/user";
import { UserInfoService } from "./user-info.service";

@Controller("userinfo")
export class UserInfoController {

  constructor(private userService: UserInfoService) {
  }

  @Get("/:id")
  async getUserInfo(@Param("id") id): Promise<UserInfo> {
    return await this.userService.getUserInfoByUserId(id);
  }

  @Post("/:id")
  async saveUserInfo(@Param("id") id, @Body() userInfo: UserInfo) {
    return await this.userService.createOrUpdateUserInfo(id, userInfo);
  }
}
