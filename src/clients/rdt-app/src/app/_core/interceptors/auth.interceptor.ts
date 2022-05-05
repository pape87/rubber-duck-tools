import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { SessionToken } from "src/app/_domain/session/session.model";
import { SessionQuery } from "src/app/_domain/session/session.query";
import { SessionService } from "src/app/_domain/session/session.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private sessionQuery: SessionQuery, private sessionService: SessionService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.sessionQuery.token$.pipe(switchMap(token => {
      return next.handle(token && token.access_token ? this.reqWithToken(req, token) : req);
    }));
  }

  private reqWithToken(req: HttpRequest<unknown>, token: SessionToken): HttpRequest<unknown> {
    return req.clone({ headers: req.headers.set("Authorization", `Bearer ${token.access_token}`) });
  }
}