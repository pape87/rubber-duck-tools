import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

import { ApiBaseService } from "src/app/_core/api-base-service";
import { SessionToken } from "./session.model";

@Injectable({ providedIn: "root" })
export class SessionService extends ApiBaseService {

  constructor(
    private http: HttpClient
  ) {
    super("");
  }

  async signIn(code: string): Promise<SessionToken> {
    const response = await this.http.get<SessionToken>(`${this.url}/v1/login`, { params: { code } });

    return await firstValueFrom(response);
  }

  async signOut(): Promise<void> {
    await this.http.get<void>(`${this.url}/v1/logout`);
  }


}