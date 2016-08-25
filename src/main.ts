import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
if (process.env.ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);


/*import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import {ROUTER_DIRECTIVES} from '@angular/router';//FOR ROUTING
import { appRouterProviders } from './app.routes';//FOR ROUTING
import {HTTP_PROVIDERS,JSONP_PROVIDERS} from '@angular/http';

if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [ appRouterProviders,HTTP_PROVIDERS,JSONP_PROVIDERS ]);
*/
