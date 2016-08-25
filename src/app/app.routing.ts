import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
<<<<<<< HEAD
import {SignInComponent} from './signin/signin.component';


const appRoutes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'home', component: HomeComponent }
=======



const appRoutes: Routes = [
  { path: '', component: HomeComponent }
>>>>>>> 9d13e5c11f160242486d4db54ba7f74d5ca3062d
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);