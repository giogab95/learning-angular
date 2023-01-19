import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router
  ) {}
  jwt = this.cookieService.get('token');
  logout() {
    return this.http
      .post(
        'http://localhost:5001/users/logout',
        { token: this.jwt },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
          }),
          observe: 'response',
        }
      )
      .subscribe((response: any) => {
        this.cookieService.delete('token');
        this.router.navigate(['']);
      });
  }
}
