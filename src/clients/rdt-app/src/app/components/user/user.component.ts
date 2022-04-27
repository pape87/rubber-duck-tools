import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import {  User } from "src/app/_domain/session/session.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {

  @Input()
  public user: User | undefined;


  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
