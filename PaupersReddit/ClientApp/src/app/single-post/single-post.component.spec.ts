/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SinglePostComponent } from './single-post.component';

let component: SinglePostComponent;
let fixture: ComponentFixture<SinglePostComponent>;

describe('single-post component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SinglePostComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SinglePostComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});