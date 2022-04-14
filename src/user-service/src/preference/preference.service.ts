import { Injectable } from "@nestjs/common";
import { Preference } from "src/model/preference";

const pref = {
  "7bbf7830-f3f0-4ac0-9e12-3def63c4ef8": {
    language: "en",
    theme: "dark"
  } as Preference,
  "bar": {} as Preference,
};

@Injectable()
export class PreferenceService {
  getPreferenceByUserId(id: string): Preference {
    return pref[id];
  }
}
