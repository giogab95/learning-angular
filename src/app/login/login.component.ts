import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  email: string = '';
  password: string = '';

  login(email: string, password: string) {
    const body = { email: email, password: password };
    return this.http
      .post('localhost:5001/users/login', body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        }),
        observe: 'response',
      })
      .subscribe((response) => {
        const token: any = response.headers.get('Authorization');
        this.cookieService.set('jwt', token);
      });
  }
}
