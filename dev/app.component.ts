import {Component} from 'angular2/core';
import {VisitComponent} from './visit.component';

@Component({
    selector: 'my-app',
    template: '<visit></visit>',
    directives: [VisitComponent]
})
export class AppComponent {

}
