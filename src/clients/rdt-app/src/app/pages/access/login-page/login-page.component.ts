import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from "@angular/common/http";
import { AuthService } from 'src/app/_domain/auth/auth-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      const response = await this.authService.signIn(params["code"]);

      // const response = await fetch("http://localhost:8080/login");
      const result = await response.json();

      console.log(result);
    });

  }


}
