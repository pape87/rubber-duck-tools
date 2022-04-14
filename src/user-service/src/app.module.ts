import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PreferenceController } from "./preference/preference.controller";

@Module({
  imports: [],
  controllers: [AppController, PreferenceController],
  providers: [AppService],
})
export class AppModule { }
