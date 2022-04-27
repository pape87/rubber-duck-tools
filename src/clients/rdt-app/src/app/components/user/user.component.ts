import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { RouteNames } from "src/app/_core/routes/routes";

import {  User } from "src/app/_domain/session/session.model";
import { SessionStore } from "src/app/_domain/session/session.store";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {

  @Input()
  public user: User | undefined;


  constructor(private sessionStore: SessionStore, private router: Router) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  public signOut(): void {
    this.sessionStore.reset();
    this.router.navigateByUrl(RouteNames.public);
  }
}
