import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {BannerInlineComponent} from './banner-inline.component';

describe('BannerInlineComponent', () => {
    let component: BannerInlineComponent;
    let fixture: ComponentFixture<BannerInlineComponent>;
    let debug: DebugElement;
    let element: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BannerInlineComponent]
        });

        fixture = TestBed.createComponent(BannerInlineComponent);
        component = fixture.componentInstance;

        // query for the title <h1> by CSS element selector
        debug = fixture.debugElement.query( By.css('h1') );
        element = debug.nativeElement;
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
