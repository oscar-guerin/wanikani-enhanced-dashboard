import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignModule } from './sign/sign.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthGuard } from '@system/guards/auth.guard';

const routes: Routes = [
  {
    path: 'sign',
    loadChildren: (): Promise<SignModule> => import('./sign/sign.module').then((value: { SignModule: SignModule }) => value.SignModule)
  },
  {
    path: 'app',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: (): Promise<DashboardModule> => import('./dashboard/dashboard.module').then((value: { DashboardModule: DashboardModule }) => value.DashboardModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/app/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
