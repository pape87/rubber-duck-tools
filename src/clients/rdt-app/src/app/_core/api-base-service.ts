import { environment } from "src/environments/environment";

export class ApiBaseService {
  private apiMethod: string;

  get url(): string {
    return `${environment.baseUrl}${this.apiMethod}`;
  }

  constructor(apiMethod: string) {
    this.apiMethod = apiMethod;
  }
}