import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {
    let jwt: string = this.cookieService.get('token');

    if (jwt) {
      this.router.navigate(['homepage']);
    }
  }
  email: string = '';
  password: string = '';

  login(email: string, password: string) {
    const body = { email, password };
    return this.http
      .post('http://localhost:5001/users/login', body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        }),
        observe: 'response',
      })
      .subscribe((response: any) => {
        const token = response.body?.token;
        if (token) {
          this.cookieService.set('token', token);
          this.router.navigate(['/homepage']);
        }
      });
  }
}
