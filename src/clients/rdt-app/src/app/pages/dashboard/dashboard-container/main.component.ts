import { Component } from "@angular/core";
import { RouteNames } from "src/app/_core/routes/routes";


interface MenuItems {
  link: string;
  name: string;
}

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent  {

  public menuItems: MenuItems[] = [
    {
      link: RouteNames.dhome,
      name: "Home"
    },
    {
      link: RouteNames.dhome2,
      name: "Users"
    }
  ];

  constructor() { }


}
