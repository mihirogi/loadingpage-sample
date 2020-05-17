import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@loadingpage-sample/api-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'loadingpage-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient, private router: Router) {
    this.router.config.forEach(i => console.log(i.path))
  }
}
