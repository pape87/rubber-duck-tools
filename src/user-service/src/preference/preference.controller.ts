import { Controller, Get, Param } from "@nestjs/common";
import { Preference } from "src/model/preference";
import { PreferenceService } from "./preference.service";

@Controller("preference")
export class PreferenceController {

  constructor(private preferenceService: PreferenceService) {
  }

  @Get("/:id")
  getPreference(@Param("id") id): Preference {
    return this.preferenceService.getPreferenceByUserId(id);
  }
}
