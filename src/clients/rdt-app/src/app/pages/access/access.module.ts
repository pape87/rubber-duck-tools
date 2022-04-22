import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNames } from 'src/app/_core/routes/routes';


const routes: Routes = [
  {
    path: '',
    redirectTo: RouteNames.login,
    pathMatch: 'full'
  },
  {
    path: RouteNames.login,
    loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccessModule { }
