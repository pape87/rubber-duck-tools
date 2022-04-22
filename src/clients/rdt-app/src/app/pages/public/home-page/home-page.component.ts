import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  public goToLogin() {
    window.location.href = "https://rdt-auth.auth.eu-central-1.amazoncognito.com/login?client_id=2rf24huet112134fk74kroif9s&response_type=code&scope=email+openid+profile&redirect_uri=http://localhost:3000/access/login"
  }

}
