import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[routerLink]',  // tslint:disable-line
    host: {
        '(click)': 'onClick()' // tslint:disable-line
    }
})
export class RouterLinkStubDirective {
    @Input('routerLink') linkParams: any; // tslint:disable-line
    navigatedTo: any = null;

    public onClick(): void {
        this.navigatedTo = this.linkParams;
    }
}
