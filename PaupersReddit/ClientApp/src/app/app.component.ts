import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  aww: any = null;

  http: HttpClient = null;
  thePosts: any[] = [];

  constructor(http: HttpClient) {
    this.http = http;
    this.loadAww();
  }

  loadAww() {
    /*    alert('load aww is being called')*/
    this.http.get<any>('https://www.reddit.com/r/aww/.json').subscribe(result => {
      console.log(result);
      this.aww = result;
      /*this.createList(this.aww);*/
      this.thePosts = this.aww.data.children;
      
    },
      error => {
        console.log(error);
      });

  }

  createList(anAww: any) {
    for (let i = 0; i < anAww.data.children.length; i++) {
      this.thePosts.push(anAww.data.children[i]);
    }
  }


}
