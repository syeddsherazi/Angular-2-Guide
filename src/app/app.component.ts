import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
}
