import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import {OnInit} from '@angular/core';//A lifecycle hook
import {FormBuilder} from '@angular/common';
import { Http, HttpModule, ConnectionBackend, HTTP_PROVIDERS, RequestOptions, XHRBackend } from '@angular/http';
import {RouterModule} from '@angular/router';

//MY COMPONENTS
import {SignInComponent} from './signin/signin.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent
  ],
  providers: [
    appRoutingProviders,
    Http,
    HTTP_PROVIDERS,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
