import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SessionQuery } from "src/app/_domain/session/session.query";

import { RouteNames } from "../routes/routes";
// import { AuthQuery } from '../../_domain/auth/auth.query';

@Injectable({ providedIn: "root" })
export class DashboardGuard implements CanActivate {
  constructor(private router: Router, private sessionQuery: SessionQuery) { }

  canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.sessionQuery.token$.pipe(map(token => {
      if (!token) this.router.navigateByUrl(RouteNames.public, { replaceUrl: true });
      return !!token;
    }));
  }
}

@Injectable({ providedIn: "root" })
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private sessionQuery: SessionQuery) { }
  
  canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.sessionQuery.token$.pipe(map(token => {
      if (token) this.router.navigateByUrl(RouteNames.dashboard, { replaceUrl: true });
      return !token;
    }));
  }
}