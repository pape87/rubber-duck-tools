import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { PreferenceController } from "./preference/preference.controller";
import { PreferenceService } from "./preference/preference.service";
import { UserInfoController } from "./user-info/user-info.controller";
import { UserInfoService } from "./user-info/user-info.service";

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [PreferenceController, UserInfoController],
  providers: [PreferenceService, UserInfoService],
})
export class AppModule { }
