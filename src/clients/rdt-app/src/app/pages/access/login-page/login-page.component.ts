import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SessionService } from "src/app/_domain/session/session.service";
import { SessionStore } from "src/app/_domain/session/session.store";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private sessionService: SessionService, private sessionStore: SessionStore) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      const response = await this.sessionService.signIn(params["code"]);
      if (response)
        this.sessionStore.update(response);
    });

  }


}
