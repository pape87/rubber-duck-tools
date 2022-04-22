import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { RouteNames } from "../routes/routes";
// import { AuthQuery } from '../../_domain/auth/auth.query';

@Injectable({ providedIn: "root" })
export class DashboardGuard implements CanActivate {
  constructor(private router: Router) { }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;
    // return this.authQuery.token$.pipe(map(token => {
    //   if (!token) this.router.navigateByUrl(RouteNames.access, { replaceUrl: true });
    //   return !!token;
    // }));
  }
}

@Injectable({ providedIn: "root" })
export class LoginGuard implements CanActivate {
  constructor(private router: Router) { }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;
    // return this.authQuery.token$.pipe(map(token => {
    //   if (token) this.router.navigateByUrl(RouteNames.dashboard, { replaceUrl: true });
    //   return !token;
    // }));
  }
}