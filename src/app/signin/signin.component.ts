import { Component } from '@angular/core';
import '../../../public/css/styles.css';
import { ROUTER_DIRECTIVES, Router, RouterConfig} from '@angular/router';

@Component({
    selector: 'sign-in',
    templateUrl: './signin.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class SignInComponent {
    constructor(private router: Router) {
    }

    goto(route: String) {
        this.router.navigate([route]);
    }
}
