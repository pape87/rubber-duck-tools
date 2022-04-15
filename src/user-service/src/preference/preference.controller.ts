import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Preference } from "src/model/preference";
import { PreferenceService } from "./preference.service";
import { Schema, model, connect } from "mongoose";
import { User } from "src/model/user";


const PreferenceSchema = new Schema<Preference>({
  language: { type: String, required: false },
  theme: { type: String, required: false }
})

const userSchema = new Schema<User>({
  id: { type: String, required: true },
  preferences: { type: PreferenceSchema, required: true }
});

const UU = model<User>("User", userSchema);

@Controller("preference")
export class PreferenceController {

  constructor(private preferenceService: PreferenceService) {
  }

  @Get("/:id")
  async getPreference(@Param("id") id): Promise<Preference> {
    await connect("mongodb://root:Foobar1!@user-service-db:27017/user-service?authSource=admin");

    return await UU.findOne({ id });
  }

  @Post("/:id")
  async savePreference(@Param("id") id, @Body() preferences: Preference) {
    console.log("baaaaaaaaaaaaaar", preferences);
    await connect("mongodb://root:Foobar1!@user-service-db:27017/user-service?authSource=admin");

    const user1 = new UU({
      id,
      preferences: preferences
    });

    return await user1.save();
  }
}
