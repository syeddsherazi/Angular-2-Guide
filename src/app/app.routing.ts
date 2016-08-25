import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SignInComponent} from './signin/signin.component';


const appRoutes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'home', component: HomeComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);