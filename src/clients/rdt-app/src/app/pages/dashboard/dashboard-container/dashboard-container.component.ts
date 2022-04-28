import { Component, OnInit } from "@angular/core";
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
export class MainComponent  implements OnInit{

  private subscription: Subscription | null = null;
  private user$ = this.session.select((state) => state.user);


  public menuItems: MenuItems[] = [
    {
      link: RouteNames.dashboard,
      name: "Home"
    },
    {
      link: RouteNames.userPreferences,
      name: "Users"
    }
  ];

  public user: User | undefined;

  constructor(private session: SessionQuery) { }
   
  ngOnInit(): void {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }


}
