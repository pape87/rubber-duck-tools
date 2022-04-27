import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouteNames } from "src/app/_core/routes/routes";
import { SessionService } from "src/app/_domain/session/session.service";
import { SessionStore } from "src/app/_domain/session/session.store";
import decode from "jwt-decode";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private sessionService: SessionService, private sessionStore: SessionStore, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      const response = await this.sessionService.signIn(params["code"]);
      if (response) {
        const decodedToken = decode(response.access_token);
        this.sessionStore.update({ token: response, user: { username: (decodedToken as any).username, groups:(decodedToken as any)["cognito:groups"] } });
        this.router.navigateByUrl(RouteNames.dashboard);
      } else {
        this.router.navigateByUrl(RouteNames.public);
      }
    });

  }


}
