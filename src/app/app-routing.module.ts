import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { HomeNavComponent } from './components/home-nav/home-nav.component';
 
 


const routes: Routes = [ 
  { path: '',canActivate: [AuthGuard], loadChildren: () => import('./components/home.module').then(m => m.HomeModule),},
{ path: 'login', component: LoginComponent },
{ path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
