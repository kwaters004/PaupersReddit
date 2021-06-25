import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.css']
})
/** single-post component*/
export class SinglePostComponent {

  @Input() thePost: any = null;
    
    /** single-post ctor */
    constructor() {

    }
}
