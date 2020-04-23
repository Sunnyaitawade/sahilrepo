import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { BrandComponent } from './brand/brand/brand.component';


const routes: Routes = [ {
  path: '',
  component: HomeNavComponent,
  children: [
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
    //  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'brand', loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule) },
      
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
