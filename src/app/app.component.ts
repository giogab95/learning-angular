import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  description = 'test description';
  empyString: string = '';

  editMe(string: string) {
    this.empyString = string;
  }
}
