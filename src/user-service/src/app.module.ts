import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PreferenceController } from "./preference/preference.controller";
import { PreferenceService } from "./preference/preference.service";

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, PreferenceController],
  providers: [AppService, PreferenceService],
})
export class AppModule { }
