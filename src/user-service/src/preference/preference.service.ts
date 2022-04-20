import { Injectable } from "@nestjs/common";
import { model, connect } from "mongoose";

import { Preference } from "src/models/preference";
import { User, userSchema } from "src/models/user";

@Injectable()
export class PreferenceService {
  private UserModel = model<User>("User", userSchema);

  async getPreferenceByUserId(id: string): Promise<Preference> {
    await connect(process.env.CONNECTION_STRING);

    return await this.UserModel.findOne({ id });
  }

  async createOrUpdatePreference(id: string, preferences: Preference): Promise<Preference> {
    await connect(process.env.CONNECTION_STRING);

    return await this.UserModel.findOneAndUpdate({ id }, { preferences }, { new: true, upsert: true, setDefaultsOnInsert: true }).lean();
  }
}
