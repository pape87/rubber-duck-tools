import { Component, OnInit } from "@angular/core";
import { Subscription, tap } from "rxjs";
import { Session, SessionToken } from "src/app/_domain/session/session.model";
import { SessionQuery } from "src/app/_domain/session/session.query";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {

  private subscription: Subscription | null = null;
  private token$ = this.session.select();
  
  public token: SessionToken | null = null;


  constructor(private session: SessionQuery) { }

  ngOnInit(): void {
    this.subscription = this.session.token$.pipe(tap((token) => {
      this.token = token;
    })).subscribe();
  }

}
