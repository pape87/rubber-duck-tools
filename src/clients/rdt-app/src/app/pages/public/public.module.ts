import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNames } from 'src/app/_core/routes/routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: RouteNames.home,
    pathMatch: 'full'
  },
  {
    path: RouteNames.home,
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
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
export class PublicModule { }
