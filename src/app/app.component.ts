import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private cookieService: CookieService, private router: Router) {
    let jwt: string = this.cookieService.get('token');

    if (!jwt) {
      this.router.navigate(['']);
    }
  }
}
