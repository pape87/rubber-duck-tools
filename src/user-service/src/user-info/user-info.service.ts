import { Injectable } from "@nestjs/common";
import { model, connect } from "mongoose";

import { User, UserInfo, userSchema } from "src/models/user";

@Injectable()
export class UserInfoService {
  private UserModel = model<User>("User", userSchema);

  async getUserInfoByUserId(id: string): Promise<UserInfo> {
    await connect(process.env.CONNECTION_STRING);

    return await (await this.UserModel.findOne({ id })).userInfo;
  }

  async createOrUpdateUserInfo(id: string, userInfo: UserInfo): Promise<UserInfo> {
    await connect(process.env.CONNECTION_STRING);

    return await this.UserModel.findOneAndUpdate({ id }, { userInfo }, { new: true, upsert: true, setDefaultsOnInsert: true }).lean();
  }
}