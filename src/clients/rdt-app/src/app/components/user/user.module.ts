import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [UserComponent]
})
export class UserModule { }
