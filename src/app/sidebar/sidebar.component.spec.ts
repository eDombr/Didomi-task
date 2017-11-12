import { RouterLinkStubDirective } from './../testing/directives/router-link.stub.directive';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
    let component: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;
    let linkDes: DebugElement[];
    let links: RouterLinkStubDirective[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SidebarComponent,
                RouterLinkStubDirective
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));

        links = linkDes.map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('can get RouterLinks from template', () => {
        expect(links.length).toBe(2, 'should have 2 links');
        expect(links[0].linkParams).toBe('/give-consent', '1st link should go to Give consent');
        expect(links[1].linkParams).toBe('/collected-consents', '1st link should go to Collected consents');
    });

    it('can click Give consnet link in template', () => {
        const giveConsentLinkDe = linkDes[0];
        const giveConsentLink = links[0];

        expect(giveConsentLink.navigatedTo).toBeNull('link should not have navigated yet');

        giveConsentLinkDe.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(giveConsentLink.navigatedTo).toBe('/give-consent');
    });
});
