import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PreferenceController } from "./preference/preference.controller";
import { PreferenceService } from "./preference/preference.service";

@Module({
  imports: [],
  controllers: [AppController, PreferenceController],
  providers: [AppService, PreferenceService],
})
export class AppModule { }
