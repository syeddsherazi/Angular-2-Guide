import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import {OnInit} from '@angular/core';//A lifecycle hook
import {FormBuilder} from '@angular/common';
<<<<<<< HEAD
import { Http, HttpModule, ConnectionBackend, HTTP_PROVIDERS, RequestOptions, XHRBackend } from '@angular/http';
import {RouterModule} from '@angular/router';

//MY COMPONENTS
import {SignInComponent} from './signin/signin.component';
import {HomeComponent} from './home/home.component';
=======
import { Http,HttpModule,ConnectionBackend, HTTP_PROVIDERS, RequestOptions, XHRBackend } from '@angular/http';
import {RouterModule} from '@angular/router';

>>>>>>> 9d13e5c11f160242486d4db54ba7f74d5ca3062d

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    RouterModule
<<<<<<< HEAD
  ],
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent
=======
],
  declarations: [
    AppComponent
>>>>>>> 9d13e5c11f160242486d4db54ba7f74d5ca3062d
  ],
  providers: [
    appRoutingProviders,
    Http,
    HTTP_PROVIDERS,
    FormBuilder
  ],
<<<<<<< HEAD
  bootstrap: [AppComponent]
=======
  bootstrap: [AppComponent

  ]
>>>>>>> 9d13e5c11f160242486d4db54ba7f74d5ca3062d
})

export class AppModule { }
