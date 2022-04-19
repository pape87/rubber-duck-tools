import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { Preference } from "src/models/preference";
import { PreferenceService } from "./preference.service";


@Controller("preference")
export class PreferenceController {

  constructor(private preferenceService: PreferenceService) {
  }

  @Get("/:id")
  async getPreference(@Param("id") id): Promise<Preference> {
    return await this.preferenceService.getPreferenceByUserId(id);
  }

  @Post("/:id")
  async savePreference(@Param("id") id, @Body() preferences: Preference) {
    return await this.preferenceService.createOrUpdatePreference(id, preferences);
  }
}
