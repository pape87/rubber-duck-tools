import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ClassProvider } from "@angular/core";

import { AuthInterceptor } from "./auth.interceptor";

export const HTTP_INTERCEPTOR_PROVIDERS: ClassProvider[] = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];