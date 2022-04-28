import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { RouteNames } from "src/app/_core/routes/routes";
import { User } from "src/app/_domain/session/session.model";
import { SessionQuery } from "src/app/_domain/session/session.query";


interface MenuItems {
  link: string;
  name: string;
}

@Component({
  selector: "app-main",
  templateUrl: "./dashboard-container.component.html",
  styleUrls: ["./dashboard-container.component.scss"]
})
export class DashboardContainerComponent  implements OnInit{

  private subscription: Subscription | null = null;
  private user$ = this.session.select((state) => state.user);


  public menuItems: MenuItems[] = [
    {
      link: RouteNames.dashboard,
      name: "Home"
    }
  ];

  public user: User | undefined;

  constructor(private session: SessionQuery, private router: Router) { }
   
  ngOnInit(): void {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  public async openProfile(): Promise<void> {
    console.log("open profile", await this.router.navigateByUrl(RouteNames.dashboard + "/" + RouteNames.user));
  }

}
