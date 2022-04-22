import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

import { ApiBaseService } from "src/app/_core/api-base-service";

@Injectable({ providedIn: 'root' })
export class AuthService extends ApiBaseService {

  constructor(
    private http: HttpClient
  ) {
    super("");
  }

  async signIn(code: string): Promise<Response> {
    const response = await this.http.get<Response>(`${this.url}/v1/login`, { params: { code } });

    return await firstValueFrom(response);
  }


}