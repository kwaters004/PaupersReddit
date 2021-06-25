import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
/** list component*/
export class ListComponent {

  @Input() allPosts: any[] = [];


    /** list ctor */
    constructor() {

  }



}
